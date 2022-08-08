<?php
    // READY
    include 'config.php';

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);
    
    // Check connection
    if ($conn->connect_error) {
        die("connection failed");
    }

    if (!isset($_COOKIE['logintoken'])) {
        die("no cookie");
    }

    $user = json_decode($_COOKIE['logintoken'], true)['username'];

    $userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'");

    $row = $userresult -> fetch_row();
    
    echo $row[6];
?>