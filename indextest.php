<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>
    <link rel='stylesheet' href='assets/styles/indextest.css?v7'>
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
                <button onclick="window.open('game.php?class=Retro%20Bowl', '_self')" class="featureButton button">Play Now</button>
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
                <button onclick="window.open('game.php?class=The%20Impossible%20Quiz', '_self')" class="featureButton button">Play Now</button>
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
                <button onclick="window.open('game.php?class=Basketball%20Stars', '_self')" class="featureButton button">Play Now</button>
            </div>
        </div>


        <div id="scisuggests">

        </div>
    </div>

    <div id="info">
        <p><span style="max-width:40px;">&#129323;</span> To quickly return to Google Classroom, press <img
                style="max-width:40px;" src="https://img.icons8.com/color/480/tilde-key.png"></p>
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
            <p>
                You search terms did not match any games...
                <br>
                Would you like to request it?
            </p>

            <button class="button">Request Game</button>
        </div>
    </div>

    <div style="text-align:center">
        <button class="button" onclick="window.open('gamesnew.php', '_self')"><span>ALL GAMES</span><img style="padding-left:0.5vw" width="16vw" src="https://www.cooperlighting.com/s/vividtune/png/right-arrow.png"></button>
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
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=multiplayer', '_self')">
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/444/444183.png" />
            </div>
            <p>Multiplayer Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=running', '_self')">
            <div>
                <img src="https://files.gamezhero.com/game/44d/e0a/44de0ad44e6a08ac/images/240/angrygranrunbrazil.jpg" />
            </div>
            <p>Running Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=puzzle', '_self')">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5aL_3E5VL51rb9AcbFYYolnT_5Q6V-aura8bcQ0q9winWetUD2pFPpVxEh1_LqBpm-E&usqp=CAU" />
            </div>
            <p>Puzzle Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=arcade', '_self')">
            <div>
                <img src="https://media.istockphoto.com/vectors/retro-80s-video-game-joystick-controller-vector-id165555994?k=20&m=165555994&s=170667a&w=0&h=BSWOQbVEcsYeZKKqzSNPUEOtBeLp0heVNqknBaJby9g=" />
            </div>
            <p>Arcade Games</p>
        </div>
        <div id="extraCategory" onclick="window.open('gamesnew.php?category=clicker', '_self')">
            <div>
                <img
                    src="https://clicker-games.com/images/home.png" />
            </div>
            <p>Clicker Games</p>
        </div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/indexnew.js?v20"></script>
</body>

</html>