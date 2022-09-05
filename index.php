<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>
    <link rel='stylesheet' href='assets/styles/index.css?v8'>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="startcontent">
        <div id="feature">
            <div style="background-image: url(./assets/images/basketballstarsfeature.jpeg); display:none;" class="imageTest fade">
                <div class="arrows">
                    <div style="padding: 10px;display: flex; flex:1; align-content:flex-start;" class="arrw" onclick="plusSlides(-1)">
                        <img src="/assets/images/left-arrow.png">
                    </div>
                    <h1 id="gametext" style="min-width: 100%; display: flex; flex:1; align-content:center; jusitfy-content:center; text-align:center;" class="stroke-text smooth-16">BASKETBALL STARS</h1>
                    <div style="padding: 10px; display: flex; flex:1; align-content:flex-end; justify-content: flex-end;" class="arrw" onclick="plusSlides(1)">
                        <img src="/assets/images/right-arrow.png">
                    </div>
                </div>
                <button onclick="window.open('class.php?class=Basketball%20Stars', '_self')" class="featureButton button">Play Now</button>
            </div>
            <div style="background-image: url(./assets/images/featuredimg/smashkarts.jpg);" class="imageTest fade">
                <div class="arrows">
                    <div style="padding: 10px;display: flex; flex:1; align-content:flex-start;" class="arrw" onclick="plusSlides(-1)">
                        <img src="/assets/images/left-arrow.png">
                    </div>
                    <h1 id="gametext" style="min-width: 100%; display: flex; flex:1; align-content:center; jusitfy-content:center; text-align:center;" class="stroke-text smooth-16">SMASH KARTS</h1>
                    <div style="padding: 10px; display: flex; flex:1; align-content:flex-end; justify-content: flex-end;" class="arrw" onclick="plusSlides(1)">
                        <img src="/assets/images/right-arrow.png">
                    </div>
                </div>
                <button onclick="window.open('class.php?class=smash%20karts', '_self')" class="featureButton button">Play Now</button>
            </div>
            <div style="background-image: url(./assets/images/featuredimg/learn2fly.jpg); display:none;" class="imageTest fade">
                <div class="arrows">
                    <div style="padding: 10px;display: flex; flex:1; align-content:flex-start;" class="arrw" onclick="plusSlides(-1)">
                        <img src="/assets/images/left-arrow.png">
                    </div>
                    <h1 id="gametext" style="min-width: 100%; display: flex; flex:1; align-content:center; jusitfy-content:center; text-align:center;" class="stroke-text smooth-16">LEARN 2 FLY</h1>
                    <div style="padding: 10px; display: flex; flex:1; align-content:flex-end; justify-content: flex-end;" class="arrw" onclick="plusSlides(1)">
                        <img src="/assets/images/right-arrow.png">
                    </div>
                </div>
                <button onclick="window.open('class.php?class=learn%202%20fly', '_self')" class="featureButton button">Play Now</button>
            </div>
        </div>

        <div id="scisuggests"></div>
    </div>


    <div id="info">
        <p><span style="max-width:40px;">&#129323;</span> To quickly return to Google Classroom, press <img style="max-width:40px;" src="https://img.icons8.com/color/480/tilde-key.png"></p>
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
                <button name="gamepass" onclick="" class="unselectedCategory categoryButton">GamePass</button>
            </div>
        </div>


        <div id="games">
        </div>

        <div id="noSearch" style="display:none">
            <p>You search terms did not match any games...</p>
        </div>
    </div>

    <div style="text-align:center">
        <button class="button" onclick="window.open('classes.php', '_self')"><span>ALL GAMES</span><img style="padding-left:0.5vw" width="16vw" src="https://www.cooperlighting.com/s/vividtune/png/right-arrow.png"></button>
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

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/index.js?v61"></script>
</body>

</html>