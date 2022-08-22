<?php

include './config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

$gameName = htmlspecialchars($_GET["name"]);




//first check if the user has not already liked the game

$query = "SELECT * FROM game_data WHERE game = '$gameName'";
$result = mysqli_num_rows(mysqli_query($conn, $query));

$query = "INSERT INTO game_data (game, totalviews, day1)
    VALUES ('$gameName', 1, 1)";

    $result = mysqli_query($conn, $query);
    die("hh");


   
$conn->close();

?>