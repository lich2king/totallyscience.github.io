<?php

$servername = "localhost";
$username = "u483325885_profile";
$password = "Totally_accounts4321";
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
    $usersPass = $row[2];
    if(password_verify($pass, $usersPass))
    {
        $data = array(
            'isLoggedIn' => 'true',
            'username' => $user
        );
        $cookie_name = 'logintoken';
        $cookie_value = json_encode($data);
        setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
        echo("Success");
    }
    else
    {
        echo("Username or Password is Incorrect");
    }
}
else{
    echo("Username or Password is Incorrect.");
}

$mysqli -> close();

?>