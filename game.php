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
            <iframe id="iframe"
                src="">
            </iframe>
        </div>
        <div class="options">
            <div class="left">
                <button id="like" class="game-button button-effect-a hover-text" data-hover="0"><img
                        src="/assets/images/icons/likeoutline.png"></button>
                <button onclick="OpenHighscore()" class="game-button hover-text" data-hover="203"><img
                        src="https://www.nicepng.com/png/full/37-375088_icons-health-trophy-trophy-icon-white-png.png"></button>
                <button id="save" class="game-button"><img src="/assets/images/icons/saveicon.png"></button>
                <button class="game-button"><img src="/assets/images/icons/upload.png"></button>
            </div>
            <div class="right">
                <button id="pin" class="game-button button-effect-a"><img
                        src="/assets/images/icons/pinoutline.png"></button>
                <button id="fullscreen" class="game-button"><img src="/assets/images/icons/fullscreen.png"></button>
            </div>
        </div>
    </div>

    <div id="info">
        <div>
            <h1>
                Description
            </h1>
            <p id="description">
                
            </p>
            <div class="break"></div>
            <h1>
                Controls
            </h1>
            <p id="controls">
                
            </p>
            <div class="break"></div>
            <h1>
                Created By
            </h1>
            <p id="developer">
                
            </p>
        </div>

    </div>


    <div id="moregames">
        <h1>
            Reccomended
        </h1>
        <div class="gamesDiv">
            <div id="gameDiv" onclick="location.href = 'class?class=1v1 LOL'">
                <input type="image"
                    src="./assets/game_images/1v1.jpg" />
                <div class="innerGameDiv">1v1 LOL</div>
            </div>
            <div id="gameDiv" onclick="location.href = 'class?class=1v1 LOL'">
                <input type="image"
                    src="./assets/game_images/1v1.jpg" />
                <div class="innerGameDiv">1v1 LOL</div>
            </div>
            <div id="gameDiv" onclick="location.href = 'class?class=1v1 LOL'">
                <input type="image"
                    src="./assets/game_images/1v1.jpg" />
                <div class="innerGameDiv">1v1 LOL</div>
            </div>
            <div id="gameDiv" onclick="location.href = 'class?class=1v1 LOL'">
                <input type="image"
                    src="./assets/game_images/1v1.jpg" />
                <div class="innerGameDiv">1v1 LOL</div>
            </div>
        </div>
    </div>




    <?php include "assets/includes/footer.php" ?>



    <script src="assets/scripts/game.js?v14"></script>
    <script src="assets/scripts/main.js"></script>
</body>

</html>