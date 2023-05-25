<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/index.css?v43'>
    <script src="/assets/scripts/fontawesome0.js"></script>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="pointsbar">
        <div class="backbar">
            <div id="rewardDayBar" class="bar" style="width:0%"></div>
            <div class="dayCon">
                <p>Day 1</p>
                <p>Day 2</p>
                <p>Day 3</p>
                <p>Day 4</p>
                <p>Day 5</p>
                <p>Day 6</p>
                <img src="https://totallyscience.co/cdn-cgi/image/height=120,width=220/https:/totallyscience.co/assets/images/chest.png" style="pointer-events: none;">
            </div>
        </div>

        <p class='timerText' id='timerText'><span class="loader"></span>Daily Reward In <span id="rewardTimer"></span></p>
    </div>

    <div id="startcontent">
        <div id="feature">
            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/monkey-mart.jpg); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">MONKEY MART</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Monkey-Mart', '_self')" class="featureButton button">Play
                    Now <i class="fa-solid fa-angle-right fa-lg" style="color: #ffffff;"></i></button>
            </div>

            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/bob-the-robber-2-featured.png); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">BOB THE ROBBER 2</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Bob-the-Robber-2', '_self')"
                    class="featureButton button">Play Now <i class="fa-solid fa-angle-right fa-lg"
                        style="color: #ffffff;"></i></button>
            </div>

            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/motox3mpoolparty.png); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">MOTO X3M POOL PARTY</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Moto-X3M-Pool-Party', '_self')"
                    class="featureButton button">Play
                    Now <i class="fa-solid fa-angle-right fa-lg" style="color: #ffffff;"></i></button>
            </div>

            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/vex-7.png); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">VEX 7</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Vex-7', '_self')" class="featureButton button">Play
                    Now <i class="fa-solid fa-angle-right fa-lg" style="color: #ffffff;"></i></button>
            </div>
        </div>

        <div id="scisuggests">
            <div style="background-image: url(./assets/images/icons/preload.gif)" id="gameDiv"></div>
            <div style="background-image: url(./assets/images/icons/preload.gif)" id="gameDiv"></div>
            <div style="background-image: url(./assets/images/icons/preload.gif)" id="gameDiv"></div>
            <div style="background-image: url(./assets/images/icons/preload.gif)" id="gameDiv"></div>
            <div style="background-image: url(./assets/images/icons/preload.gif)" id="gameDiv"></div>
            <div style="background-image: url(./assets/images/icons/preload.gif)" id="gameDiv"></div>
        </div>
    </div>


    <div class="adsrc adhorz" style="text-align:center;"></div>

    <div id="games">
        <h1 id="newGamesLabel" style="display: none;">New Games <a href="/classes.php?category=new">View More</a></h1>
        <div id="newGamesHorizontalCon" class="horizontalCon" style="display: none;">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="newGamesCon"></div>
        </div>

        <h1>Popular Games</h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="popularGamesCon"></div>
        </div>

        <h1 id="likedGamesLabel" style="display: none;">Liked Games</h1>
        <div id="likedGamesHorizontalCon" class="horizontalCon" style="display: none;">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="likedGamesCon"></div>
        </div>

        <h1>Multiplayer Games <a href="/classes.php?category=multiplayer">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="multiplayerGamesCon"></div>
        </div>

        <h1>Car Games <a href="/classes.php?category=car">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="carGamesCon"></div>
        </div>

        <h1>Casual Games <a href="/classes.php?category=casual">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="casualGamesCon"></div>
        </div>

        <h1>Action Games <a href="/classes.php?category=action">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="actionGamesCon"></div>
        </div>

        <h1>Shooting Games <a href="/classes.php?category=shooting">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="shootingGamesCon"></div>
        </div>

        <h1>Puzzle Games <a href="/classes.php?category=puzzle">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="puzzleGamesCon"></div>
        </div>

        <h1>Classic Games <a href="/classes.php?category=classic">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="classicGamesCon"></div>
        </div>

        <h1>Sport Games <a href="/classes.php?category=sport">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="sportGamesCon"></div>
        </div>

        <h1>Clicker Games <a href="/classes.php?category=clicker">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="clickerGamesCon"></div>
        </div>

        <h1>Escape Games <a href="/classes.php?category=escape">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="escapeGamesCon"></div>
        </div>

        <h1>2 Player Games <a href="/classes.php?category=2">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="2GamesCon"></div>
        </div>

        <h1>Horror Games <a href="/classes.php?category=horror">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="horrorGamesCon"></div>
        </div>

        <h1>Hard Games <a href="/classes.php?category=hard">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="hardGamesCon"></div>
        </div>

        <h1>Music Games <a href="/classes.php?category=music">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="musicGamesCon"></div>
        </div>

        <h1>Flash Games <a href="/classes.php?category=flash">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="flashGamesCon"></div>
        </div>

        <h1>Partners <a href="/partners.php">View More</a></h1>
        <div class="horizontalCon">
            <?php include "assets/includes/arrows.php" ?>

            <div class="gamesCon" id="PartnersCon"></div>
        </div>
    </div>

    <script async src="https://cdn.ad.plus/player/adplus.js"></script>
    <script data-playerPro="current">
    (function() {
        var s = document.querySelector('script[data-playerPro="current"]');
        s.removeAttribute("data-playerPro");
        (playerPro = window.playerPro || []).push({
            id: "z2I717k6zq5b",
            after: s,
            appParams: {
                "C_NETWORK_CODE": "22753484437",
                "C_WEBSITE": "totallyscience.co"
            }
        });
    })();
    </script>

    <div class="adsrc" style="text-align:center; margin-top:50px;">
        <!-- Horizontal Ad -->
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
            data-ad-slot="5628466741" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>

    <!-- categories of games -->
    <div id="extraCategories">
        <div id="extraCategory" onclick="window.open('classes.php?category=car', '_self')">
            <img class="lazy" data-src="assets/images/extracats/cars.png" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Car Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=action', '_self')">
            <img class="lazy" data-src="assets/images/extracats/vex-7-games.png" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Vex Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=casual', '_self')">
            <img class="lazy" data-src="assets/images/extracats/arcade.jpg" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Arcade Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=clicker', '_self')">
            <img class="lazy" data-src="assets/images/extracats/clicker.png" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Clicker Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=multiplayer', '_self')">
            <img class="lazy" data-src="assets/images/extracats/multiplayer.png" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Multiplayer Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=music', '_self')">
            <img class="lazy" data-src="assets/images/extracats/fnf.jpg" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Friday Night Funkin' Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=horror', '_self')">
            <img class="lazy" data-src="assets/images/extracats/fnaf.png" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Five Nights at Freddy's Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=action', '_self')">
            <img class="lazy" data-src="assets/images/extracats/running.jpg" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Running Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=puzzle', '_self')">
            <img class="lazy" data-src="assets/images/extracats/puzzle.jpg" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Puzzle Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=escape', '_self')">
            <img class="lazy" data-src="assets/images/extracats/henrystickmin.png" style="width: 100%; height: calc(100% - 50px); border-top-left-radius: 30px; border-top-right-radius: 30px;">
            <p>Henry Stickmin Games</p>
        </div>
    </div>

    <div class="adsrc" style="text-align:center; margin-top:50px;">
        <!-- Horizontal Ad -->
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
            data-ad-slot="5628466741" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>

    <!-- description of TS and what it offers, included partially for SEO -->
    <div id="about">
        <p class="tophead">ABOUT TOTALLY SCIENCE</p>
        <h1>
            What is Totally Science?
        </h1>
        <p>
            Totally Science is an unblocked games website that offers everything from Minecraft to Monkey Mart. We also
            have a proxy that allows you to unblock and use any website you desire: Youtube, Tik Tok, Discord, go for
            it! Totally Science was founded in 2021 but only found a large user base January of 2022. The goal of
            Totally Science is to provide the most entertaining experience to bored students who need a break. We have
            hundreds of free to play games. Every month over 250 thousand gamers from all over the world play their
            favorite games on Totally Science.
        </p>
        <h1>Why are unblocked games popular?</h1>
        <p>Students love unblocked games because they get to play whatever they want, unrestricted and free. Competing
            with other students and trying to set high scores is a great way to kill some time. All the games on Totally
            Science are fast to load and require no download.</p>
        <h1>What are unblocked games?</h1>
        <p>
            Unblocked games are games that bypass filters and block protocols set by network administrators.
            This implies that gamers may access the games from anywhere, including school, work, and public Wi-Fi
            networks such as coffee shops or libraries.
        </p>
        <h1>Where can I play unblocked games?</h1>
        <p>
            On a site like totallyscience.co, you can play unblocked games anywhere you have a Wi-Fi connection. Home,
            school, work, anywhere!
        </p>
        <h1>Can I play unblocked games on a chromebook?</h1>
        <p>
            Yes! On Totally Science you can play unblocked games on a chromebook. Chromebooks are one of the most
            popular devices for an unblocked games site like Totally Science. Since the games require no download, you
            can play them on any device: Chromebooks, Macbooks, iPads, Dells, etc...
        </p>
        <h1>How to unblock games on computers at school</h1>
        <p>
            To unblocked games on a school computer, go to totallyscience.co, then scroll down to see all the different
            game categories. You can play multiplayer games, puzzle games, horror games, escape games, 2 player games,
            music games, sports games, shooting games, casual games, action games, driving games, or more!
        </p>
        <h1>How can I watch Youtube on a school computer?</h1>
        <p>
            To what Youtube on a school computer, first go to totallyscience.co. Next click "Proxy" at the top of the
            screen. Then click Youtube. You can search or browse for any video you want to watch. If you want to
            unblocked a different website, you can choose Google, then search for your site.
        </p>
        <h1>What is a proxy?</h1>
        <p>
            A proxy is a tool that allows you to bypass filters and block protocols set by your network administrators
            and go to whatever website you want. To go on any website unblocked in school or work, all you have to do is
            go on Totally Science, click Proxy, then choose which site you want to use, unblocked.
        </p>
        <h1>What are popular unblocked games?</h1>
        <p>
            There are many popular games on Totally Science. Out of the hundreds of games, the top 15 games (as of
            writing) are:
            </span>
        </p>
        <ul>
            <li>Minecraft</li>
            <li>Monkey Mart</li>
            <li>Geometry Dash</li>
            <li>Cluster Rush</li>
            <li>Bit Life</li>
            <li>1v1 LOL</li>
            <li>Bob the Robber 2</li>
            <li>Slope</li>
            <li>Drift Boss</li>
            <li>Basketball Stars</li>
            <li>Pixel Gun 3D</li>
            <li>Basket Random</li>
            <li>Moto X3M</li>
            <li>Death Run 3D</li>
            <li>Tactical Assassin 2</li>
        </ul>

        <br><br>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/index.js?v104"></script>
</body>

</html>