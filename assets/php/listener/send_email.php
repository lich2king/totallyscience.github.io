<?php
$from = "help@totallyscience.co";
$to = "zay0106@icloud.com";
$subject = "YESSIRSKY";
$code = rand(10000,99999);
$message = "Your confirmation code is " . $code;
$headers = "From:" . $from;


if (mail($to, $subject, $message, $headers)) {
    // email send client should show confirmation box
    echo "success";
} else {
    echo "The email message was not sent.";
}
?>