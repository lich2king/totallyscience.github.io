<?php

$servername = "localhost";
$username = "u483325885_profile";
$password = "Totally_password4321";
$database = "u483325885_accounts";

$user = htmlspecialchars($_GET["username"]);
$pass = htmlspecialchars($_GET["password"]);


// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if ($userresult = $conn->query("SELECT * FROM AccountsTable WHERE Username = '$user'"))
{
    $row = $userresult -> fetch_row();

    $from = "help@totallyscience.co";
    $to = $row[1];
    $subject = "Totally Science Change Password Confirmation";
    $rand = rand(10000,99999);
    $message = "Your confirmation code is " . $rand;
    $headers = "From:" . $from;

    if (mail($to, $subject, $message, $headers)) {
        // email send client should show confirmation box
        echo "Success The email message was sent!";
    } else {
        echo "The email message was not sent.";
    }
}

$mysqli -> close();

?>