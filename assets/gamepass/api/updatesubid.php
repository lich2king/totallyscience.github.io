<?php
// READY

include '../../php/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


$query = "UPDATE `gamepass` SET `SubscriptionID`='$subscriptionID' WHERE CustomerID='$customer'";
mysqli_query($conn, $query);


$conn->close();

?>