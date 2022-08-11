<?php

include '../config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

$gameName = htmlspecialchars($_GET["name"]);

if (!isset($_COOKIE['logintoken'])) {
    die("no cookie");
}

$userid = json_decode($_COOKIE['logintoken'], true)['id'];

$query = "SELECT `PinnedGames` FROM `accounts` WHERE id='$userid'";
$result = mysqli_query($conn, $query);

if(str_contains(`$gameName;`, $result))
{
    //game is pinned
    echo('pinned');    
}
else
{
    //game is not pinned
    echo('unpinned');
}





   
$conn->close();

?>