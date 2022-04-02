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


$firstRow = $conn->query("SELECT * FROM highscore_requests WHERE 1 LIMIT 1");
if($firstRow->num_rows == 0) {
    echo("No rows");
} else {
    $row = $firstRow -> fetch_row();
    
    $game = $row[0];
    $user = $row[2];
    $score = $row[1];
    //$image = $row[3];
    
    $data->game = $game;
    $data->user = $user;
    $data->score = $score;
    //$data->image = $image;

    $dataJSON = json_encode($data);
            
    echo($dataJSON);
}
    


   
$conn->close();

?>