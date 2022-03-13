<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";


$user = htmlspecialchars($_GET["username"]);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

date_default_timezone_set("America/New_York");


if ($userresult = $conn->query("SELECT * FROM liveviews WHERE username = '$user'"))
{
    die($userresult);

}
else
{
    //add to db
    echo("No RESULTS OF USERNAME!");
}

//After do the for loop to delete old ones

            
    
$conn->close();


?>