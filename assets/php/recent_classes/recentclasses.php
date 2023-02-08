<?php
  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed");
  }

  $json = file_get_contents('php://input');
  $data = json_decode($json);

  if (!isset($data['auth'])) {
    die("no cookie");
  }

  $userid = json_decode($data['auth'], true)['id'];
  $query = "SELECT `RecentGames` FROM `accounts` WHERE id='$userid'";
  $result = mysqli_query($conn, $query);
  $result = ($result -> fetch_row())[0];

  echo($result);
    
  $conn->close();
?>