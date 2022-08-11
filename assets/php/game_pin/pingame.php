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
$result = ($result -> fetch_row())[0];

if (!function_exists('str_contains')) {
    function str_contains( $haystack, $needle)
    {
        return $needle !== '' && mb_strpos($haystack, $needle) !== false;
    }
}



if(str_contains($result, `$gameName;`))
{
    //game is pinned
    echo('prevpinned');
}
else
{
    //game is not pinned
    if(substr_count($result,";") < 3)
    {
        
        $pinnedString = "$result$gameName";
        die($pinnedString);
        $query = "UPDATE `accounts` SET PinnedGames='$pinnedString;' WHERE ID='$userid'";
        mysqli_query($conn, $query);
        echo('feewew');
        // if ($conn->query($query) === TRUE) 
        // {
        //     echo('successpinned');
        // }
    }
    else
    {
        echo("maxpins");
    }
    
    
}






   
$conn->close();

?>