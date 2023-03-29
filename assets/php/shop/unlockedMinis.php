<?php

//Check if they have 1000 points
//Choose 1-10
//Choose character from list of rarity based on that
//Check if user owns character
//If they do... choose new character
// If they don't... take away 1000, update their profile to have the new character... then return the character

  // READY

  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed");
  }


  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
      die("error: no cookie");
  }

  $userid = $data['auth']['id'];

  $query = "SELECT Minis FROM accounts WHERE ID = '$userid'";
  $minis = mysqli_query($conn, $query);

  die($minis);


  
    
  $conn->close();
?>