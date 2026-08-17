# Appointment Form Email Delivery

The appointment form submits to `api/appointment.php` on the same website. The
endpoint sends an internal notification through authenticated SMTP only after
server-side validation and abuse checks succeed.

## Live directory layout

Upload the tracked website files into `public_html`. Keep the real mail
configuration in a sibling directory:

```text
account-home/
  public_html/
    api/appointment.php
    assets/phpmailer/
    js/main.js
    ...
  site-private/
    smtp-config.php
    rate-limits/
```

The PHP process must be allowed to read `site-private/smtp-config.php` and write
to `site-private/rate-limits`. Recommended permissions are `600` for the config
file and `700` for the private directories, subject to the hosting account's
required ownership and permission model.

## Private SMTP configuration

1. Copy `deployment/smtp-config.example.php` to
   `site-private/smtp-config.php` outside `public_html`.
2. Replace the password placeholder directly in Hostinger's file manager or a
   secure deployment secret workflow.
3. Replace the rate-limit secret with at least 32 random characters.
4. Do not paste either secret into browser JavaScript, chat, Git, or a public
   directory.

Configured delivery identities:

- SMTP host: `smtp.hostinger.com`
- Port and encryption: `465` with implicit TLS
- Authenticated sender: `formsubmission@talecraftpublishers.com`
- Notification recipient: `xyedzohaibtirmizi@gmail.com`
- Visitor email: used only as the message's Reply-To address

The private configuration follows the Hostinger-style keys `smtp_host`,
`smtp_port`, `smtp_encryption`, `smtp_username`, `smtp_password`,
`smtp_from_email`, `smtp_to_email`, and `allowed_hosts`. The additional
`smtp_from_name`, `timezone`, `rate_limit_dir`, and `rate_limit_secret` values
support branded notifications, appointment-time validation, and abuse controls.

If hPanel shows different SMTP settings for the sender mailbox, use the values
from hPanel. Port `587` with `tls` is the normal fallback when port `465` is not
available.

## Allowed hosts

The endpoint accepts browser submissions from these hostnames:

- `usautoandtire.com`
- `www.usautoandtire.com`
- `silver-herring-845343.hostingersite.com`
- `localhost`
- `127.0.0.1`

Update the private configuration when the production hostname changes. Do not
add wildcard hosts.

## Runtime requirements

- PHP 7.4 or newer
- OpenSSL enabled
- PHP access to outbound SMTP on the configured port
- A writable private rate-limit directory
- PHPMailer files from the official 7.1.1 release in `assets/phpmailer`

## Security behavior

The endpoint is POST-only and accepts `multipart/form-data`. It validates every
field, limits request size, checks the source and source page, verifies Origin or
Referer when present, rejects implausibly fast submissions, silently accepts the
honeypot, and applies locked hashed-IP rate limits. SMTP errors remain private.

Limits are five attempts per hashed IP in 15 minutes and twenty attempts in 24
hours. The form accepts appointment requests up to 90 days ahead in the
`America/New_York` timezone.

## Deployment checks

1. Confirm the sender mailbox can sign in through Hostinger SMTP.
2. Verify SPF, DKIM, and DMARC for `talecraftpublishers.com`.
3. Confirm the private configuration is not reachable over HTTP.
4. Confirm `site-private/rate-limits` is writable by PHP.
5. Submit one request from each live hostname.
6. Confirm the notification reaches `xyedzohaibtirmizi@gmail.com` and that Reply
   targets the visitor's address.
7. Review Hostinger Email Logs if SMTP accepts a message that does not appear in
   the recipient inbox.

The website reports a successful request only after SMTP accepts the message.
The requested date and time still require confirmation by the shop.
