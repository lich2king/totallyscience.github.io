<?php
$servername = "localhost";
$username = "u138268534_ts_user";
$password = "Totally_accounts4321";
$database = "u138268534_ts_users";

$roomid = htmlspecialchars($_GET["id"]);
$name = htmlspecialchars($_GET["name"]);
if (!$roomid || !$name) {
    die("missing name or room id");
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
        } else {
            echo "error creating table";// . $conn->error;
        }
        
        $conn->close();
    }
}
?>