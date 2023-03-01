<?php
  // READY

  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed"); //. $conn->connect_error);
  }

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
      die("error: no cookie");
  }

  $userid = $data['auth']['id'];

  //first check if the user has a game pass account
  $query = "UPDATE accounts SET DailyReward = UNIX_TIMESTAMP() + 86400  WHERE ID = '$userid'";
  $result = mysqli_query($conn, $query);

  $conn->close();
?>