<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";


$uid = htmlspecialchars($_GET["uid"]);
$leave = htmlspecialchars($_GET["leave"]);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

date_default_timezone_set("America/New_York");


if($leave == '0')
{
    $userresult = $conn->query("SELECT * FROM liveviews WHERE username = '$uid'");
    if ($userresult->num_rows == 0) {
        // row not found, do stuff...
    
        $pingTime = time();
        $sql = "INSERT INTO liveviews (Username, lastping)
        VALUES ('$uid', '$pingTime')";
    
        if ($conn->query($sql) === TRUE) {
            echo "Success";
          //echo "New record created successfully";
        } else {
          //echo "Error: " . $sql . "<br>" . $conn->error;
          //echo "Error";
        }

    } else {
        // do other stuff...
        $pingTime = time();

        $sql = "UPDATE liveviews SET lastping='$pingTime' WHERE username='$uid'";

        if ($conn->query($sql) === TRUE) {
            echo "Success";
            //echo "New record created successfully";
        } else {
            //echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
} else {
    $sql = "DELETE FROM liveviews WHERE username='$uid'";

    if ($conn->query($sql) === TRUE) {
        echo "Success";
        //echo "New record created successfully";
    } else {
        //echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
   
$conn->close();

?>