<?php
  // READY

  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed");
  }

  $gameName = htmlspecialchars($_GET["name"]);

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
      die("error: no cookie");
  }

  $user = $data['auth']['id'];

  //check if user liked the game
  $query = "SELECT * FROM liked_games WHERE ID = '$user' AND Game = '$gameName'";
  $result = mysqli_num_rows(mysqli_query($conn, $query));

  if($result > 0) {
    echo("liked");    
  } else {
    echo("unliked");
  }
    
  $conn->close();
?>