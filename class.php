<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel="stylesheet" href="assets/styles/class.css">
</head>

<body>
    <div id="navbar">
        <div id="leftbar">
            <div class="nav-button"><a href="index">Home</a></div>
            <div class="nav-button selected"><a href="classes">Games</a></div>
            <div class="nav-button"><a href="leaderboard">Leaderboard</a></div>
            <div class="nav-button"><a href="apps">Apps</a></div>
            <div class="nav-button"><a href="chat">Chat</a></div>
        </div>

        <div id="middlebar">
            <p>Totally Science</p>
        </div>

        <div id="rightbar">
            <a id="login" href="profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </a>

            <a id="settings" href="preferences"><img src="./assets/images/settings-light.svg"></img></a>
        </div>
    </div>

    <section id="game">
        <div id="gameDiv">
            <iframe class="iframeloader" src="" width="80vw" height="80vw" overflow="visible" frameBorder="0" id="game-iframe"></iframe>
        </div>

        <button onclick="enterFullscreen()"><img id="fullscreenImg" src="./assets/images/fullscreen-light.svg"></button>
    </section>

    <div align="center">
        <!--Ad-->
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210" crossorigin="anonymous"></script>
        <!-- Horizontal Ad -->
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210" data-ad-slot="5628466741" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        <!--End Ad-->
    </div>

    <section id="desc">
        <div class="grid-container">
            <div>
                <p class="mainText">Controls:</p>
            </div>
            <div>
                <p class="mainText">Developer:</p>
            </div>
            <div>
                <p id="controls" class="subText">...</p>
            </div>
            <div>
                <p id="developer" class="subText">This game was created by...</p>
            </div>
        </div>
    </section>

    <section id="report">
        <p>Is this game not working? Join the discord and let us know!</p>
    </section>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>

    <script src="./assets/scripts/main.js"></script>
    <script defer src="./assets/scripts/class.js?v3"></script>
</body>

</html>