<?php
$servername = "localhost";
$username = "u483325885_profile";
$password = "Totally_password4321";
$database = "u483325885_accounts";

$user = htmlspecialchars($_GET["username"]);
$email = htmlspecialchars($_GET["email"]);
$pass = htmlspecialchars($_GET["password"]);

die(password_hash($password, PASSWORD_DEFAULT));

print("yeet");
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}


$sql = "INSERT INTO AccountsTable (Username, Email, Password)
VALUES ('$user', '$email', '$pass')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




?>