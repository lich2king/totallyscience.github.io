<?php
// READY

include 'config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if (!isset($_COOKIE['logintoken'])) {
  die("no cookie");
}

$uid = json_decode($_COOKIE['logintoken'], true)['id'];
$query = "SELECT * FROM highscores WHERE uid='$uid'";
$result = mysqli_query($conn, $query);
$highscores = array ();

while ($row = mysqli_fetch_assoc($result)) {
  $game = $row["game"];
  $score = $row["score"];
  $name = $row["name"];

  array_push($highscores, array($game, $name, $score));
}

echo(json_encode($highscores));    

$conn->close();

?>