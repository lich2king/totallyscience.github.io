<?php
include 'config.php';

$user = htmlspecialchars($_GET["username"]);
$email = htmlspecialchars($_GET["email"]);
$pass = htmlspecialchars($_GET["password"]);
$grad = htmlspecialchars($_GET["gradyear"]);
$uservalid = htmlspecialchars($_GET["uservalid"]);
$emailvalid = htmlspecialchars($_GET["emailvalid"]);

$pass = password_hash($pass, PASSWORD_DEFAULT);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if($uservalid != '1')
{
    $userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'");
    //die($userresult);
    if($userresult->num_rows == 0) {
        // row not found, do stuff...
        echo("not found");
    } else {
        // do other stuff...
        echo("found");
    }
} else if($emailvalid != '1')
{
    $userresult = $conn->query("SELECT * FROM accounts WHERE Email = '$email'");
    //die($userresult);
    if($userresult->num_rows == 0) {
        // row not found, do stuff...
        echo("not found");
    } else {
        // do other stuff...
        echo("found");
    }
}
else
{
    $sql = "INSERT INTO accounts (Username, Email, Password, GradYear)
    VALUES ('$user', '$email', '$pass', '$grad')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Success";
      //echo "New record created successfully";
    } else {
      //echo "Error: " . $sql . "<br>" . $conn->error;
      //echo "Error";
    }
    
    $conn->close();
}





?>