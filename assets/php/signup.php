<?php
  // READY
  
  include 'config.php';

  $user = htmlspecialchars($_GET["username"]);
  $email = htmlspecialchars($_GET["email"]);
  $pass = htmlspecialchars($_GET["password"]);
  $grad = htmlspecialchars($_GET["gradyear"]);
  $uservalid = htmlspecialchars($_GET["uservalid"]);
  $emailvalid = htmlspecialchars($_GET["emailvalid"]);


  $salt = rand(10000,99999);
  $pass = $pass.$salt;

  $pass = password_hash($pass, PASSWORD_DEFAULT);

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
  
  // Check connection
  if ($conn->connect_error) {
    die("connection failed");
  }

  if($uservalid != '1') {
    $userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'");

    if ($userresult->num_rows == 0) {
      echo("not found");
    } else {
      echo("found");
    }
  } else if($emailvalid != '1') {
    $userresult = $conn->query("SELECT * FROM accounts WHERE Email = '$email'");
    if ($userresult->num_rows == 0) {
      echo("not found");
    } else {
      echo("found");
    }
  }
  else {
    $sql = "INSERT INTO accounts (Username, Email, Password, GradYear, PwSalt) VALUES ('$user', '$email', '$pass', '$grad', '$salt')";

    if ($conn->query($sql) === TRUE) {
      echo "Success";
    }
      
    $conn->close();
  }
?>