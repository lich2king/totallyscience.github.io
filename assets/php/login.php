<?php
    // READY

    include 'config.php';

    $user = htmlspecialchars($_GET["username"]);
    $pass = htmlspecialchars($_GET["password"]);

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);
    
    // Check connection
    if ($conn->connect_error) {
        die("connection failed");
    }

    if ($userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'")) {
        $row = $userresult -> fetch_row();
        $usersPass = $row[2];

        if (password_verify($pass, $usersPass)) {

            //check if user has game pass
            $hasGamePass = 'false';
            
            $userid = $row["ID"];

            $query = "SELECT * FROM gamepass WHERE ID = '$userid'";
            $result = mysqli_num_rows(mysqli_query($conn, $query));
            if($result > 0)
            {
                //user has game pass
                $hasGamePass = 'true';
            }


            $data = array(
                'isLoggedIn' => 'true',
                'username' => $user,
                'email' => $row[1],
                'id' => $row[7],
                'gamepass' => "$hasGamePass"
            );

            $cookie_name = "logintoken";
            $cookie_value = json_encode($data);

            setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
            echo("Success");
        }
        else {
            echo("Username or Password is Incorrect");
        }
    }
    else {
        echo("Username or Password is Incorrect.");
    }

    $mysqli -> close();
?>