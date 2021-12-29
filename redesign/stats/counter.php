<?php
$servername = "localhost";
$database = "u483325885_database";
$user = "u483325885_user";
$password = "Totally_password4321";

$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

echo("Connected successfully!");
mysqli_close($conn);
?>
