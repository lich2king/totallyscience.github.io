<?php
// READY

include '../../assets/php/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


//first check if the user has not already liked the game
$query = "SELECT * FROM gamepass WHERE ID = '$userid'";
$result = mysqli_num_rows(mysqli_query($conn, $query));

date_default_timezone_set("America/New_York");
$d=strtotime("+1 Months");
$endDate = date("Y-m-d", $d);

/*if($result <= 0)
{
    //user has not already liked the game
    $query = "INSERT INTO liked_games (ID, CustomerID, EndDate, Monthly)
    VALUES ('$userid', $customerid, $endDate, 1)";

    $result = mysqli_query($conn, $query);
}
else
{
    //user has gamepass, add a month to the membership
    die("You already have gamepass");
}*/

$query = "INSERT INTO gamepass (ID, CustomerID, EndDate, Monthly)
    VALUES ('$userid', $customerid, $endDate, 1)";

$result = mysqli_query($conn, $query);

$conn->close();

?>