<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/game.css?v9'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="gameframe">
        <div class="game">
            <iframe id="iframe" src=""></iframe>
        </div>

        <div class="options">
            <div class="left">
                <div class="undertext">
                    <button id="like" class="text-button button-effect-a"><img src="assets/images/icons/likeoutline.png"></button>
                    <div id="likeCount">...</div>
                </div>
                <div class="undertext">
                    <button onclick="OpenHighscore()" class="text-button"><img src="https://www.nicepng.com/png/full/37-375088_icons-health-trophy-trophy-icon-white-png.png"></button>
                    <div id="currentHighscore">...</div>
                </div>
                <!--<button id="save" class="game-button"><img src="assets/images/icons/saveicon.png"></button>
                <button class="game-button"><img src="assets/images/icons/upload.png"></button>-->
            </div>
            <div class="right">
                <button id="pin" class="game-button button-effect-a"><img src="assets/images/icons/pinoutline.png"></button>
                <button id="fullscreen" class="game-button"><img src="assets/images/icons/fullscreen.png"></button>
            </div>
        </div>
    </div>

    <div id="info">
        <div>
            <h1>Description</h1>
            <p id="description"></p>
            <div class="break"></div>
            <h1>Controls</h1>
            <p id="controls"></p>
            <div class="break"></div>
            <h1>Created By</h1>
            <p id="developer"></p>
        </div>
    </div>

    <div id="moregames">
        <h1>Recommended</h1>
        <div class="gamesDiv" id="suggestedGames"></div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    
    <script src="assets/scripts/class.js?v54"></script>
</body>

</html>