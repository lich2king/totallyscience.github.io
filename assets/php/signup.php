<?php
$servername = "localhost";
$username = "u483325885_profile";
$password = "Totally_password4321";
$database = "u483325885_accounts";

$user = htmlspecialchars($_GET["username"]);
$email = htmlspecialchars($_GET["email"]);
$pass = htmlspecialchars($_GET["password"]);
$uservalid = htmlspecialchars($_GET["uservalid"]);
$emailvalid = htmlspecialchars($_GET["emailvalid"]);

$pass = password_hash($pass, PASSWORD_DEFAULT);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

print("maybe");
print($emailvalid);
print($uservalid);

die("JI");
if($uservalid == '0')
{
    $userresult = $conn->query("SELECT * FROM AccountsTable WHERE Username = '$user'");
    //die($userresult);
    if($userresult->num_rows == 0) {
        // row not found, do stuff...
        echo("not found");
    } else {
        // do other stuff...
        echo("found");
    }
} elseif($emailvalid == '0')
{
    die("NICE KNOWING YA");
    $userresult = $conn->query("SELECT * FROM AccountsTable WHERE Email = '$email'");
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
    die($emailvalid);
    $sql = "INSERT INTO AccountsTable (Username, Email, Password)
    VALUES ('$user', '$email', '$pass')";
    
    if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close();
}





?>