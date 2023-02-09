<?php
  // READY

  include '../config.php';

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
    
  // Check connection
  if ($conn->connect_error) {
    die("connection failed"); //. $conn->connect_error);
  }

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
    die("no cookie");
  }
    
  $id = $data['auth']['id'];

  $query = "SELECT DailyReward, RewardDay FROM accounts WHERE ID = '$id'";
  $result = mysqli_query($conn, $query);
  $row = $result->fetch_array();
  $rewardTimer = $row[0];
  $rewardDay = $row[1];
  $points = 100;


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

      $query = "UPDATE accounts SET DailyReward = UNIX_TIMESTAMP() + 86400, RewardDay = $rewardDay, Points=Points+$points WHERE ID = '$id'";
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