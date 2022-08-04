<?php
$servername = "localhost";
$username = "u138268534_ts_user";
$password = "Totally_accounts4321";
$database = "u138268534_ts_users";



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

echo(json_encode($highscores));    


   
$conn->close();

?>