<?php

include '../config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


$query = "select game, totalviews from game_data order by totalviews desc";
$result = mysqli_query($conn, $query);


$popgames = array ();


while($row = mysqli_fetch_assoc($result))
{
  $game = $row["game"];
  $views = $row["totalviews"];

  array_push($popgames, array($game, $views));
}

echo(json_encode($popgames));   


   
$conn->close();

?>