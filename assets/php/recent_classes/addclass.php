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

  $userid = $data['auth']['id'];
  $query = "SELECT `RecentGames` FROM `accounts` WHERE id='$userid'";
  $result = mysqli_query($conn, $query);
  $result = ($result -> fetch_row())[0];

  //game is already part of recent games
  $recentString = str_replace(";$gameName",'',$result);
  $recentString = ";$gameName$recentString"; //bring game to start of list
  $recentString = explode(";",$recentString);
  $newString = implode(";",array_slice($recentString, 1, 10));
  $newString = ";$newString";
  $query = "UPDATE `accounts` SET RecentGames='$newString' WHERE ID='$userid'";

  mysqli_query($conn, $query);

  die();
    
  $conn->close();
?>