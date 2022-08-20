<?php

include '../config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

$gameName = htmlspecialchars($_GET["name"]);

if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
}

$userid = json_decode($_COOKIE['logintoken'], true)['id'];

$query = "SELECT `RecentGames` FROM `accounts` WHERE id='$userid'";
$result = mysqli_query($conn, $query);
$result = ($result -> fetch_row())[0];



//game is already part of recent games
$recentString = str_replace(";$gameName",'',$result);
$recentString = ";$gameName$recentString"; //bring game to start of list
$recentString = explode(";",$recentString);

$recentString = array_slice($recentString, 1, 10);
$recentString = implode(";",$recentString);
//$recentString = `;$recentString`;

$query = "UPDATE `accounts` SET RecentGames='$recentString' WHERE ID='$userid'";
mysqli_query($conn, $query);

die();
   
$conn->close();

?>