<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/class.css?v59'>
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
                            src="assets/images/icons/likeoutline.png"></button>
                    <div id="likeCount">...</div>
                    <button onclick="OpenHighscore()" class="text-button"><img
                            src="assets/images/icons/trophy-icon.png"></button>
                    <div id="currentHighscore">...</div>
                </div>

                <div class="right">
                    <button id="share" class="game-button button-effect-a"><img
                            src="assets/images/icons/share.png"></button>
                    <button id="pin" class="game-button button-effect-a"><img
                            src="assets/images/icons/pinoutline.png"></button>
                    <button id="fullscreen" class="game-button"><img src="assets/images/icons/fullscreen.png"></button>
                </div>
            </div>
        </div>

        <div class="ad">
            <div class="adsrc"></div>
        </div>
    </div>

    <div class="adsrc adhorz" style="text-align:center;">
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
                    <img class="arrow" src="/assets/images/left-arrow.png">
                </div>

                <div class="arrowCon arrowRightCon" id="arrowRight">
                    <img class="arrow" src="/assets/images/right-arrow.png">
                </div>
            </div>

            <div class="gamesCon">

            </div>
        </div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/class.js?v145"></script>
</body>

</html>