<?php
include 'assets/php/config.php';
echo $servername;
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed");
}

$password = htmlspecialchars($_GET["password"]);
$newUsername = htmlspecialchars($_GET["username"]);

if ($pass != null && $pass != '') {
    if (!isset($_COOKIE['logintoken'])) {
        die("no cookie");
    }
      
    $user = json_decode($_COOKIE['logintoken'], true)['id'];
    
    if ($userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'")) {
        $row = $userresult -> fetch_row();
        $usersPass = $row[2];

        if (password_verify($password, $usersPass)) {
            if ($userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$newUsername'"))
            {
                if($userresult->num_rows == 0) {
                    //username is new
                    $conn->query("UPDATE accounts SET Username = '$newUsername' WHERE Username = '$user'");
                    echo 'success';
                } else {
                    //username is already taken
                    die('username already taken');
                }
            }
        }
        else {
            die("invalid password");
        }
    }
    else {
        die("error reaching database");
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='./assets/styles/account.css'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div style="padding-top: 90px;"></div>

    <form id="survey" action="javascript:newUsername()">
        <div>
            <label for="password">Password</label><br>
            <input type='password' id='password' name='password' placeholder='**********'><br>
        </div>

        <div>
            <label id="usertext" for="username">New Username</label><br>
            <input type='text' id='username' name='username' placeholder='John Doe'><br>
        </div>
        
        <button id="save-button">Submit</button>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>
    <p style="text-align: center;" id="back-login"><a href="profile.php">back to profile</a></p>
    <script defer src="./assets/scripts/main.js?v14"></script>
</body>


<script>
    fetch(`assets/php/getCookie.php`).then((response) => response.text()).then((res) => {
        res = JSON.parse(res);

        let loggedIn = 'false';

        if (res != null) {
            loggedIn = res['isLoggedIn'];
        }
        if (loggedIn != 'true') {
            location.href = 'profile.php';
        }
    });

    funtion newUsername() {
        const newUsername = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorText = document.getElementById('errorText');

        if (username == null || username == '' || password == null || password == '') {
            errorText.innerText = 'New username and password are required';
            return;
        }

        fetch(`changepassword.php?password=${password}&username=${newUsername}`).then((response) => response.text()).then((res) => {
            if (res.startsWith('success')) {
                location.href = 'profile.php';
            } else {
                errorText.innerText = res;
            }
        });
    }
</script>

</html>