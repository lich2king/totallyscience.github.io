<?php
include './config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

echo "slope";

$query = "UPDATE `game_data` SET `totalviews`=`totalviews`+1,`day1`=`day1`+1 WHERE game='Slope'";
$result = mysqli_query($conn, $query);

?>