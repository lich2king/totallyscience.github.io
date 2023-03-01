<?php
  // READY
  
  include 'config.php';

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
  
  $user = $data['auth']['username'];

  $userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'");

  $row = $userresult -> fetch_row();
  
  echo $row[6];
?>