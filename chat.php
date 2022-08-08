<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <style>
        button {
            cursor: pointer;
            background-color: var(--accent-color);
            color: var(--light-color);
            border: 2px;
            border-radius: 10px;
            font-size: 20px;
            padding: 15px;
            margin-top: 10px;
            width: 250px;
            margin-left: 50%;
            transform: translate(-50%);
        }
        
        input {
            padding: 15px;
            width: 220px;
            border: solid 2px var(--accent-color);
            border-radius: 10px;
            margin-left: 50%;
            outline: none;
            background-color: var(--light-color);
            color: var(--dark-color);
            transform: translate(-50%);
            margin-top: 10px;
        }
        
        ul {
            margin-top: 150px;
            margin-left: 200px;
            font-family: 'Rubik';
            line-height: 30px;
            word-break: break-all;
            list-style-type: none;
        }
        
        span {
            position: absolute;
            left: 10px;
        }
        
        section {
            margin-bottom: 80px;
        }
        
        #username {
            margin-top: 150px;
        }
        
        #messageinput {
            transform: none;
            bottom: 10px;
            left: 100px;
            margin-left: 0;
            position: fixed;
            width: calc(100% - 200px);
        }
        
        #leavebtn {
            transform: none;
            bottom: 10px;
            padding: 15px;
            left: 10px;
            margin-left: 0;
            position: fixed;
            width: 80px;
            font-size: 18px;
        }
        
        #messages {
            color: var(--dark-color);
        }
        
        #errorText {
            text-align: center;
            color: red;
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
            <div class="nav-button selected"><a href="">Chat</a></div>
        </div>

        <div id="middlebar">
            <p>Totally Science</p>
        </div>

        <div id="rightbar">
            <a id="login" href="profilenew.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </a>

            <a id="settings" href="preferences"><img src="./assets/images/settings-light.svg"></img></a>
        </div>
    </div>

    <input id="username" placeholder="Name" onclick=""></input>
    <input id="roominput" placeholder="Room code" onclick=""></input>
    <button id="createbtn" onclick="joinRoom(true);">Create New Room</button>
    <button id="joinbtn" onclick="joinRoom(false)">Join Room</button>
    <p id="errorText"></p>

    <!--Responsive Google Horizontal Ad-->
    <div id="ad" align="center" style="margin-top: 20vh;">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210" crossorigin="anonymous"></script>
        <!-- Horizontal Ad -->
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210" data-ad-slot="5628466741" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>
    <!--END Responsive Google Horizontal Ad END-->

    <section id="chat">
        <ul id="messages"></ul>
        <input style="display: none;" id="messageinput" placeholder="message" onclick=""></input>
        <button style="display: none;" id="leavebtn" onclick="location.reload();">Leave</button>
    </section>

    <svg id="scrollb" style="transform: rotate(180deg);" onclick="window.scrollTo(0, document.body.scrollHeight);" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/chat.js"></script>
</body>

</html>