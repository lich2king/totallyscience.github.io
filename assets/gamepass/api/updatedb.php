<?php
// READY

include '../../php/config.php';

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

    //check if user has the completed field set to 1
    $query = "SELECT Completed FROM gamepass WHERE ID = '$userid'";
    $result = mysqli_query($conn, $query);
    $result = ($result -> fetch_row())[0];

    if($result == 0)
    {
      //allow user to update then purchase subscription
      
      $query = "UPDATE `gamepass` SET `CustomerID`='$customerid', `Monthly`='$monthly', `ChangeMonthly`='$monthly' WHERE `ID` = '$userid'";

      mysqli_query($conn, $query);
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