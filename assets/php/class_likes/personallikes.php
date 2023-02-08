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

  $user = json_decode($data['auth'], true)['id'];

  $query = "SELECT `game` FROM `liked_games` WHERE id='$user'";
  $result = mysqli_query($conn, $query);

  $likedgames = array ();

  while ($row = mysqli_fetch_assoc($result)) {
    $game = $row["game"];
    array_push($likedgames, array($game));
  }

  echo(json_encode($likedgames));    
    
  $conn->close();
?>