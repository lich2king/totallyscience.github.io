<?php

include '../config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

//game exists in database
$query = "UPDATE `game_data` SET `totalviews`=`totalviews`-`day7`,`day1`=0, `day2`=`day1`, `day3`=`day2`, `day4`=`day3`, `day5`=`day4`, `day6`=`day5`, `day7`=`day6` WHERE 1";
$result = mysqli_query($conn, $query);


   
$conn->close();

?>