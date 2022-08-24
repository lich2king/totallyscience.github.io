<?php
// READY

include '../config.php';

if (!isset($_COOKIE['logintoken'])) {
  die("no cookie");
}

$name = json_decode($_COOKIE['logintoken'], true)['username'];
$roomid = htmlspecialchars($_GET["id"]);

if (!$roomid || !$name) {
    die("missing name or room id");
}

$roomid = strval($roomid);
if (strlen($roomid) > 20) {
  die("room name cannot exceed 20 characters.");
}

// Create connection
$conn = new mysqli($servername, $chatroom_username, $password, $chatroom_database);

// Check connection
if ($conn->connect_error) {
  die("connection failed.");
}

if ($result = $conn->query("SHOW TABLES LIKE '".$roomid."'")) {
    if($result->num_rows == 1) {
        die("room id already exists");
    }
    else {
        // sql to create table
        $sql = "CREATE TABLE `$roomid` (
        id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name varchar(20) NOT NULL,
        message varchar(200) NOT NULL,
        time TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )";
        
        if ($conn->query($sql) === TRUE) {
            $message = $name . " has joined the chat";
            $sql2 = "INSERT INTO `$roomid` (name, message)
            VALUES ('Server', '$message')";
            
            if ($conn->query($sql2) === TRUE) {
                $sql3 = "SELECT name, message, time FROM `$roomid` ORDER BY time DESC LIMIT 50";
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
                  echo "error getting messages.";
                } 
            } else {
                echo "error sending message.";
            }
        } else {
            echo "error creating table.";
        }
        
        $conn->close();
    }
}
?>