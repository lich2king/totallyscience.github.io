<?php
$servername = "localhost";
$username = "u483325885_user";
$password = "Totally_password4321";
$database = "u483325885_database";


$user = htmlspecialchars($_GET["username"]);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

date_default_timezone_set("America/New_York");


$query = "SELECT * FROM liveviews WHERE username = '$user'";
$getUser = $conn->query($query);
if ($getUser === TRUE) {
    if($getUser != NULL)
    {
        $d=strtotime("+1 Minutes");
        $pingTime = date("d-m-Y h:i:s", $d);

        $sql = "UPDATE liveviews SET lastping='$pingTime' WHERE username='$user'";

        if ($conn->query($sql) === TRUE) {
            echo "Success";
            //echo "New record created successfully";
        } else {
            //echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    else
    {
        $d=strtotime("+1 Minutes");
        $pingTime = date("d-m-Y h:i:s", $d);
        $sql = "INSERT INTO liveviews (Username, lastping)
        VALUES ('$user', '$pingTime')";
    
        if ($conn->query($sql) === TRUE) {
            echo "Success";
        //echo "New record created successfully";
        } else {
        //echo "Error: " . $sql . "<br>" . $conn->error;
        //echo "Error";
        }
    }
    

}


//After do the for loop to delete old ones

            
    
$conn->close();


?>