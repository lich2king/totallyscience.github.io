<?php
    $servername = "localhost";
    $username = "u483325885_client";
    $password = "Totally_password4321";
    $database = "u483325885_private";


    $payerId = htmlspecialchars($_GET["payerId"]);

    $conn = new mysqli($servername, $username, $password, $database);
      
    // Check connection
    if ($conn->connect_error) {
        die("connection failed"); //. $conn->connect_error);
    }

    if ($userresult = $conn->query("SELECT * FROM PersonalSites WHERE PayerId = '$payerId'"))
    {
        $row = $userresult -> fetch_row();
        $usersEndDate = $row[5];
        date_default_timezone_set("America/New_York");
        $d=strtotime("+1 Months");
        $endDate = date("Y-m-d", $d);   
        if($usersEndDate < $endDate){
            $sql = "UPDATE PersonalSites SET EndDate='$usersEndDate' WHERE PayerId='$payerId'";

            if ($conn->query($sql) === TRUE) {
                echo "Success";
                //echo "New record created successfully";
            } else {
                //echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
        else
        {
          echo $usersEndDate;
          echo " ";
          echo $endDate;
        }
    }
    
    
    $conn->close();

?>