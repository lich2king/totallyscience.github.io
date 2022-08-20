<?php

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

$userid = json_decode($_COOKIE['logintoken'], true)['id'];

$query = "SELECT `RecentGames` FROM `accounts` WHERE id='$userid'";
$result = mysqli_query($conn, $query);
$result = ($result -> fetch_row())[0];


echo($result);





   
$conn->close();

?>