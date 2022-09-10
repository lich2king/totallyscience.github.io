<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/leaderboard.css?v16'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="top"></div>

    <div id="searchDiv">
        <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search by game">
    </div>

    <h1 id="nohighscore" style="display:none"></h1>

    <div style="text-align:center; margin-top: 20px; margin-bottom: 50px">
        <button class="button" onclick="window.open('submithighscore.php', '_self')"><span>Submit Highscore</span> <img style="padding-left:0.5vw" width="16vw" src="https://www.cooperlighting.com/s/vividtune/png/right-arrow.png"></button>
    </div>

    <div id="highscores"></div>

    <div id="verticalAds">
        <div class="contain-left">
            <div class="left">
                <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210"
                    crossorigin="anonymous"></script>
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
                    data-ad-slot="3780993293" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
        <div class="contain-right">
            <div class="right">
                <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210"
                    crossorigin="anonymous"></script>
                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
                    data-ad-slot="3780993293" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/leaderboard.js?v21"></script>
</body>

</html>