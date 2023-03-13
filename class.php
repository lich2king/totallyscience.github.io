<!-- // READY -->

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
            <div class="adsrc">
                <!-- <ins class="adsbygoogle sideBarAd" style="display:block" data-ad-client="ca-pub-3486863589051210"
                    data-ad-slot="3780993293" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
                </script> -->
            </div>
            <!-- <iframe class="adframe" scrolling="no" style="display:none; width:10vw; height:60vh; border: none;"
                src=""></iframe> -->
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
                    <button id="pin" class="game-button button-effect-a"><img
                            src="assets/images/icons/pinoutline.png"></button>
                    <button id="fullscreen" class="game-button"><img src="assets/images/icons/fullscreen.png"></button>
                </div>
            </div>
        </div>

        <div class="ad">
            <div class="adsrc">
                <!-- <ins class="adsbygoogle sideBarAd" style="display:block" data-ad-client="ca-pub-3486863589051210"
                    data-ad-slot="3780993293" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
                </script> -->
            </div>
            <!-- <iframe class="adframe" scrolling="no" style="display:none; width:10vw; height:50vh; border: none;"
                src=""></iframe> -->
        </div>
    </div>
    <div class="adsrc adhorz" style="text-align:center;">
        <!-- Under the Game -->
        <!-- <ins class="adsbygoogle" style="display:inline-block;width:800px;height:100px"
            data-ad-client="ca-pub-3486863589051210" data-ad-slot="3824383684"></ins>
        <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
        </script> -->
    </div>
    <!-- <iframe class="adframe" style="display:none; width:100vw; height:60vh; border: none;" src=""></iframe> -->


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
                <div class="ad">
                    <!-- Description -->
                    <!-- <ins class="adsbygoogle descAd" style="display:block" data-ad-client="ca-pub-3486863589051210"
                        data-ad-slot="2299000285" data-ad-format="auto" data-full-width-responsive="true"></ins>
                    <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    </script> -->
                </div>
            </div>
        </div>
    </div>

    <div id="games">

    </div>

    <?php include "assets/includes/footer.php" ?>


    <script src="assets/scripts/class.js?v98"></script>
</body>

</html>