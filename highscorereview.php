<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <style>
        #survey {
            text-align: center;
        }
        
        #survey div {
            padding-bottom: 2vh;
        }
        
        #survey label {
            font-size: 1.1vw;
        }
        
        #survey input,
        #survey select {
            width: 21vw;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            background-color: var(--light-color);
            border: 2px solid var(--accent-color);
            border-radius: 4px;
            color: var(--dark-color);
            box-sizing: border-box;
            outline: none;
            font-size: 1vw;
            margin-bottom: 4vh;
        }
        
        #survey button {
            font-size: 1.5vw;
            width: 15vw;
            height: 8vh;
            color: var(--light-color);
            background-color: var(--accent-color);
            border: 0px;
            border-radius: 10px;
            margin-bottom: 2%;
            cursor: pointer;
        }
        
        #data {
            text-align: center;
        }
        
        #data p {
            font-size: 1.5vw;
        }
        
        #data div {
            margin-top: 5vh;
        }
        
        #data button {
            font-size: 1.5vw;
            width: 8vw;
            height: 4vh;
            color: var(--light-color);
            background-color: var(--accent-color);
            border: 0px;
            border-radius: 10px;
            margin-bottom: 2%;
            cursor: pointer;
            transition: 0.2s;
        }
        
        #data button:hover {
            transform: scale(1.02);
            -moz-box-shadow: 3px 3px 5px 6px var(--box-shadow-color);
            -webkit-box-shadow: 3px 3px 5px 6px var(--box-shadow-color);
            box-shadow: 3px 3px 5px 3px var(--box-shadow-color);
        }
    </style>
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



    <div id="data">
        <h1 id="gameName">Game Name</h1>
        <p id="username">Username</p>
        <p id="score">100</p>
        <img id="image" onclick="enterFullscreen()" height="500" src="">
        <div>
            <button onclick="reject()" style="margin-right: 40vw;">Reject</button>
            <button onclick="approve()" style="margin-left: 40vw;">Approve</button>
        </div>
    </div>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>



    <script>
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const pass = urlParams.get('password')
        if (pass == 'Totally') {
            const color = urlParams.get('color')

            let username;
            let gameName;
            let score;
            let uid;

            function getRowData() {
                fetch(`./assets/php/reviewhighscore.php?step=0`).then((response) => response.text()).then((res) => {
                    console.log(res);
                    res = JSON.parse(res);

                    username = res['user']
                    gameName = res['game']
                    score = res['score']
                    uid = res['uid']

                    document.getElementById('gameName').innerText = gameName;
                    document.getElementById('username').innerText = username;
                    document.getElementById('score').innerText = score;
                    document.getElementById('image').src = res['image'];
                });
                if (document.getElementById('gameName').src = 'Game Name') {
                    document.getElementById('gameName').innerText = 'No more highscores currently :)';
                    document.getElementById('username').innerText = '';
                    document.getElementById('score').innerText = '';
                }
            }


            function reject() {
                fetch(`./assets/php/reviewhighscore.php?step=1&username=${username}&game=${gameName}&score=${score}&uid=${uid}`).then((response) => response.text()).then((res) => {
                    console.log(res);
                });
                location.reload();
            }

            function approve() {
                fetch(`./assets/php/reviewhighscore.php?step=2&username=${username}&game=${gameName}&score=${score}&uid=${uid}`).then((response) => response.text()).then((res) => {
                    console.log(res);
                });
                location.reload();
            }

            getRowData();

            function enterFullscreen() {
                var elem = document.getElementById("image");

                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
            }
        }
    </script>


</body>



</html>