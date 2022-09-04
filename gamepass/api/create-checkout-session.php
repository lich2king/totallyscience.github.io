<?php

require_once('stripe-php-9.4.0/init.php');

// This is your test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51LbBGpBRp1VXv1XhXArK0hGPZrl9XdeuZR8pywqPFpQRpWt3Uy3WzTfH1aJEk062WyIxa207bWjaQhAlaHeP3JmV00XjD3Uorj');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://mathstudyplace.com';

try {
  $prices = \Stripe\Price::search([
    // retrieve lookup_key from form data POST body
    //'lookup_keys' => [$_POST['lookup_key']],
    //'id' => 'price_1LcA10BRp1VXv1XhahWkIPJx',
    'query' => 'metadata[\'test\']:\'test\''
    //'expand' => ['data.product']
  ]);


  $customer = \Stripe\Customer::create();

  $checkout_session = \Stripe\Checkout\Session::create([
    'customer' => $customer,
    'line_items' => [[
      'price' => $prices->data[0]->id,
      'quantity' => 1,
    ]],
    'mode' => 'subscription',
    'success_url' => $YOUR_DOMAIN . '/gpsuccess.php?session_id={CHECKOUT_SESSION_ID}',
    'cancel_url' => $YOUR_DOMAIN . '/gamepass.php',
  ]);

  if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
  }
  
  $userid = json_decode($_COOKIE['logintoken'], true)['id'];
  $customerid = $checkout_session['customer'];
  $monthly = 0;
  if($_POST['lookup_key'] == 'gpmonthly')
  {
    $monthly = 1;
  }

  //add customerid to userid in db
  include('updatedb.php');


  header("HTTP/1.1 303 See Other");
  header("Location: " . $checkout_session->url);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}