<?php
    // READY

    include 'config.php';

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);
    
    // Check connection
    if ($conn->connect_error) {
        die("connection failed");
    }

    $user = json_decode($_COOKIE['logintoken'], true)['username'];
    $from = "help@totallyscience.co";
    $subject = "Totally Science Confirmation Code";
    $code = rand(10000,99999);
    $message = "Your confirmation code is " . $code;
    $headers = "From:" . $from;

    $conn->query("UPDATE accounts SET code = '$code' WHERE Username = '$user'");

    if (mail($email, $subject, $message, $headers)) {
        echo "Success";
    };
?>