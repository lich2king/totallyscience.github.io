<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";


$user = htmlspecialchars($_GET["username"]);
$game = htmlspecialchars($_GET["game"]);
$score = htmlspecialchars($_GET["score"]);
$imageFile = htmlspecialchars($_GET["imageFile"]);

//echo($imageFile);
//$baseImage = file_get_contents($imageFile);
//echo($baseImage);



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
    echo("hi");
    die($prevScore);
}


function uploadHighscore()
{
  $sql = "INSERT INTO highscore_requests (game, score, username, image)
  VALUES ('$game', '$score', '$user', '$imageFile')";
      
  if ($conn->query($sql) === TRUE) {
      echo "Success";
      //echo "New record created successfully";
  } else {
      //echo "Error: " . $sql . "<br>" . $conn->error;
      //echo "Error";
  }
}

    

    


   
$conn->close();

?>