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

  $user = json_decode($_COOKIE['logintoken'], true)['id'];

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