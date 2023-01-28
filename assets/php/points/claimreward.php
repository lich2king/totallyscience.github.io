<?php
  // READY

  include '../config.php';

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

  $query = "SELECT DailyReward FROM accounts WHERE ID = '$userid'";
  $result = mysqli_query($conn, $query);
  $rewardTimer = ($result -> fetch_row())[0];
  $rewardDay = ($result -> fetch_row())[1];
  
  //check if it has been 24 hours
  if(time() > $rewardTimer) //time() gets unix time in seconds
  {
      if($rewardDay >= 6)
      {
        $rewardDay = 0;
      }
      else
      {
        $rewardDay = $rewardDay + 1;
      }

      $query = "UPDATE accounts SET DailyReward = UNIX_TIMESTAMP() + 86400, RewardDay = $rewardDay WHERE ID = '$userid'";
      if(mysqli_query($conn, $query))
      {
        die("Success");
      }
  }
  else
  {
      die("Not time yet.");
  }


  

  $conn->close();
?>