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
  rejectRow()
}
elseif ($step == 2)
{
  //Approve
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
    
        $data->game = $game;
        $data->user = $user;
        $data->score = $score;
        $data->image = $image;

        $dataJSON = json_encode($data);
            
        echo($dataJSON);
    }
}

function rejectRow(){
  $user = htmlspecialchars($_GET["username"]);
  $game = htmlspecialchars($_GET["game"]);
  $score = htmlspecialchars($_GET["score"]);

  $sql = "DELETE FROM highscore_requests WHERE username='$username' AND game='$game' AND score=$score";
  if ($conn->query($sql) === TRUE) {
      echo "Success";
      //echo "New record created successfully";
  } else {
      //echo "Error: " . $sql . "<br>" . $conn->error;
  }
}



    


   
$conn->close();

?>