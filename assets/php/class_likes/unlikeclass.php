<?php
  // READY

  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed"); //. $conn->connect_error);
  }

  $gameName = htmlspecialchars($_GET["name"]);

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
      die("error: no cookie");
  }

  $user = $data['auth']['id'];

  $query = "DELETE FROM liked_games WHERE ID='$user' AND Game = '$gameName'";

  mysqli_query($conn, $query);
    
  $conn->close();
?>