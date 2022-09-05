<?php
// READY

include '../../php/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed");
}

if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
}
  
$userid = json_decode($_COOKIE['logintoken'], true)['id'];

$query = "SELECT Renew FROM gamepass WHERE ID = '$userid'";
$result = mysqli_query($conn, $query);
$result = ($result -> fetch_row())[0];

echo($result);


$conn->close();

?>