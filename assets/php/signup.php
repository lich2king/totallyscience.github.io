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
        die("connection failed");
    }

    if($uservalid != '1') {
        $userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'");

        if($userresult->num_rows == 0) {
            echo("not found");
        } else {
            echo("found");
        }
    } else if($emailvalid != '1') {
        $userresult = $conn->query("SELECT * FROM accounts WHERE Email = '$email'");
        if($userresult->num_rows == 0) {
            echo("not found");
        } else {
            echo("found");
        }
    }
    else {
        $sql = "INSERT INTO accounts (Username, Email, Password, GradYear) VALUES ('$user', '$email', '$pass', '$grad')";
        
        if ($conn->query($sql) === TRUE) {
            $from = "help@totallyscience.co";
            $subject = "Totally Science Confirmation Code";
            $code = rand(10000,99999);
            $message = "Your confirmation code is " . $code;
            $headers = "From:" . $from;

            $conn->query("UPDATE accounts SET code = '$code' WHERE Username = '$user'");
        
            if (mail($email, $subject, $message, $headers)) {
                echo "Success";
            };
        }
        
        $conn->close();
    }
?>