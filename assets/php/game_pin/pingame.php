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
    echo('prevpinned');
}
/*else
{
    //game is not pinned
    if(substr_count($result,";") < 3)
    {
        $query = "UPDATE `accounts` SET `PinnedGames`=CONCAT(`PinnedGames`,'$gameName;') WHERE ID='$userid'";
        if ($conn->query($query) === TRUE) 
        {
            echo('successpinned');
        }
    }
    else
    {
        echo("maxpins");
    }
    
    
}*/






   
$conn->close();

?>