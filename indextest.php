<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>
    <link rel='stylesheet' href='assets/styles/indextest.css?v5'>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="startcontent">
        <div id="feature">
            <div style="background-image: url(./assets/images/retrobowlfeature.png);" class="imageTest fade">
                <div class="arrows">
                    <div style="padding: 10px;display: flex; flex:1; align-content:flex-start;" class="arrw" onclick="plusSlides(-1)">
                        <img src="/assets/images/left-arrow.png">
                    </div>
                    <h1 id="gametext" style="min-width: 100%; display: flex; flex:1; align-content:center; jusitfy-content:center; text-align:center;" class="stroke-text smooth-16">RETRO BOWL</h1>
                    <div style="padding: 10px; display: flex; flex:1; align-content:flex-end; justify-content: flex-end;" class="arrw"  onclick="plusSlides(1)">
                        <img src="/assets/images/right-arrow.png">
                    </div>
                </div>
                <button onclick="window.open('game.php?class=Retro%20Bowl', '_self')" class="featureButton">Play Now</button>
            </div>
            <div style="background-image: url(./assets/images/impossiblefeaturedimage.png); display:none;" class="imageTest fade">
                <div class="arrows">
                    <div style="padding: 10px;display: flex; flex:1; align-content:flex-start;" class="arrw" onclick="plusSlides(-1)">
                        <img src="/assets/images/left-arrow.png">
                    </div>
                    <h1 id="gametext" style="min-width: 100%; display: flex; flex:1; align-content:center; jusitfy-content:center; text-align:center;" class="stroke-text smooth-16">IMPOSSIBLE QUIZ</h1>
                    <div style="padding: 10px; display: flex; flex:1; align-content:flex-end; justify-content: flex-end;" class="arrw"  onclick="plusSlides(1)">
                        <img src="/assets/images/right-arrow.png">
                    </div>
                </div>
                <button onclick="window.open('game.php?class=The%20Impossible%20Quiz', '_self')" class="featureButton">Play Now</button>
            </div>
            <div style="background-image: url(./assets/images/basketballstarsfeature.jpeg); display:none;" class="imageTest fade">
                <div class="arrows">
                    <div style="padding: 10px;display: flex; flex:1; align-content:flex-start;" class="arrw" onclick="plusSlides(-1)">
                        <img src="/assets/images/left-arrow.png">
                    </div>
                    <h1 id="gametext" style="min-width: 100%; display: flex; flex:1; align-content:center; jusitfy-content:center; text-align:center;" class="stroke-text smooth-16">BASKETBALL STARS</h1>
                    <div style="padding: 10px; display: flex; flex:1; align-content:flex-end; justify-content: flex-end;" class="arrw"  onclick="plusSlides(1)">
                        <img src="/assets/images/right-arrow.png">
                    </div>
                </div>
                <button onclick="window.open('game.php?class=Basketball%20Stars', '_self')" class="featureButton">Play Now</button>
            </div>
        </div>


        <div id="scisuggests">

        </div>
    </div>

    <div id="info">
        <p><span style="max-width:40px;">&#129323;</span> To quickly return to Google Classroom, press <img
                style="max-width:40px;" src="https://img.icons8.com/color/480/tilde-key.png"></p>
        <p>Click <span style="text-decoration: underline; cursor:pointer;"><b>here</b></span> to view alternate links</p>
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
                <button name="premium" onclick="" class="unselectedCategory categoryButton">Premium</button>
            </div>
        </div>


        <div id="games">
        </div>
    </div>

    <div style="text-align:center">
        <button onclick="window.open('gamesnew.php', '_self')"><span>ALL GAMES</span><img style="padding-left:0.5vw" width="16vw" src="https://www.cooperlighting.com/s/vividtune/png/right-arrow.png"></button>
    </div>

    <div id="extraCategories">
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=stickmin', '_self')">
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjDjKTvljf2ZWNwwFDGJbRwCvmbWL9xKghA&usqp=CAU" />
            </div>
            <p>Henry Stickmin Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=fnaf', '_self')">
            <div>
                <img
                    src="https://play-lh.googleusercontent.com/myJ2kwywsCRglKkZuHBq6Aku9PX7HB75v-8KbnTK9JOPU6z0hpD9xtvjiTGqrn-e4eI" />
            </div>
            <p>Five Nights at Freddy's Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=fnf', '_self')">
            <div>
                <img src="https://i1.sndcdn.com/avatars-fKIWZo5CKgieiX3m-HeK5MA-t240x240.jpg" />
            </div>
            <p>Friday Night Funkin' Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=vex', '_self')">
            <div>
                <img src="https://files.gamezhero.com/game/de4/d2c/de4d2c1e1953443a/images/240/vex.jpg" />
            </div>
            <p>Vex Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=car', '_self')">
            <div>
                <img
                    src="https://lh3.googleusercontent.com/47RcwWXXnAimVJKSGsj-DKfIQKCwocry-TNO-m5G13eXEJM6NDoG6Y6uuhvzR7qehg" />
            </div>
            <p>Car Games</p>
        </div>
        <div id="extraCategory">
            <div>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1251460/capsule_616x353.jpg?t=1607094043" />
            </div>
            <p>Game</p>
        </div>
        <div id="extraCategory">
            <div>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1251460/capsule_616x353.jpg?t=1607094043" />
            </div>
            <p>Game</p>
        </div>
        <div id="extraCategory">
            <div>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1251460/capsule_616x353.jpg?t=1607094043" />
            </div>
            <p>Game</p>
        </div>
        <div id="extraCategory">
            <div>
                <img src="https://cdn.akamai.steamstatic.com/steam/apps/1251460/capsule_616x353.jpg?t=1607094043" />
            </div>
            <p>Game</p>
        </div>
        <div id="extraCategory">
            <div>
                <img
                    src="https://www.freepnglogos.com/uploads/star-png/star-vector-png-transparent-image-pngpix-21.png" />
            </div>
            <p>Game</p>
        </div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/indexnew.js?v9"></script>
</body>

</html>