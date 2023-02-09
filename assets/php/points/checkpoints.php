<?php
  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("error: connection failed");
  }

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
    die("no cookie");
  }
    
  $id = $data['auth']['id'];

  //first check if the user has a game pass account
  $query = "SELECT Points FROM accounts WHERE ID = '$id'";
  $result = mysqli_query($conn, $query);
  $result = ($result -> fetch_row())[0];

  echo($result);

  $conn->close();
?>