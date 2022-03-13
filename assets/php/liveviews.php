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

date_default_timezone_set("America/New_York");
$d=strtotime("+1 Minutes");
$currentTime = date("d-m-Y h:i:s");
$otherTime = date("d-m-Y h:i:s", $d);
die($currentTime, $otherTime);

?>