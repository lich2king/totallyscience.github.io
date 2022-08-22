<?php
include '../config.php';

$roomid = htmlspecialchars($_GET["id"]);
if (!$roomid) {
    die("missing room id");
}

$roomid = strval($roomid);

if (strlen($roomid) > 20) {
  die("room name cannot exceed 20 characters");
}

// Create connection
$conn = new mysqli($servername, $chatroom_username, $password, $chatroom_database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed");
}

if ($result = $conn->query("SHOW TABLES LIKE '".$roomid."'")) {
  if($result->num_rows == 1) {
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
        echo "error getting messages";
      } 
      
      $conn->close();
  }
  else {
      die("room does not exist");
  }
}
?>