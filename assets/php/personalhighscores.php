<?php
  include 'config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed");
  }

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
    die("no cookie");
  }

  echo json_decode($data['auth'], true);
  //$uid = json_decode($data['auth'], true);//['id'];
  //$query = "SELECT * FROM highscores WHERE uid='$uid'";
  //$result = mysqli_query($conn, $query);
  //$highscores = array ();

  //while ($row = mysqli_fetch_assoc($result)) {
    //$game = $row["game"];
    //$score = $row["score"];
    //$name = $row["name"];

    //array_push($highscores, array($game, $name, $score));
  //}

  //echo(json_encode($highscores));    

  $conn->close();
?>