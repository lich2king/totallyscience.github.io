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

$query = "SELECT score FROM `highscores` WHERE game='$gameName'";
$result = mysqli_query($conn, $query);
$result = ($result -> fetch_row())[0];

echo($result);

$conn->close();

?>