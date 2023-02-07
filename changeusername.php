<?php
include 'assets/php/config.php';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed");
}

$password = htmlspecialchars($_GET["password"]);
$newUsername = htmlspecialchars($_GET["username"]);

if ($password != null && $password != '') {
    if (!isset($_COOKIE['logintoken'])) {
        die("no cookie");
    }
      
    $id = json_decode($_COOKIE['logintoken'], true)['id'];
    
    if ($userresult = $conn->query("SELECT * FROM accounts WHERE id = '$id'")) {
        $row = $userresult -> fetch_row();
        $usersPass = $row[2];
        $usersSalt = $row[10];

        $password = $password.$usersSalt;

        if (password_verify($password, $usersPass)) {
            if ($userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$newUsername'"))
            {
                if($userresult->num_rows == 0) {
                    //username is new
                    $conn->query("UPDATE accounts SET Username = '$newUsername' WHERE id = '$id'");

                    $data = array(
                        'isLoggedIn' => 'true',
                        'username' => $newUsername,
                        'email' => $row[1],
                        'id' => $row[7]
                    );
        
                    $cookie_name = "logintoken";
                    $cookie_value = json_encode($data);
        
                    setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day

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
    <p style="text-align: center;" id="back-login"><a href="profile.php" style="color: var(--light-color)">Back to profile</a></p>
</body>


<script>
    res = JSON.parse(authCookie);

    let loggedIn = 'false';

    if (res != null) {
        loggedIn = res['isLoggedIn'];
    }
    if (loggedIn != 'true') {
        location.href = 'profile.php';
    }

    function newUsername() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorText = document.getElementById('errorText');

        if (username == null || username == '' || password == null || password == '') {
            errorText.innerText = 'New username and password are required';
            return;
        }

        fetch(`changeusername.php?password=${password}&username=${username}`).then((response) => response.text()).then((res) => {
            if (res.startsWith('success')) {
                location.href = 'profile.php';
            } else {
                errorText.innerText = res;
            }
        });
    }
</script>

</html>