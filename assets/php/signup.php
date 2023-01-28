<?php
  // READY
  
  include 'config.php';

  $user = htmlspecialchars($_GET["username"]);
  $email = htmlspecialchars($_GET["email"]);
  $pass = htmlspecialchars($_GET["password"]);
  $grad = htmlspecialchars($_GET["gradyear"]);

  if (!$user) {
    die("username is required");
  } else if (!$email) {
    die("email is required");
  } else if (!$pass) {
    die("password is required");
  }

  $salt = rand(10000,99999);
  $pass = $pass.$salt;
  $pass = password_hash($pass, PASSWORD_DEFAULT);

  // Create connection
  $conn = new mysqli($servername, $username, $password, $database);
  
  // Check connection
  if ($conn->connect_error) {
    die("connection failed");
  }
  
  $userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'");

  if ($userresult->num_rows == 0) {
    $userresult = $conn->query("SELECT * FROM accounts WHERE Email = '$email'");

    if ($userresult->num_rows == 0) {
      $user = mysqli_real_escape_string($conn, $user);
      $email = mysqli_real_escape_string($conn, $email);
      $sql = "INSERT INTO accounts (Username, Email, Password, GradYear, PwSalt) VALUES ('$user', '$email', '$pass', '$grad', '$salt')";

      if ($conn->query($sql) === TRUE) {
        echo "Success";
      }
    } else {
      die("email already in use");
    }
    
  } else {
    die("username already in use");
  }
  
  $conn->close();
?>