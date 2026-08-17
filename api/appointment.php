<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception as MailerException;
use PHPMailer\PHPMailer\PHPMailer;

const MAX_REQUEST_BYTES = 32768;
const MIN_FORM_SECONDS = 3;
const MAX_FORM_SECONDS = 86400;
const MAX_ATTEMPTS_15_MINUTES = 5;
const MAX_ATTEMPTS_24_HOURS = 20;

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: same-origin');

function respond(int $status, bool $success, string $message, array $errors = []): void
{
    http_response_code($status);
    $payload = ['success' => $success, 'message' => $message];

    if ($errors !== []) {
        $payload['errors'] = $errors;
    }

    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function logServerIssue(string $category): void
{
    error_log('[us-autos-appointment] ' . $category);
}

function stringLength(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function scalarPostValue(string $key, bool $required = true): string
{
    if (!array_key_exists($key, $_POST)) {
        if ($required) {
            throw new InvalidArgumentException($key);
        }

        return '';
    }

    if (!is_string($_POST[$key])) {
        throw new InvalidArgumentException($key);
    }

    return trim($_POST[$key]);
}

function normalizedHost(string $value): string
{
    $parts = parse_url($value);

    if (!is_array($parts) || empty($parts['host'])) {
        return '';
    }

    return strtolower((string) $parts['host']);
}

function requestHostIsAllowed(array $allowedHosts): bool
{
    $allowed = [];

    foreach ($allowedHosts as $host) {
        if (is_string($host) && preg_match('/^[a-z0-9.-]+$/i', $host) === 1) {
            $allowed[] = strtolower($host);
        }
    }

    $candidate = '';

    if (!empty($_SERVER['HTTP_ORIGIN'])) {
        $candidate = normalizedHost((string) $_SERVER['HTTP_ORIGIN']);
    } elseif (!empty($_SERVER['HTTP_REFERER'])) {
        $candidate = normalizedHost((string) $_SERVER['HTTP_REFERER']);
    }

    return $candidate === '' || in_array($candidate, $allowed, true);
}

function consumeRateLimit(string $directory, string $secret): bool
{
    if (strlen($secret) < 32) {
        throw new RuntimeException('Rate limit secret is not configured.');
    }

    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new RuntimeException('Rate limit directory cannot be created.');
    }

    if (!is_writable($directory)) {
        throw new RuntimeException('Rate limit directory is not writable.');
    }

    $ipAddress = isset($_SERVER['REMOTE_ADDR']) ? (string) $_SERVER['REMOTE_ADDR'] : 'unknown';
    $identifier = hash_hmac('sha256', $ipAddress, $secret);
    $path = rtrim($directory, '/\\') . DIRECTORY_SEPARATOR . $identifier . '.json';
    $handle = fopen($path, 'c+');

    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) {
            fclose($handle);
        }

        throw new RuntimeException('Rate limit file cannot be locked.');
    }

    try {
        $raw = stream_get_contents($handle);
        $timestamps = $raw !== false && $raw !== '' ? json_decode($raw, true) : [];

        if (!is_array($timestamps)) {
            $timestamps = [];
        }

        $now = time();
        $timestamps = array_values(array_filter($timestamps, static function ($timestamp) use ($now): bool {
            return is_int($timestamp) && $timestamp > $now - 86400;
        }));

        $recentCount = count(array_filter($timestamps, static function ($timestamp) use ($now): bool {
            return $timestamp > $now - 900;
        }));

        if ($recentCount >= MAX_ATTEMPTS_15_MINUTES || count($timestamps) >= MAX_ATTEMPTS_24_HOURS) {
            return false;
        }

        $timestamps[] = $now;
        rewind($handle);

        if (!ftruncate($handle, 0) || fwrite($handle, json_encode($timestamps)) === false || !fflush($handle)) {
            throw new RuntimeException('Rate limit file cannot be updated.');
        }

        @chmod($path, 0600);
        return true;
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'This endpoint accepts appointment requests by POST only.');
}

$contentLength = isset($_SERVER['CONTENT_LENGTH']) ? (int) $_SERVER['CONTENT_LENGTH'] : 0;

if ($contentLength > MAX_REQUEST_BYTES) {
    respond(413, false, 'The appointment request is too large.');
}

$contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? ''));

if (strpos($contentType, 'multipart/form-data') !== 0) {
    respond(422, false, 'The appointment request format is invalid.');
}

$configPath = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'site-private' . DIRECTORY_SEPARATOR . 'smtp-config.php';

if (!is_file($configPath) || !is_readable($configPath)) {
    logServerIssue('private SMTP configuration is missing');
    respond(500, false, 'Online requests are temporarily unavailable. Please call (754) 223-5452.');
}

$config = require $configPath;

if (!is_array($config)) {
    logServerIssue('private SMTP configuration is invalid');
    respond(500, false, 'Online requests are temporarily unavailable. Please call (754) 223-5452.');
}

$requiredConfig = [
    'smtp_host',
    'smtp_port',
    'smtp_encryption',
    'smtp_username',
    'smtp_password',
    'smtp_from_email',
    'smtp_from_name',
    'smtp_to_email',
    'allowed_hosts',
    'timezone',
    'rate_limit_dir',
    'rate_limit_secret',
];

foreach ($requiredConfig as $key) {
    if (!array_key_exists($key, $config) || $config[$key] === '' || $config[$key] === []) {
        logServerIssue('private SMTP configuration is incomplete');
        respond(500, false, 'Online requests are temporarily unavailable. Please call (754) 223-5452.');
    }
}

if (!requestHostIsAllowed((array) $config['allowed_hosts'])) {
    respond(422, false, 'The appointment request could not be verified.');
}

$smtpEncryption = strtolower((string) $config['smtp_encryption']);

if ($smtpEncryption === 'smtps' || $smtpEncryption === 'ssl') {
    $smtpEncryption = 'ssl';
} elseif ($smtpEncryption === 'starttls' || $smtpEncryption === 'tls') {
    $smtpEncryption = 'tls';
} else {
    logServerIssue('SMTP encryption configuration is invalid');
    respond(500, false, 'Online requests are temporarily unavailable. Please call (754) 223-5452.');
}

if (
    filter_var($config['smtp_username'], FILTER_VALIDATE_EMAIL) === false
    || filter_var($config['smtp_from_email'], FILTER_VALIDATE_EMAIL) === false
    || filter_var($config['smtp_to_email'], FILTER_VALIDATE_EMAIL) === false
    || strcasecmp((string) $config['smtp_username'], (string) $config['smtp_from_email']) !== 0
) {
    logServerIssue('SMTP address configuration is invalid');
    respond(500, false, 'Online requests are temporarily unavailable. Please call (754) 223-5452.');
}

$allowedFields = ['first', 'last', 'email', 'phone', 'dateTime', 'website', 'formStarted', 'source', 'sourcePage'];

foreach (array_keys($_POST) as $field) {
    if (!in_array($field, $allowedFields, true)) {
        respond(422, false, 'The appointment request contains an unexpected field.');
    }
}

try {
    $honeypot = scalarPostValue('website', false);
} catch (InvalidArgumentException $exception) {
    respond(422, false, 'The appointment request format is invalid.');
}

if ($honeypot !== '') {
    respond(200, true, 'Thank you. Your appointment request has been received.');
}

$errors = [];

try {
    $first = scalarPostValue('first');
    $last = scalarPostValue('last');
    $email = scalarPostValue('email');
    $phone = scalarPostValue('phone');
    $dateTimeInput = scalarPostValue('dateTime');
    $formStarted = scalarPostValue('formStarted');
    $source = scalarPostValue('source');
    $sourcePage = scalarPostValue('sourcePage');
} catch (InvalidArgumentException $exception) {
    respond(422, false, 'Please complete every required field.');
}

$namePattern = "/^[\\p{L}\\p{M} .'-]+$/u";

if ($first === '' || stringLength($first) > 80 || preg_match($namePattern, $first) !== 1) {
    $errors['first'] = 'Enter a valid first name.';
}

if ($last === '' || stringLength($last) > 80 || preg_match($namePattern, $last) !== 1) {
    $errors['last'] = 'Enter a valid last name.';
}

if (stringLength($email) > 254 || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $errors['email'] = 'Enter a valid email address.';
}

$phoneDigits = preg_replace('/\\D+/', '', $phone);

if (stringLength($phone) > 32 || $phoneDigits === null || strlen($phoneDigits) < 7 || strlen($phoneDigits) > 15) {
    $errors['phone'] = 'Enter a valid phone number.';
}

if (!ctype_digit($formStarted)) {
    $errors['formStarted'] = 'Refresh the page and try again.';
} else {
    $elapsed = time() - (int) $formStarted;
    if ($elapsed < MIN_FORM_SECONDS || $elapsed > MAX_FORM_SECONDS) {
        $errors['formStarted'] = 'Refresh the page and try again.';
    }
}

if ($source !== 'appointment_request') {
    $errors['source'] = 'The form source is invalid.';
}

$allowedPages = [
    'index',
    'services',
    'car-care',
    'about',
    'gallery',
    'finance',
    'coupons',
    'oil-and-filter-changes',
    'tire-rotations',
    'wheel-alignments',
    'brake-inspections',
    'battery-testing',
    'fluid-services',
    'engine-diagnostics',
    'transmission-repairs',
    'suspension-and-exhaust',
];

if (!in_array($sourcePage, $allowedPages, true)) {
    $errors['sourcePage'] = 'The source page is invalid.';
}

try {
    $timezone = new DateTimeZone((string) $config['timezone']);
    $requestedDate = DateTimeImmutable::createFromFormat('!Y-m-d\\TH:i', $dateTimeInput, $timezone);
    $dateErrors = DateTimeImmutable::getLastErrors();
    $dateIsInvalid = $requestedDate === false
        || ($dateErrors !== false && ($dateErrors['warning_count'] > 0 || $dateErrors['error_count'] > 0))
        || ($requestedDate !== false && $requestedDate->format('Y-m-d\\TH:i') !== $dateTimeInput);

    if ($dateIsInvalid) {
        $errors['dateTime'] = 'Choose a valid date and time.';
    } else {
        $now = new DateTimeImmutable('now', $timezone);
        if ($requestedDate <= $now || $requestedDate > $now->modify('+90 days')) {
            $errors['dateTime'] = 'Choose a future date within the next 90 days.';
        }
    }
} catch (Throwable $exception) {
    logServerIssue('timezone configuration is invalid');
    respond(500, false, 'Online requests are temporarily unavailable. Please call (754) 223-5452.');
}

if ($errors !== []) {
    respond(422, false, 'Please check the highlighted fields and try again.', $errors);
}

try {
    if (!consumeRateLimit((string) $config['rate_limit_dir'], (string) $config['rate_limit_secret'])) {
        respond(429, false, 'Too many appointment requests were submitted. Please wait before trying again.');
    }
} catch (Throwable $exception) {
    logServerIssue('rate limit storage is unavailable');
    respond(500, false, 'Online requests are temporarily unavailable. Please call (754) 223-5452.');
}

$mailerRoot = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'assets' . DIRECTORY_SEPARATOR . 'phpmailer' . DIRECTORY_SEPARATOR . 'src';
require_once $mailerRoot . DIRECTORY_SEPARATOR . 'Exception.php';
require_once $mailerRoot . DIRECTORY_SEPARATOR . 'PHPMailer.php';
require_once $mailerRoot . DIRECTORY_SEPARATOR . 'SMTP.php';

$escape = static function (string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};

$requestedDisplay = $requestedDate->format('F j, Y \\a\\t g:i A T');
$submittedUtc = gmdate('F j, Y \\a\\t g:i A') . ' UTC';
$fullName = trim($first . ' ' . $last);
$subject = 'US Autos & Tires appointment request: ' . $fullName . ', ' . $requestedDate->format('M j \\a\\t g:i A');
$rows = [
    'Name' => $fullName,
    'Email' => $email,
    'Phone' => $phone,
    'Requested date and time' => $requestedDisplay,
    'Source page' => $sourcePage,
    'Submitted' => $submittedUtc,
];

$htmlRows = '';

foreach ($rows as $label => $value) {
    $htmlRows .= '<tr>'
        . '<td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#7B8494;font-size:13px;vertical-align:top;width:38%;">' . $escape($label) . '</td>'
        . '<td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;color:#0F1B33;font-size:15px;font-weight:600;vertical-align:top;">' . $escape($value) . '</td>'
        . '</tr>';
}

$htmlBody = '<!doctype html><html><body style="margin:0;background:#f5f5f3;font-family:Arial,sans-serif;color:#0F1B33;">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f3;padding:32px 12px;"><tr><td align="center">'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;">'
    . '<tr><td style="background:#0F1B33;padding:28px 30px;"><div style="color:#C8202A;font-size:12px;font-weight:700;letter-spacing:1.5px;">US AUTOS &amp; TIRES</div>'
    . '<h1 style="margin:10px 0 0;color:#ffffff;font-size:26px;line-height:1.25;">New appointment request</h1></td></tr>'
    . '<tr><td style="padding:26px 30px 12px;"><p style="margin:0 0 20px;color:#4b5563;font-size:15px;line-height:1.6;">A visitor requested an appointment. Contact them to confirm availability before treating the requested time as booked.</p>'
    . '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">' . $htmlRows . '</table>'
    . '<p style="margin:22px 0 0;color:#7B8494;font-size:12px;line-height:1.5;">Reply to this message to contact the visitor at their submitted email address.</p></td></tr>'
    . '<tr><td style="padding:16px 30px 26px;color:#9ca3af;font-size:11px;">Secure website notification from usautoandtire.com</td></tr>'
    . '</table></td></tr></table></body></html>';

$plainLines = [
    'US AUTOS & TIRES',
    'NEW APPOINTMENT REQUEST',
    '',
    'Contact the visitor to confirm availability. The requested time is not yet booked.',
    '',
];

foreach ($rows as $label => $value) {
    $plainLines[] = $label . ': ' . $value;
}

$plainLines[] = '';
$plainLines[] = 'Reply to this message to contact the visitor.';
$plainBody = implode("\r\n", $plainLines);

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp_host'];
    $mail->Port = (int) $config['smtp_port'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp_username'];
    $mail->Password = (string) $config['smtp_password'];
    $mail->SMTPSecure = $smtpEncryption;
    $mail->CharSet = PHPMailer::CHARSET_UTF8;
    $mail->Timeout = 15;
    $mail->SMTPDebug = 0;
    $mail->setFrom((string) $config['smtp_from_email'], (string) $config['smtp_from_name']);
    $mail->addAddress((string) $config['smtp_to_email']);
    $mail->addReplyTo($email, $fullName);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $htmlBody;
    $mail->AltBody = $plainBody;
    $mail->send();
} catch (MailerException $exception) {
    logServerIssue('SMTP delivery failed');
    respond(500, false, 'We could not send the request online. Please call (754) 223-5452.');
} catch (Throwable $exception) {
    logServerIssue('mail delivery failed unexpectedly');
    respond(500, false, 'We could not send the request online. Please call (754) 223-5452.');
}

respond(200, true, 'Thank you. Your appointment request has been received.');
