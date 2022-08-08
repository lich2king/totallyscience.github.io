<?php
include 'config.php';

$data = json_decode(file_get_contents('php://input'), true);

$user = $data['username'];
$game = $data['gameName'];
$score = $data['score'];
$imageFile = $data['imageFile'];



// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


$highscoreresult = $conn->query("SELECT * FROM highscores WHERE game = '$game'");
    //die($userresult);
if($highscoreresult->num_rows == 0) {
    // row not found, do stuff...
    uploadHighscore();
} else {
    // do other stuff...

    $row = $highscoreresult -> fetch_row();
    
    $prevScore = $row[1];
    if((float)$score > (float)$prevScore)
    {
        uploadHighscore();
    }
    else
    {
      echo("*Score is not greater than current highscore");
    }
}


function uploadHighscore()
{
  global $game, $score, $user, $imageFile, $conn;
  
  $sql = "INSERT INTO highscore_requests (game, score, username, image)
  VALUES ('$game', '$score', '$user', '$imageFile')";
      
  if ($conn->query($sql) === TRUE) {
      echo ("Success, your score will be reviewed shortly");
      //echo "New record created successfully";
  } else {
      //echo "Error: " . $sql . "<br>" . $conn->error;
      //echo "Error";
  }
}

    

    


   
$conn->close();

?>