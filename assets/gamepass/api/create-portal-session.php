<?php

require_once('stripe-php-9.4.0/init.php');
// This is your real test secret API key.
\Stripe\Stripe::setApiKey('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');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://totallyscience.co/gamepass/success.php';

try {
  $checkout_session = \Stripe\Checkout\Session::retrieve($_POST['session_id']);
  $return_url = $YOUR_DOMAIN;

  // Authenticate your user.
  $session = \Stripe\BillingPortal\Session::create([
    'customer' => $checkout_session->customer,
    'return_url' => $return_url,
  ]);
  header("HTTP/1.1 303 See Other");
  header("Location: " . $session->url);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}