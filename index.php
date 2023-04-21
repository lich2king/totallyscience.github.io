<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/index.css?v34'>
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

        <p class='timerText'><span class="loader"></span>Daily Reward In <span id="rewardTimer"></span></p>
    </div>

    <div id="startcontent">
        <div id="feature">
            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/justfall.jpg); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">JUST FALL</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Just%20Fall', '_self')" class="featureButton button">Play
                    Now</button>
            </div>

            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/baldi.png); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">BALDIS BASICS</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Baldis%20Basics', '_self')"
                    class="featureButton button">Play Now</button>
            </div>

            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/chess.png); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">CHESS</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Chess', '_self')" class="featureButton button">Play
                    Now</button>
            </div>

            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/vex-3.png); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">VEX 3</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>

                <button onclick="window.open('class.php?class=Vex%203', '_self')" class="featureButton button">Play
                    Now</button>
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
        <div id="extraCategory" onclick="window.open('classes.php?category=escape', '_self')">
            <div style="background-image: url(assets/images/extracats/henrystickmin.png);"></div>
            <p>Henry Stickmin Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=horror', '_self')">
            <div style="background-image: url(assets/images/extracats/fnaf.png);"></div>
            <p>Five Nights at Freddy's Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=music', '_self')">
            <div style="background-image: url(assets/images/extracats/fnf.jpg);"></div>
            <p>Friday Night Funkin' Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=action', '_self')">
            <div style="background-image: url(assets/images/extracats/vex.jpg);"></div>
            <p>Vex Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=car', '_self')">
            <div style="background-image: url(assets/images/extracats/cars.png);"></div>
            <p>Car Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=multiplayer', '_self')">
            <div style="background-image: url(assets/images/extracats/multiplayer.png);"></div>
            <p>Multiplayer Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=action', '_self')">
            <div style="background-image: url(assets/images/extracats/running.jpg);"></div>
            <p>Running Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=puzzle', '_self')">
            <div style="background-image: url(assets/images/extracats/puzzle.jpg);"></div>
            <p>Puzzle Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=casual', '_self')">
            <div style="background-image: url(assets/images/extracats/arcade.jpg);"></div>
            <p>Arcade Games</p>
        </div>

        <div id="extraCategory" onclick="window.open('classes.php?category=clicker', '_self')">
            <div style="background-image: url(assets/images/extracats/clicker.png);"></div>
            <p>Clicker Games</p>
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
        <br><br>

        <h1>
            <span>About</span> Totally Science
        </h1>

        <p>
            <span>Totally Science</span> is a website that offers unblocked games and proxy apps for school use. Totally
            Science was
            founded in January 2022 with the aim of giving users the best experience of <span>unblocked games and
                unblocked
                proxy apps at school</span>. At Totally Science, you can play games with your friends without being
            blocked or
            having any other problems. You can play games all the time on your computer or phone device at school or
            work.
            You also do not need to install any additional software or know any plugins. People can play many other
            games,
            such as racing, shooting, mind games, sports, or slope games...
        </p>
        <br>
        <h1>Totally Science <span>Apps</span></h1>
        <p>Currently, Totally Science offers web proxy services for many popular applications, including <span>YouTube,
                Discord,
                Tiktok, Google, Twitch, Spotify, Mathway, Netflix, Github, and others.</span></p>
        <br>
        <h1>Totally Science <span>Games</span></h1>
        <p>
            There are many outstanding unblocked games nowadays, and Totally Science currently offers more than 100 of
            the most popular games covering many genres like racing, shooting, intelligence, and many more. The games
            Totally Science offers are developed on HTML5, Unity, and many other platforms. Among them are some
            outstanding games, such as:
            </span>
        </p>

        <ul>
            <li>1v1 LoL</li>
            <li>Five Nights at Freddy's ( FNAF series )</li>
            <li>2048</li>
            <li>Retro Bowl</li>
            <li>Drift Boss</li>
            <li>Slope</li>
            <li>Minecraft</li>
            <li>Basketball Stars</li>
            <li>Smash Karts</li>
            <li>Fall Guys</li>
            <li>Among Us</li>
        </ul>

        <br><br>
    </div>

    <!-- popup to award daily points -->
    <div id="dailyRewardPopup" style="display:none">
        <h1>Daily Reward</h1>

        <div class="timerCon">
            <p>Next reward in <span id="popTimer">23:59:59</span></p>
        </div>

        <p class="points">+<span id="popPoints">100</span> points!</p>

        <div class="days">
            <div class="row">
                <div>
                    <div class="circle">
                        <img class="popCheck" style="visibility: visible;" src="assets/images/icons/check.webp">
                    </div>

                    <p>Day 1</p>
                </div>
                <div>
                    <div class="circle">
                        <img class="popCheck" style="visibility: hidden;" src="assets/images/icons/check.webp">
                    </div>

                    <p>Day 2</p>
                </div>
                <div>
                    <div class="circle">
                        <img class="popCheck" style="visibility: hidden;" src="assets/images/icons/check.webp">
                    </div>

                    <p>Day 3</p>
                </div>
                <div>
                    <div class="circle">
                        <img class="popCheck" style="visibility: hidden;" src="assets/images/icons/check.webp">
                    </div>

                    <p>Day 4</p>
                </div>

            </div>
            <div class="row">
                <div>
                    <div class="circle">
                        <img class="popCheck" style="visibility: hidden;" src="assets/images/icons/check.webp">
                    </div>

                    <p>Day 5</p>
                </div>
                <div>
                    <div class="circle">
                        <img class="popCheck" style="visibility: hidden;" src="assets/images/icons/check.webp">
                    </div>

                    <p>Day 6</p>
                </div>
                <div>
                    <div class="circle">
                        <img class="treasure" style="" src="assets/images/chest.png">
                        <img class="popCheck" style="visibility:hidden" src="assets/images/icons/check.webp">
                    </div>

                    <p>Day 7</p>
                </div>
                <div style="visibility:hidden">
                    <div class="circle">
                        <img style="visibility: hidden;" src="assets/images/icons/check.webp">
                    </div>

                    <p></p>
                </div>

            </div>
        </div>

        <button onclick="claimReward()" class="button" id="claimRewardB">Sign Up To Claim</button>
        <p class="ignore" onclick="ignorePopReward()" id="ignoreReward">Or ignore the free reward</p>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/index.js?v61"></script>
</body>

</html>