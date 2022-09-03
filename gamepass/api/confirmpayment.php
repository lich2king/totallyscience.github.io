<?php
// READY

include '../../assets/php/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


date_default_timezone_set("America/New_York");
$date = date("Y-m-d");

$query = "UPDATE `gamepass` SET `Completed`='1', `LastPayment`='$date', `Renew`='1', `Monthly`=`ChangeMonthly` WHERE CustomerID='$customer'";
mysqli_query($conn, $query);





$conn->close();

?>