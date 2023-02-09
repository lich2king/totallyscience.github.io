<?php
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
    die("no cookie");
  }
  
  $id = $data['auth']['id'];

  $query = "SELECT `PinnedGames` FROM `accounts` WHERE id='$id'";
  $result = mysqli_query($conn, $query);
  $result = ($result -> fetch_row())[0];

  echo($result);
    
  $conn->close();
?>