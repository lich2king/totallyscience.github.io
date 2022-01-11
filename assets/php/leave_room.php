<?php
$servername = "localhost";
$username = "u483325885_chatter";
$password = "Totally_password4321";
$database = "u483325885_chatrooms";

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
    die("connection failed");// . $conn->connect_error);
}

if ($result = $conn->query("SHOW TABLES LIKE '".$roomid."'")) {
    if($result->num_rows == 1) {
        $message = $name . " has left the chat";
        $sql2 = "INSERT INTO `$roomid` (name, message)
        VALUES ('Server', '$message')";
        
        if ($conn->query($sql2) === TRUE) {
            echo "success";
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