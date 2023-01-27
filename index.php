<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>
    <link rel='stylesheet' href='assets/styles/index.css?v10'>
    <script type="text/javascript"
        src="https://platform-api.sharethis.com/js/sharethis.js#property=634c748df2bbcb00196d7191&product=inline-share-buttons"
        async="async"></script>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="startcontent">
        <div id="feature">
            <div class="featureSlot fade"
                style="background-image: url(./assets/images/basketballstarsfeature.jpeg); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">BASKETBALL STARS</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>
                <button onclick="window.open('class.php?class=Basketball%20Stars', '_self')"
                    class="featureButton button">Play Now</button>
            </div>
            <div class="featureSlot fade"
                style="background-image: url(./assets/images/featuredimg/smashkarts.jpg); display:none;">
                <div class="overlay">
                    <img class="arrow" src="/assets/images/left-arrow.png" onclick="plusSlides(-1)">
                    <h2 class="gametext stroke-text smooth-16">SMASH KARTS</h2>
                    <img class="arrow" src="/assets/images/right-arrow.png" onclick="plusSlides(1)">
                </div>
                <button onclick="window.open('class.php?class=Smash%20Karts', '_self')"
                    class="featureButton button">Play Now</button>
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



    <div id="info">
        <p><span style="max-width:40px;">&#129323;</span> To quickly return to Google Classroom, press <img
                style="max-width:40px;" src="https://img.icons8.com/color/480/tilde-key.png"></p>
        <p>Show your support by <span style="color: var(--accent-color);">sharing</span> Totally Science with friends
        </p>
        <div class="sharethis-inline-share-buttons"></div>
    </div>

    <div class="adsrc" style="text-align:center; margin-top:50px;">
        <!-- Horizontal Ad -->
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
            data-ad-slot="5628466741" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>

    <div id="searchcatParent">
        <div id="searchcat">
            <div id="firstcatrow">
                <button name="all" onclick="" class="selectedCategory categoryButton">All</button>
                <button name="new" onclick="" class="unselectedCategory categoryButton">New</button>
                <button name="popular" onclick="" class="unselectedCategory categoryButton">Popular</button>
                <button name="2" onclick="" class="unselectedCategory categoryButton">2 Player</button>
                <button name="car" onclick="" class="unselectedCategory categoryButton">Car</button>
                <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search">
                <button name="stickman" onclick="" class="unselectedCategory categoryButton">Stickman</button>
                <button name="card" onclick="" class="unselectedCategory categoryButton">Card</button>
                <button name="hard" onclick="" class="unselectedCategory categoryButton">Hard</button>
                <button name="fnf" onclick="" class="unselectedCategory categoryButton">FNF</button>
                <button name="multiplayer" onclick="" class="unselectedCategory categoryButton">Multiplayer</button>
            </div>
            <div id="nextcatrow">
                <button name="fnaf" onclick="" class="unselectedCategory categoryButton">FNAF</button>
                <button name="emulator" onclick="" class="unselectedCategory categoryButton">Emulator</button>
                <button name="puzzle" onclick="" class="unselectedCategory categoryButton">Puzzle</button>
                <button name="scratch" onclick="" class="unselectedCategory categoryButton">Scratch</button>
                <button name="sport" onclick="" class="unselectedCategory categoryButton">Sport</button>
                <button name="recent" onclick="" class="unselectedCategory categoryButton">Recent</button>
                <button name="liked" onclick="" class="unselectedCategory categoryButton">Liked</button>
            </div>
        </div>


        <div id="games">
        </div>

        <div id="noSearch" style="display:none">
            <p>You search terms did not match any games...</p>
        </div>
    </div>

    <div style="text-align:center">
        <button class="button" onclick="window.open('classes', '_self')"><span>ALL GAMES</span><img
                style="padding-left:0.5vw" width="16vw"
                src="https://www.cooperlighting.com/s/vividtune/png/right-arrow.png"></button>
    </div>

    <div class="adsrc" style="text-align:center; margin-top:50px;">
        <!-- Horizontal Ad -->
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
            data-ad-slot="5628466741" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>

    <div id="extraCategories">
        <div id="extraCategory" onclick="window.open('classes.php?category=stickman', '_self')">
            <div style="background-image: url(assets/images/extracats/henrystickmin.png);"></div>
            <p>Henry Stickmin Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('classes.php?category=fnaf', '_self')">
            <div style="background-image: url(assets/images/extracats/fnaf.png);"></div>
            <p>Five Nights at Freddy's Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('classes.php?category=fnf', '_self')">
            <div style="background-image: url(assets/images/extracats/fnf.jpg);"></div>
            <p>Friday Night Funkin' Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('classes.php?category=vex', '_self')">
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
        <div id="extraCategory" onclick="window.open('classes.php?category=running', '_self')">
            <div style="background-image: url(assets/images/extracats/running.jpg);"></div>
            <p>Running Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('classes.php?category=puzzle', '_self')">
            <div style="background-image: url(assets/images/extracats/puzzle.jpg);"></div>
            <p>Puzzle Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('classes.php?category=arcade', '_self')">
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

    <div id="about">
        <br><br>
        <h1><span>About</span> Totally Science</h1>
        <p><span>Totally Science</span> is a website that offers unblocked games and proxy apps for school use. Totally
            Science was
            founded in January 2022 with the aim of giving users the best experience of <span>unblocked games and
                unblocked
                proxy apps at school</span>. At Totally Science, you can play games with your friends without being
            blocked or
            having any other problems. You can play games all the time on your computer or phone device at school or
            work.
            You also do not need to install any additional software or know any plugins. People can play many other
            games,
            such as racing, shooting, mind games, sports, or slope games...</p>
        <br>
        <h1>Totally Science <span>Apps</span></h1>
        <p>Currently, Totally Science offers web proxy services for many popular applications, including <span>YouTube,
                Discord,
                Tiktok, Google, Twitch, Spotify, Mathway, Netflix, Github, and others.</span></p>
        <br>
        <h1>Totally Science <span>Games</span></h1>
        <p>There are many outstanding unblocked games nowadays, and Totally Science currently offers more than 100 of
            the most popular games covering many genres like racing, shooting, intelligence, and many more. The games
            Totally Science offers are developed on HTML5, Unity, and many other platforms. Among them are some
            outstanding
            games, such as:</span></p>
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
        <br>
        <h1>Totally Science Official <span>Domains</span></h1>
        <ul>
            <li>definitelyscience.com</li>
            <li>literallyhistory.org</li>
            <li>literallymath.com</li>
            <li>mathplace.co</li>
            <li>mathstudyplace.com</li>
            <li>sidthescientist.com</li>
            <li>spanishstudy.co</li>
            <li>studyscienceteacher.com</li>
            <li>totallyalgebra.com</li>
            <li>totallysocialstudies.com</li>
            <li>studymathteacher.com</li>
            <li>historicallyscience.com</li>
            <li>actuallyphysics.com</li>
            <li>actuallyhistory.com</li>
            <li>funnymath.org</li>
            <li>crazyalgebra.com</li>
        </ul>
        <br><br>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/index.js?v63"></script>
</body>

</html>