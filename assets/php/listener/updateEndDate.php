<?php
$servername = "localhost";
$username = "u138268534_ts_user";
$password = "Totally_accounts4321";
$database = "u138268534_ts_users";


$email = htmlspecialchars($_GET["email"]);
$payerId = htmlspecialchars($_GET["payerId"]);

//User will pay monthly
date_default_timezone_set("America/New_York");
$d=strtotime("+1 Months");
$endDate = date("Y-m-d", $d);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}



$sql = "INSERT INTO PersonalSites (Url, Taken, AccountEmail, Password, PayerId, EndDate)
VALUES ('$url', '1', '$email', '$pass', '$payerId', '$endDate')";

if ($conn->query($sql) === TRUE) {
    echo "Success";
  //echo "New record created successfully";
} else {
  //echo "Error: " . $sql . "<br>" . $conn->error;
  //echo "Error";
}

$conn->close();
?>