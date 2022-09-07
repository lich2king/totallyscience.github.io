<?php
include 'assets/php/config.php';

$step = htmlspecialchars($_GET["step"]);

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed");
}

if ($step == 1) {
    $user = htmlspecialchars($_GET["username"]);

    if ($userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'"))
    {
        $row = $userresult -> fetch_row();
    
        $from = "help@totallyscience.co";
        $to = $row[1];
        $subject = "Totally Science Change Password Confirmation";
        $code = rand(10000,99999);
        $message = "Your confirmation code is " . $code;
        $headers = "From:" . $from;

        $conn->query("UPDATE accounts SET code = '$code' WHERE Username = '$user'");
    
        if (mail($to, $subject, $message, $headers)) {
            // email send client should show confirmation box
            echo "success";
        } else {
            echo "The email message was not sent.";
        }
    }
}
else if ($step == 2) {
    $user = htmlspecialchars($_GET["username"]);

    if ($userresult = $conn->query("SELECT * FROM accounts WHERE Username = '$user'"))
    {
        $row = $userresult -> fetch_row();
    
        $code = $row[4];

        $subCode = htmlspecialchars($_GET["code"]);
    
        if ($code == $subCode) {
            echo 'success';
        }
    }
}
else if ($step == 3) {
    $user = htmlspecialchars($_GET["username"]);
    $pass = password_hash(htmlspecialchars($_GET["password"]), PASSWORD_DEFAULT);

    if ($conn->query("UPDATE accounts SET Password = '$pass' WHERE Username = '$user'"))
    {
        echo 'success';
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

    <form id="survey" action="javascript:sendEmailConfirm()">
        <div>
            <label id="usertext" for="username">Username</label><br>
            <input type='text' id='username' name='username' placeholder='John Doe'><br>
        </div>

        <div id="div2" style="display: none;">
            <label for="password">New Password</label><br>
            <input type='password' id='password' name='password' placeholder='**********'><br>
        </div>

        <div id="div1" style="display: none;">
            <label for="password">Confirm New Password</label><br>
            <input type='password' id='confirmPassword' name='password' placeholder='**********'><br>
        </div>

        <button id="save-button">Submit</button>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>
    <p style="text-align: center;" id="back-login"><a href="login">back to login</a></p>
</body>


<script>
    let username;

    fetch(`assets/php/getCookie.php`).then((response) => response.text()).then((res) => {
        res = JSON.parse(res);

        let loggedIn = 'false';

        if (res != null) {
            loggedIn = res['isLoggedIn'];
        }
        if (loggedIn == 'true') {
            document.getElementById('back-login').style.display = 'none';
            username = res['username'];

            fetch(`changepassword.php?username=${username}&step=1`).then((response) => response.text()).then((res) => {
            if (res.startsWith('success')) {
                document.getElementById('usertext').innerText = 'Before resetting your password, type the confirmation code sent to your email';
                document.getElementById('survey').action = 'javascript:submitConfirmCode()';
                document.getElementById('username').value = '';
                document.getElementById('username').placeholder = '*****';
                localStorage.setItem('tempusername', username);
            }
        });
        }
    });

    function sendEmailConfirm() {
        username = document.getElementById('username').value;
        const errorText = document.getElementById('errorText');

        if (username == null || username == '') {
            errorText.innerText = 'Username cannot be empty';
            return;
        }

        fetch(`changepassword.php?username=${username}&step=1`).then((response) => response.text()).then((res) => {
            if (res.startsWith('success')) {
                document.getElementById('usertext').innerText = 'Confirmation Code From Email';
                document.getElementById('survey').action = 'javascript:submitConfirmCode()';
                document.getElementById('username').value = '';
                document.getElementById('username').placeholder = '*****';
                localStorage.setItem('tempusername', username);
            } else {
                console.log(res);
            }
        });
    }

    function submitConfirmCode() {
        const code = document.getElementById('username').value;
        const errorText = document.getElementById('errorText');

        if (code == null || code == '') {
            errorText.innerText = 'Code cannot be empty';
            return;
        }

        fetch(`changepassword.php?code=${code}&username=${localStorage.getItem("tempusername")}&step=2`).then((response) => response.text()).then((res) => {
            if (res.startsWith('success')) {
                document.getElementById('usertext').style.display = 'none';
                document.getElementById('username').style.display = 'none';
                document.getElementById('div1').style.display = '';
                document.getElementById('div2').style.display = '';
                document.getElementById('survey').action = 'javascript:submitNewPassword()';
            } else {
                document.getElementById('errorText').innerText = 'Code is incorrect';
            }
        });
    }

    function submitNewPassword() {
        const errorText = document.getElementById('errorText');
        const confirmPass = document.getElementById('confirmPassword').value;
        const pass = document.getElementById('password').value;

        if (pass == null || pass == '' || confirmPass == null || confirmPass == '') {
            errorText.innerText = 'Password cannot be empty';
            return;
        }
        if (confirmPass != pass) {
            errorText.innerText = 'Passwords do not match';
            return;
        }

        fetch(`changepassword.php?username=${username}&password=${pass}&step=3`).then((response) => response.text()).then((res) => {
            if (res.startsWith('success')) {
                location.href = 'profile.php';
            } else {
                errorText.innerText = 'error changing password';
                location.reload();
            }
        });
    }
</script>

</html>