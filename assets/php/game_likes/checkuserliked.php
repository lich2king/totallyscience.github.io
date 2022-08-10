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

//check if user liked the game


$query = "SELECT * FROM liked_games WHERE ID = '$user' AND Game = '$gameName'";
$result = mysqli_query($conn, $query);

if(mysqli_num_rows($result > 0))
{
    //user has liked the game
    echo('liked');    
}
else
{
    echo('unliked');
}









   
$conn->close();

?>