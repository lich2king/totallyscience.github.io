<?php
require_once('stripe-php-9.4.0/init.php');

// This is your real test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51LbBGpBRp1VXv1XhXArK0hGPZrl9XdeuZR8pywqPFpQRpWt3Uy3WzTfH1aJEk062WyIxa207bWjaQhAlaHeP3JmV00XjD3Uorj');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://mathstudyplace.com/gamepass/success.php';

try {
  $checkout_session = \Stripe\Checkout\Session::retrieve($_POST['session_id']);
}
  /*$return_url = $YOUR_DOMAIN;

  // Authenticate your user.
  $session = \Stripe\BillingPortal\Session::create([
    'customer' => $checkout_session->customer,
    'return_url' => $return_url,
  ]);
  //header("HTTP/1.1 303 See Other");
  //header("Location: " . $session->url);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}*/