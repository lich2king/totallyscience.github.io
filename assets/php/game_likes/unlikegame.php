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

$user = json_decode($_COOKIE['logintoken'], true)['username'];


$query = "DELETE FROM liked_games WHERE ID='$user' AND Game = '$gameName'";



   
$conn->close();

?>