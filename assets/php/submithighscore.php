<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";


$username = htmlspecialchars($_GET["username"]);
$game = htmlspecialchars($_GET["game"]);
$score = htmlspecialchars($_GET["score"]);
$imageBlob = htmlspecialchars($_GET["imageBlob"]);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}



   
$conn->close();

?>