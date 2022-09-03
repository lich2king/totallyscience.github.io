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



if($result <= 0)
{
    //user has not already liked the game
    $query = "INSERT INTO gamepass (`ID`, `CustomerID`, `Monthly`)
    VALUES ('$userid', '$customerid', $monthly)";

    mysqli_query($conn, $query);
}
else
{
    //user has gamepass

    //check if user will renew
    $query = "SELECT Renew FROM gamepass WHERE ID = '$userid'";
    $result = mysqli_query($conn, $query);
    $result = ($result -> fetch_row())[0];

    if($result == 1)
    {
      die("You already have gamepass");
    }
    //user can renew their membership if they are set to expire
}


$conn->close();

?>