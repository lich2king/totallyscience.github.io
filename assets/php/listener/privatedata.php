<?php
    $servername = "localhost";
    $username = "u483325885_client";
    $password = "Totally_password4321";
    $database = "u483325885_private";


    $email = htmlspecialchars($_GET["email"]);
    $payerId = htmlspecialchars($_GET["name"]);
    $monthy = htmlspecialchars($_GET["monthly"]);

    $endDate = "";

    if($monthy == 1)
    {
        //User will pay monthly
        date_default_timezone_set("America/New_York");

        $d=strtotime("+1 Months");
        $endDate = date("Y-m-d", $d)
    }
    else
    {
        //User will pay yearly
        $d=strtotime("+1 Years");
        $endDate = date("Y-m-d", $d)
    }

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);
      
    // Check connection
    if ($conn->connect_error) {
      die("connection failed"); //. $conn->connect_error);
    }


    $sql = "INSERT INTO PersonalSites (Taken, AccountEmail, PayerId, EndDate)
    VALUES ('1', '$email', '$payerId', '$endDate')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Success";
      //echo "New record created successfully";
    } else {
      //echo "Error: " . $sql . "<br>" . $conn->error;
      //echo "Error";
    }
    
    $conn->close();

?>