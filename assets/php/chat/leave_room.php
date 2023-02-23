<?php
  // READY

  include '../config.php';

  $json = file_get_contents('php://input');
  $data = json_decode($json, TRUE);

  if (!isset($data['auth'])) {
      die("error: no cookie");
  }

  $name = $data['auth']['username'];
  $roomid = htmlspecialchars($_GET["id"]);

  if (!$roomid || !$name) {
    die("missing name or room id");
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
      $message = $name . " has left the chat";
      $sql2 = "INSERT INTO `$roomid` (name, message)
      VALUES ('Server', '$message')";
      
      if ($conn->query($sql2) === TRUE) {
        echo "success";
      } else {
        echo "error sending message";
      }
      
      $conn->close();
    }
    else {
      die("room does not exist");
    }
  }
?>