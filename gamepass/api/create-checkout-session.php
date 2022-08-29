<?php

require_once('stripe-php-9.4.0/init.php');

// This is your test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51LbBGpBRp1VXv1XhXArK0hGPZrl9XdeuZR8pywqPFpQRpWt3Uy3WzTfH1aJEk062WyIxa207bWjaQhAlaHeP3JmV00XjD3Uorj');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://mathstudyplace.com/gamepass';

try {
  $prices = \Stripe\Price::all([
    // retrieve lookup_key from form data POST body
    'lookup_keys' => [$_POST['lookup_key']],
    'expand' => ['data.product']
  ]);

  $checkout_session = \Stripe\Checkout\Session::create([
    'line_items' => [[
      'price' => $prices->data[0]->id,
      'quantity' => 1,
    ]],
    'mode' => 'subscription',
    'success_url' => $YOUR_DOMAIN . '/success.php?session_id={CHECKOUT_SESSION_ID}',
    'cancel_url' => $YOUR_DOMAIN . '/cancel.php',
  ]);

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

  header("HTTP/1.1 303 See Other");
  header("Location: " . $checkout_session->url);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}