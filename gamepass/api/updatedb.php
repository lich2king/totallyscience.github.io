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
    $query = "INSERT INTO gamepass (`ID`, `CustomerID`, `Monthly`, `ChangeMonthly`)
    VALUES ('$userid', '$customerid', $monthly, $monthly)";

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
      //redirect user to subscription status page
      header('Location: ../../gpstatus.php');
      exit;
    }
    else
    {
      //redirect user to page to renew their subscription
      header('Location: ../../gpstatus.php');
      exit;
    }
}


$conn->close();

?>