<?php
// READY

include '../../assets/php/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
}
  
$userid = json_decode($_COOKIE['logintoken'], true)['id'];

$query = "SELECT `LastPayment` FROM gamepass WHERE ID = '$userid'";
$result = mysqli_query($conn, $query);
$result = ($result -> fetch_row())[0];

$query = "SELECT `Monthly` FROM gamepass WHERE ID = '$userid'";
$monthly = mysqli_query($conn, $query);
$monthly = ($monthly -> fetch_row())[0];

date_default_timezone_set("America/New_York");
if($monthly == 1)
{
    $d=strtotime("+1 Months");
    $date = date($result, $d);
    echo($result);
}else{
    $d=strtotime("+1 Years");
    $date = date($result, $d);
    echo($result);
}



$conn->close();

?>