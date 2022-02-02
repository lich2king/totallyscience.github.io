<?php
$servername = "localhost";
$username = "u483325885_profile";
$password = "Totally_accounts4321";
$database = "u483325885_accounts";

$user = htmlspecialchars($_GET["username"]);
$step = htmlspecialchars($_GET["step"]);


// Create connection
$conn = new mysqli($servername, $username, $password, $database);
  
// Check connection
if ($conn->connect_error) {
  die("connection failed"); //. $conn->connect_error);
}

if ($step == 1) {
    if ($userresult = $conn->query("SELECT * FROM AccountsTable WHERE Username = '$user'"))
    {
        $row = $userresult -> fetch_row();
    
        $from = "help@totallyscience.co";
        $to = $row[1];
        $subject = "Totally Science Change Password Confirmation";
        $rand = rand(10000,99999);
        $message = "Your confirmation code is " . $rand;
        $headers = "From:" . $from;
    
        if (mail($to, $subject, $message, $headers)) {
            // email send client should show confirmation box
            echo "Success The email message was sent!";
        } else {
            echo "The email message was not sent.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta property="og:title" content="Totally Science">
    <meta property="og:site_name" content="Totally Science">
    <meta property="og:url" content="">
    <meta property="og:description" content="The best place for 'Learning Science!'">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://totallyscience.co/assets/images/logo.png">

    <title>Totally Science</title>
    <!--Cache Killer-->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <link rel='stylesheet' href='./assets/styles/account.css'>
    <link rel='stylesheet' href='./assets/styles/main.css'>

    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />
    <!--End Cache Killer-->

    <link rel="icon" href="./assets/images/logo.png">
    <!--Google Adsense-->
    <script data-ad-client="ca-pub-3486863589051210" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>

<body>
    <div id="navbar">
        <div id="leftbar">
            <div class="nav-button"><a href="index.html">Home</a></div>
            <div class="nav-button"><a href="classes.html">Games</a></div>
            <div class="nav-button"><a href="leaderboard.html">Leaderboard</a></div>
            <div class="nav-button"><a href="browser.html">Browser</a></div>
            <div class="nav-button"><a href="chat.html">Chat</a></div>
        </div>

        <div id="middlebar">
            <p>Totally Science</p>
        </div>

        <div id="rightbar">
            <a id="login" href="profile.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </a>

            <a id="settings" href="preferences.html"><img src="./assets/images/settings-light.svg"></img>
            </a>
        </div>
    </div>

    <div style="padding-top: 90px;"></div>

    <form id="survey" action="javascript:sendEmailConfirm()">
        <div>
            <label for="username">Username</label><br>
            <input type='text' id='username' name='username' placeholder='John Doe'><br>
        </div>

        <div style="display: none;">
            <label for="password">New Password</label><br>
            <input type='password' id='password' name='password' placeholder='**********'><br>
        </div>

        <div style="display: none;">
            <label for="password">Confirm New Password</label><br>
            <input type='password' id='confirmPassword' name='password' placeholder='**********'><br>
        </div>

        <button id="save-button">Submit</button>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>
    <p style="text-align: center;"><a href="login.html">back to login</a></p>
    <script defer src="./assets/scripts/main.js?v12"></script>
</body>


<script>
    fetch(`https://totallyscience.co/assets/php/cookiedata.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
        res = JSON.parse(res)
        const loggedIn = 'false'
        if (res != null) {
            const loggedIn = res["isLoggedIn"]
        }
        if (loggedIn == "true") {
            window.open('./profile.html', '_self')
        }
    });

    function sendEmailConfirm() {
        const user = document.getElementById('username').value;
        const errorText = document.getElementById('errorText');

        if (user == null || user == '') {
            errorText.innerText = 'Username cannot be empty';
            return;
        }

        fetch(`./changepassword.php?username=${user}&step=1`).then((response) => response.text()).then((res) => {
            if (res.includes('Success')) {
                //success now show confirmation box
            }
        });
    }


    /*
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

    function SubmitLogin() {
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const errorText = document.getElementById('errorText');

        fetch(`https://totallyscience.co/assets/php/login.php?username=${user}&password=${pass}`).then((response) => response.text()).then((res) => {
            if (res == "Success") {
                errorText.style = "text-align:center; color: green;"
                errorText.innerText = ("*" + res)
                window.open('./profile.html', '_self')
            } else {
                errorText.innerText = ("*" + res)
            }
        });
    }
    */
</script>

</html>