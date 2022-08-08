<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <style>
        #privacyText {
            color: var(--light-color);
            position: absolute;
            right: 50%;
            transform: translateX(50%);
        }
        
        #privacyText h1 {
            text-align: center;
        }
        
        #mainText {
            font-size: 2.5vw;
            font-weight: 900;
        }
        
        .shadow {
            -moz-box-shadow: 3px 3px 5px 6px #ccc;
            -webkit-box-shadow: 3px 3px 5px 6px #ccc;
            box-shadow: 3px 3px 5px 6px #ccc;
        }
        
        .partner {
            text-align: center;
            border-radius: 15px;
            margin-top: 10vh;
            padding-bottom: 10vh;
            width: 38vw;
            transition: 0.3s;
            height: 43vh;
        }
        
        .partner:hover {
            transform: scale(1.05);
        }
        
        .partner div {
            cursor: pointer;
            border-radius: 15px;
            right: 50%;
            transform: translateX(2.5%);
            transition: 0.2s;
        }
        
        .partner p {
            padding-left: 2vw;
            padding-right: 2vw;
            padding-bottom: 2vh;
        }
        
        #textDiv {
            height: 100%;
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
            <a id="login" href="profilenew.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
            </a>

            <a id="settings" href="preferences"><img src="./assets/images/settings-light.svg"></img></a>
        </div>
    </div>

    <div style="padding-top: 90px;"></div>

    <section id="privacyText">
        <h1 id="mainText">Our Partners</h1>
        <div class="partner" onclick="window.open('https://ubg100.github.io/')">
            <div class="shadow">
                <h1>UBG100</h1>
                <img width="100vw" src="https://ubg100.gitlab.io/assets/img/socials/ubg100.png">
                <div id="textDiv">
                    <p>We're a hub for the best games on the internet, all available for free! There is so much for you to choose from.<br>
                        <br> - Flash games <br>- Emulated games <br>- Unity games <br>- HTML5 games <br><br>Got a game you want to see? Join our Discord and make a suggestion! <br>What are you waiting for? </p>
                </div>
            </div>
        </div>
        <br>
        <div class="partner" onclick="window.open('https://www.sealcentral.gq/')">
            <div class="shadow">
                <h1>Seal Central</h1>
                <img width="100vw" src="https://yt3.ggpht.com/dfI8DwQ4wXrGuS9o_y7fbotRskCuOPMCK6IWaPWreXK9SdxQf3hpQhhZ3FgayvfQBXgXQWho=s900-c-k-c0x00ffffff-no-rj">
                <p>SealCentral is a google site based unblocked games website. We are the first to do everything that most unblocked website don't know was possible. We also have a good collection of proxied multiplayers game, fnf mods, and also host our
                    own mc server that you can play in your server. We are currently sitting at 100k+ visits as of Jan 2022.</p>
            </div>
        </div>
    </section>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>

    <script src="assets/scripts/main.js"></script>
</body>

</html>