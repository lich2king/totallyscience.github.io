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
    
  $userid = json_decode($_COOKIE['logintoken'], true)['id'];

  //first check if the user has a game pass account
  $query = "SELECT * FROM gamepass WHERE ID = '$userid'";
  $result = mysqli_num_rows(mysqli_query($conn, $query));

  if ($result <= 0) {
    //user does not have game pass
    die("false");
  } else {
    //user is in gamepass db but may not have paid (known by completed field)

    //check if user has the completed field set to 1
    $query = "SELECT Completed FROM gamepass WHERE ID = '$userid'";
    $result = mysqli_query($conn, $query);
    $result = ($result -> fetch_row())[0];

    if ($result == 0) {
      //user does not have game pass
      die("false");
    } else {
      //redirect user to page to renew their subscription
      die("true");
    }
  }

  $conn->close();
?>