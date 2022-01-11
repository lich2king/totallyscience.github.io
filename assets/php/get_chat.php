<?php
$servername = "localhost";
$username = "u483325885_chatter";
$password = "Totally_password4321";
$database = "u483325885_chatrooms";

$roomid = htmlspecialchars($_GET["id"]);
if (!$roomid) {
    die("missing room id");
}

if (strlen($name) > 20) {
  die("name cannot exceed 20 characters");
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
      
      $conn->close();
  }
  else {
      die("room does not exist");
  }
}
?>