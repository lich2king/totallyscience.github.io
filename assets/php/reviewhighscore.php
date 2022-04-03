<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";

$step = htmlspecialchars($_GET["step"]);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


if($step == 0)
{
  getRow();
}
elseif ($step == 1)
{
  //Reject
  rejectRow();
}
elseif ($step == 2)
{
  //Approve
  approveRow();
}





function getRow(){
    global $conn;

    
    $firstRow = $conn->query("SELECT * FROM highscore_requests WHERE 1 LIMIT 1");
    if($firstRow->num_rows == 0) {
        echo("No rows");
    } else {
        $row = $firstRow -> fetch_row();
    
        $game = $row[0];
        $user = $row[2];
        $score = $row[1];
        $image = $row[3];
      
        $currentHighscore = $conn->query("SELECT * FROM highscores WHERE game='$game'");
        if($currentHighscore->num_rows == 0) {
          //No current highscore set
          $data->game = $game;
          $data->user = $user;
          $data->score = $score;
          $data->image = $image;
          $dataJSON = json_encode($data);
          echo($dataJSON);

        } else {
          $currentRow = $currentHighscore -> fetch_row();
          $currentScore = $row[1];

          if($score > $currentScore)
          {
            //Score is greater than current highscore score
            $data->game = $game;
            $data->user = $user;
            $data->score = $score;
            $data->image = $image;
            $dataJSON = json_encode($data);
            echo($dataJSON);
          }
          else
          {
            echo(`$score, $currentScore`);
            $conn->query("DELETE FROM highscore_requests WHERE username='$user' AND game='$game' AND score=$score");
            getRow();
          }

        }
    }
}

function rejectRow(){
  global $conn;

  $user = htmlspecialchars($_GET["username"]);
  $game = htmlspecialchars($_GET["game"]);
  $score = htmlspecialchars($_GET["score"]);

  $sql = "DELETE FROM highscore_requests WHERE username='$user' AND game='$game' AND score=$score";
  if ($conn->query($sql) === TRUE) {
    echo('success');
      //echo "New record created successfully";
  } else {
      //echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

function approveRow(){
  global $conn;

  $user = htmlspecialchars($_GET["username"]);
  $game = htmlspecialchars($_GET["game"]);
  $score = htmlspecialchars($_GET["score"]);

  $sql = "DELETE FROM highscore_requests WHERE username='$user' AND game='$game' AND score=$score";
  if ($conn->query($sql) === TRUE) {
    echo('success');
  }

  $currentHighscore = $conn->query("SELECT * FROM highscores WHERE game = '$game'");
    if ($currentHighscore->num_rows == 0) {
        // row not found, do stuff...
        $sql = "INSERT INTO highscores (game, score, name)
        VALUES ('$game', '$score', '$user')";
    
        if ($conn->query($sql) === TRUE) {
            echo "Success";
        }

    } else {
        // do other stuff...
        $sql = "UPDATE highscores SET score='$score', name='$user' WHERE game='$game'";

        if ($conn->query($sql) === TRUE) {
            echo "Success";
        }
    }

}



    


   
$conn->close();

?>