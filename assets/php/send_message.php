<?php
$servername = "localhost";
$username = "root";
$password = "1035";
$database = "chatrooms";

$roomid = htmlspecialchars($_GET["id"]);
$name = htmlspecialchars($_GET["name"]);
$message = htmlspecialchars($_GET["message"]);
if (!$roomid || !$name || !$message) {
    die("missing name, room id, or message");
}

if (strlen($name) > 20) {
  die("name cannot exceed 20 characters");
}

if (strlen($message) > 200) {
  die("message cannot exceed 200 characters");
}

$roomid = strval($roomid);

if (strlen($roomid) > 20) {
  die("room name cannot exceed 20 characters");
}

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if ($result = $conn->query("SHOW TABLES LIKE '".$roomid."'")) {
  if($result->num_rows == 1) {
      $sql2 = "INSERT INTO `$roomid` (name, message)
      VALUES ('$name', '$message')";
      
      if ($conn->query($sql2) === TRUE) {
          $sql3 = "SELECT name, message, time FROM `$roomid`";
          $result = $conn->query($sql3);
          
          if ($result->num_rows > 0) {
            // output data of each row
            $cars = array();
            $count = 0;
            while ($row = $result->fetch_assoc()) {
              $cars[$count] = array($row["time"], $row["name"], $row["message"]);
              $count += 1;
            }
            echo json_encode($cars);
          } else {
            echo "error getting messages";// . $conn->error;
          }  
      } else {
          echo "error sending message";// . $conn->error;
      }
      
      $conn->close();
  }
  else {
      die("room does not exist");
  }
}
?>