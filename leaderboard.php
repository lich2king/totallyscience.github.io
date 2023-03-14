<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>
    <title>Leaderboard - Totally Science - Free Online Unblocked Games</title>

    <link rel='stylesheet' href='assets/styles/leaderboard.css?v28'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="top"></div>

    <div id="searchDiv">
        <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search by game">
    </div>

    <h1 id="nohighscore" style="display:none"></h1>



    <div id="highscores">
        <div id="submitB" style="">
            <button class="button" onclick="window.open('submithighscore.php', '_self')"><span>Submit Highscore</span>
                <img style="padding-left:0.5vw" width="16vw"
                    src="https://www.cooperlighting.com/s/vividtune/png/right-arrow.png"></button>
        </div>
        <div id="verticalAds">
            <div class="contain-left">
                <div class="left">
                    <!-- <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
                        data-ad-slot="3780993293" data-ad-format="auto" data-full-width-responsive="true"></ins>
                    <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    </script> -->
                </div>
            </div>
            <div class="contain-right">
                <div class="right">
                    <!-- <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
                        data-ad-slot="3780993293" data-ad-format="auto" data-full-width-responsive="true"></ins>
                    <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                    </script> -->
                </div>
            </div>
        </div>
    </div>



    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/leaderboard.js?v24"></script>
</body>

</html>