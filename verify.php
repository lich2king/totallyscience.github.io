<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='./assets/styles/account.css'>
</head>

<body>
    <div id="navbar">
        <div id="leftbar">
            <div class="nav-button"><a href="index">Home</a></div>
            <div class="nav-button"><a href="classes">Games</a></div>
            <div class="nav-button"><a href="leaderboard">Leaderboard</a></div>
            <div class="nav-button"><a href="apps">Apps</a></div>
            <div class="nav-button"><a href="chat">Chat</a></div>
        </div>

        <div id="middlebar">
            <p>Totally Science</p>
        </div>

        <div id="rightbar">
            <a id="login" href="profile.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </a>

            <a id="settings" href="settings.php"><img src="./assets/images/settings-light.svg"></img>
            </a>
        </div>
    </div>

    <div style="padding-top: 90px;"></div>

    <form id="survey" action="javascript:submitConfirmCode()">
        <div>
            <label for="username">Confirmation Code From Email</label><br>
            <input type='text' id='code' name='code' placeholder='*****'><br>
        </div>

        <button id="save-button">Sign In</button>
    </form>

    <p style="text-align: center; color: red;" id="errorText"></p>
    <script src="./assets/scripts/main.js"></script>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>
    
    <script>
        fetch(`assets/php/getCookie.php`).then((response) => response.text()).then((res) => {
            res = JSON.parse(res);
    
            let loggedIn = 'false';

            if (res != null) {
                loggedIn = res['isLoggedIn'];
            }
    
            if (loggedIn != "true") {
                location.href = 'login.php';
            }
        });
    
    
        function submitConfirmCode() {
            const code = document.getElementById('code').value;
            const errorText = document.getElementById('errorText');
          
            fetch(`assets/php/verify.php?code=${code}`).then((response) => response.text()).then((res) => {
                if (res == 'success') {
                    errorText.style = 'text-align: center; color: green;';
                    errorText.innerText = ('*' + res);
                    location.href = 'profile.php';
                } else {
                    errorText.innerText = ('*'+ res);
                }
            });
        }
    </script>
</body>

</html>