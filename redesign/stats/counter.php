<?php
$servername = "localhost";
$database = "database";
$user = "user";
$password = "Totally_password4321";

$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

echo("Connected successfully!");
mysqli_close($conn);
?>
