<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";


$username = htmlspecialchars($_GET["username"]);
$game = htmlspecialchars($_GET["game"]);
$score = htmlspecialchars($_GET["score"]);
$imageFile = htmlspecialchars($_GET["imageFile"]);

echo($imageFile);
//$baseImage = file_get_contents($imageFile);
//echo($baseImage);
$baseImage = base64_encode($baseImage);


die($baseImage);


// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


/*
$userresult = $conn->query("SELECT * FROM AccountsTable WHERE Email = '$email'");
    //die($userresult);
    if($userresult->num_rows == 0) {
        // row not found, do stuff...
        echo("not found");
    } else {
        // do other stuff...
        echo("found");
    }
    */


   
$conn->close();

?>