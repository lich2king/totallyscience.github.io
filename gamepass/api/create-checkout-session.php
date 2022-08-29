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


  $customer = \Stripe\Customer::create();

  $checkout_session = \Stripe\Checkout\Session::create([
    'customer' => $customer,
    'line_items' => [[
      'price' => $prices->data[0]->id,
      'quantity' => 1,
    ]],
    'mode' => 'subscription',
    'success_url' => $YOUR_DOMAIN . '/success.php?session_id={CHECKOUT_SESSION_ID}',
    'cancel_url' => $YOUR_DOMAIN . '/cancel.php',
  ]);

  if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
  }
  
  $userid = json_decode($_COOKIE['logintoken'], true)['id'];
  $customerid = $checkout_session['customer'];

  //add customerid to userid in db
  include '../../assets/php/config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed"); //. $conn->connect_error);
  }
  
  
  //first check if the user has not already liked the game
  $query = "SELECT * FROM gamepass WHERE ID = '$userid'";
  $result = mysqli_num_rows(mysqli_query($conn, $query));
  
  date_default_timezone_set("America/New_York");
  $d=strtotime("+1 Months");
  $endDate = date("Y-m-d", $d);
  
  if($result <= 0)
  {
      //user has not already liked the game
      $query = "INSERT INTO gamepass (ID, CustomerID, EndDate, Monthly)
      VALUES ('$userid', $customerid, $endDate, 1)";
  
      $result = mysqli_query($conn, $query);
  }
  else
  {
      //user has gamepass, add a month to the membership
      die("You already have gamepass");
  }
  
  
  $conn->close();


  header("HTTP/1.1 303 See Other");
  header("Location: " . $checkout_session->url);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}