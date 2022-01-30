<?php

$servername = "localhost";
$username = "u483325885_profile";
$password = "Totally_password4321";
$database = "u483325885_accounts";

$user = htmlspecialchars($_GET["username"]);
$pass = htmlspecialchars($_GET["password"]);


// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if ($userresult = $conn->query("SELECT * FROM AccountsTable WHERE Username = '$user'"))
{
    $row = $userresult -> fetch_row();
    echo $row;
}
else{
    echo("Username or Password is Incorrect");
}

$mysqli -> close();

?>