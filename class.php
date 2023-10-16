<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/class.css?v69'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="gameframe">
        <div class="ad">
            <div class="adsrc"></div>
        </div>

        <div class="gameDisplay">
            <div class="game">
                <iframe id="iframe" title="Totally Science Unblocked Game" src=""></iframe>
            </div>

            <div class="options">
                <div class="left">
                    <button id="like" class="text-button button-effect-a"><img
                            src="assets/images/icons/likeoutline.avif"></button>
                    <div id="likeCount">...</div>
                    <button onclick="OpenHighscore()" class="text-button"><img
                            src="assets/images/icons/trophy-icon.avif"></button>
                    <div id="currentHighscore">...</div>
                </div>

                <div class="right">
                    <button id="share" onclick="shareGame()" class="game-button button-effect-a"><img
                            src="assets/images/icons/share.avif"></button>
                    <button id="pin" class="game-button button-effect-a"><img
                            src="assets/images/icons/pinoutline.avif"></button>
                    <button id="fullscreen" class="game-button"><img src="assets/images/icons/fullscreen.avif"></button>
                </div>
            </div>
        </div>
        <div class="chat">
            <div class='top'>
                <p><span id="usersOnline">0</span> users online</p>
            </div>
            <div class='content' id='chatContent'>
            </div>
            <div class='write'>
                <input type='text' id='messageBox' placeholder='Type a message...' maxlength='50'>
                <button id='sendChat' class='button-effect-a'><img src='assets/images/icons/send.avif'></button>
            </div>
        </div>
    </div>

    <div id="info">
        <div class="container">
            <div class="segmentAd">
                <div class="text">
                    <h1>Description</h1>
                    <p id="description"></p>
                    <div class="break"></div>

                    <h1>Controls</h1>
                    <p id="controls"></p>
                    <div class="break"></div>

                    <h1>Created By</h1>
                    <p id="developer"></p>
                </div>

                <div class="ad"></div>
            </div>
        </div>
    </div>

    <div id="games">
        <h1>Recommended Games</h1>

        <div class="horizontalCon">
            <div class="arrowsCon">
                <div class="arrowCon arrowLeftCon" id="arrowLeft" style="visibility: hidden;">
                    <img class="arrow" src="/assets/images/icons/arrow-left.svg">
                </div>

                <div class="arrowCon arrowRightCon" id="arrowRight">
                    <img class="arrow" src="/assets/images/icons/arrow-right.svg">
                </div>
            </div>

            <div class="gamesCon">

            </div>
        </div>
    </div>

    <div id="articleDiv" style="display:none">
        <div class="container" id="articleDivCon">
        </div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/socket.io.min.js"></script>
    <script src="assets/scripts/class.js?v224"></script>
</body>

</html>