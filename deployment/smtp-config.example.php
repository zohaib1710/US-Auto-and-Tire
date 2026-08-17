<?php

// Copy this file above public_html as either smtp-config.php or
// site-private/smtp-config.php.
// Never place the real SMTP password inside public_html or commit it to Git.
return [
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    'smtp_encryption' => 'smtps',
    'smtp_username' => 'formsubmission@talecraftpublishers.com',
    'smtp_password' => 'YOUR_HOSTINGER_EMAIL_PASSWORD_HERE',
    'smtp_from_email' => 'formsubmission@talecraftpublishers.com',
    'smtp_to_email' => 'xyedzohaibtirmizi@gmail.com',
    'allowed_hosts' => [
        'silver-herring-845343.hostingersite.com',
        'usautoandtire.com',
        'www.usautoandtire.com',
        'localhost',
        '127.0.0.1',
    ],
];
