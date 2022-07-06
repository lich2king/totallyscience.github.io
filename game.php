<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/game.css?v3'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>


    <div id="gameframe">
        <div class="game">
            <iframe id="iframe" src="https://ejvd3326248pklq0mtj313irgbc2vsrb-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://sites.google.com/site/s035r8h4/1v1.xml&container=enterprise&view=default&lang=en&country=ALL&sanitize=0&v=544c660bc8b16c1d&libs=core&mid=172&parent=https://sites.google.com/site/unblockedgames66ez/1v1-lol#st=e%3DAIHE3cBK9D0UGibwSQF2F64MR8cb4pzmPVFPpm9x2iU1OmvV3wfrHm9F2stu5dMRRYLHGsmiZQNreywjA%252F5m1pl9Ovr49lxTSbekq%252F58DGx8Fju5Kybmy15YlmhPX4edPMPIxnzqTss%252F%26c%3Denterprise&rpctoken=-1798097197484458310">
            </iframe>
        </div>
        <div class="options">
            <div class="left">
                <button id="like" class="game-button button-effect-a hover-text" data-hover="0"><img
                        src="/assets/images/icons/likeoutline.png"></button>
                <button onclick="OpenHighscore()" class="game-button hover-text" data-hover="203"><img
                        src="https://www.nicepng.com/png/full/37-375088_icons-health-trophy-trophy-icon-white-png.png"></button>
                <button class="game-button"><img src="/assets/images/icons/saveicon.png"></button>
            </div>
            <div class="right">
                <input type="image" id="image" alt="Login" src="/assets/images/icons/pin.png">
                <input type="image" id="image" alt="Login" src="/assets/images/icons/fullscreen.png">
            </div>
        </div>
    </div>


    <?php include "assets/includes/footer.php" ?>



    <script src="assets/scripts/game.js?v13"></script>
    <script src="assets/scripts/main.js"></script>
</body>

</html>