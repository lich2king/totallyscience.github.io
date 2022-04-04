<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";



// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}





$query = "SELECT * FROM highscores";
$result = mysqli_query($conn, $query);

$highscores = array ();


while($row = mysqli_fetch_assoc($result))
{
  $game = $row["game"];
  $score = $row["score"];
  $name = $row["name"];

  array_push($highscores, array($game, $name, $score));
  
}

die($highscores);    


   
$conn->close();

?>