<?php
  // READY

  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed"); //. $conn->connect_error);
  }

  if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
  }
    
  $userid = json_decode($_COOKIE['logintoken'], true)['id'];

  //first check if the user has a game pass account
  $query = "SELECT RewardDay FROM accounts WHERE ID = '$userid'";
  $result = mysqli_query($conn, $query);
  $result = ($result -> fetch_row())[0];

  echo($result);

  $conn->close();
?>