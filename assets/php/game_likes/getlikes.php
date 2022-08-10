<?php

$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

$gameName = htmlspecialchars($_GET["name"]);


$query = "SELECT * FROM liked_games WHERE game = '$gameName'";
$result = mysqli_query($conn, $query);



echo(mysqli_num_rows($result));    


   
$conn->close();

?>