<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <style>
        .iframeloader {
            background: url(./assets/images/loadinggif.gif) center center no-repeat;
            background-size: 5vw;
        }
        
        #noCookies {
            margin-top: 5vh;
            padding-bottom: 20vh;
            text-align: center;
        }
        
        #noCookies p {
            font-size: 2vw;
            display: block;
            margin: 0%;
            padding: 0%;
        }
        
        #noCookies p2 {
            font-size: 1vw;
            display: block;
            padding-bottom: 3vh;
        }
        
        #noCookies img {
            margin-bottom: 2vh;
            border: 3px solid var(--accent-color);
            border-radius: 10px;
        }
    </style>
</head>

<body style="overflow: hidden;">
    <div id="navbar">
        <div id="leftbar">
            <div class="nav-button"><a href="index">Home</a></div>
            <div class="nav-button"><a href="classes">Games</a></div>
            <div class="nav-button"><a href="leaderboard">Leaderboard</a></div>
            <div class="nav-button selected"><a href="apps">Apps</a></div>
            <div class="nav-button"><a href="chat">Chat</a></div>
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

            <a id="settings" href="settings.php"><img src="./assets/images/settings-light.svg"></img></a>
        </div>
    </div>

    <div style="margin-top: 55px; overflow: hidden; height: 91vh; width: 100vw;" id="yesCookies">
        <iframe class="iframeloader" id="app_frame" style="border: none; position: relative; z-index: 2; overflow: hidden;" width=100% height=100% src=""></iframe>
    </div>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/app.js?v1"></script>
</body>

</html>