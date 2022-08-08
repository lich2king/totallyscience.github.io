<?php
    include 'config.php';

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);
    
    // Check connection
    if ($conn->connect_error) {
        die("connection failed");
    }
    
    $user = htmlspecialchars($_GET["username"]);

    $userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'");

    $row = $userresult -> fetch_row();
    
    echo $row[6];
?>