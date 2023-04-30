<?php
  $servername = "154.53.48.150";
  $username = "u483325885_user";
  $password = "Totally_password4321";
  $database = "u483325885_database";

  // create connection to database
  $conn = new mysqli($servername, $username, $password, $database);
    
  // check connection to database
  if ($conn->connect_error) {
    die("connection failed");
  }

  $query = "UPDATE `game_data` SET `totalviews`=`totalviews`-`day7`,`day7`=`day6`, `day6`=`day5`, `day5`=`day4`, `day4`=`day3`, `day3`=`day2`, `day2`=`day1`, `day1`=0 WHERE 1";
  $result = mysqli_query($conn, $query);
    
  $conn->close();
?>