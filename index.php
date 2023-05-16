<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/index.css?v35'>
    <script src="/assets/scripts/fontawesome.js"></script>
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
                <img src="assets/images/chest.png" style="pointer-events: none;">
            </div>
        </div>

        <p class='timerText' id='timerText'><span class="loader"></span>Daily Reward In <span id="rewardTimer"></span>
        </p>
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
                    Now <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="1200" viewBox="0 0 1200 1200">
  <defs>
    <pattern id="pattern" width="1" height="1" viewBox="0 -59.689 1200 1200">
      <image preserveAspectRatio="none" width="24" height="24" xlink:href="data:image/png;base64,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iVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABliVcmXgEAAABl3RvxavSJVwAAAEBZ9yb5bNoHFBOvAAAAAC4Rr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoSr0y8AgAAAMoS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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgM37EymSH4xEya7sAAAAAElFTkSuQmCC"/>
    </pattern>
  </defs>
  <rect id="arrow" width="24" height="24" fill="url(#pattern)"/>
</svg>
</button>
            </div>

            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/bob-the-robber-2-featured.png); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">BOB THE ROBBER 2</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Bob-the-Robber-2', '_self')"
                    class="featureButton button">Play Now <i class="fa-solid fa-angle-right fa-lg" style="color: #ffffff;"></i></button>
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

    <div id="searchcatParent">
        <div id="games"></div>

        <div id="noSearch" style="display:none">
            <p>You search terms did not match any games...</p>
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
            <div style="background-image: url(assets/images/extracats/cars.png);"></div>
            <p>Car Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=action', '_self')">
            <div style="background-image: url(assets/images/extracats/vex-7-games.png);"></div>
            <p>Vex Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=casual', '_self')">
            <div style="background-image: url(assets/images/extracats/arcade.jpg);"></div>
            <p>Arcade Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=clicker', '_self')">
            <div style="background-image: url(assets/images/extracats/clicker.png);"></div>
            <p>Clicker Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=multiplayer', '_self')">
            <div style="background-image: url(assets/images/extracats/multiplayer.png);"></div>
            <p>Multiplayer Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=music', '_self')">
            <div style="background-image: url(assets/images/extracats/fnf.jpg);"></div>
            <p>Friday Night Funkin' Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=horror', '_self')">
            <div style="background-image: url(assets/images/extracats/fnaf.png);"></div>
            <p>Five Nights at Freddy's Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=action', '_self')">
            <div style="background-image: url(assets/images/extracats/running.jpg);"></div>
            <p>Running Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=puzzle', '_self')">
            <div style="background-image: url(assets/images/extracats/puzzle.jpg);"></div>
            <p>Puzzle Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=escape', '_self')">
            <div style="background-image: url(assets/images/extracats/henrystickmin.png);"></div>
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

    <script src="assets/scripts/index.js?v85"></script>
</body>

</html>