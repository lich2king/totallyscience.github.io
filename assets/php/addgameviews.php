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

//$query = "SELECT * FROM game_data WHERE game = '$gameName'";
//$result = mysqli_num_rows(mysqli_query($conn, $query));


//game exists in database
$ee = "UPDATE `game_data` SET `totalviews`=`totalviews`+1,`day1`=`day1`+1 WHERE game='$gameName'";
//$result = mysqli_query($conn, $query);
mysqli_query($conn, $ee);
die("wef");


   

?>