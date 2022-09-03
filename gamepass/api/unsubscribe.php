<?php

require_once('stripe-php-9.4.0/init.php');

// This is your test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51LbBGpBRp1VXv1XhXArK0hGPZrl9XdeuZR8pywqPFpQRpWt3Uy3WzTfH1aJEk062WyIxa207bWjaQhAlaHeP3JmV00XjD3Uorj');

header('Content-Type: application/json');

$YOUR_DOMAIN = 'http://mathstudyplace.com/gamepass.php';

try {
  if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
  }

  $userid = json_decode($_COOKIE['logintoken'], true)['id'];

  //get subid from uid

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

  $subscriptionID = '';

  if($result > 0)
  {
    $query = "SELECT `SubscriptionID` FROM gamepass WHERE ID = '$userid'";
    $result = mysqli_query($conn, $query);
    $subscriptionID = ($result -> fetch_row())[0];
  }
  else
  {
    die("You do not have Game Pass.");
  }

  $conn->close();



  $subscription = \Stripe\Subscription::retrieve("$subscriptionID");
  $subscription->cancel();

  header("HTTP/1.1 303 See Other");
  header("Location: " . $checkout_session->url);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}