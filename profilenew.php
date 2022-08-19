<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/profile.css?v5'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <h1 id="nameheader">
        Username
    </h1>

    <div id="accountoptions">
        <div class="accountoption">
            <p>Username: <span class="span" id="usernameSpan">username</span></p>
        </div>
        <div class="accountoption">
            <p>Email: <span class="span" id="emailSpan">help@totallyscience.co</span></p>
        </div>
        <div class="accountoption">
            <p>Password: <span class="span">*********</span></p>
            <input onclick="location.href = 'changepassword.php'" type="image" src="assets/images/icons/edit.png">
        </div>
        <div class="accountoption">
            <p>Game Pass: <span class="span">FREE</span></p>
            <input type="image" src="assets/images/icons/edit.png">
        </div>
        <div class="accountoption">
            <a class="logout" onclick="logout();">Logout</a>
        </div>
    </div>


    <div id="recents">
        <h1 class="label">Recent Games</h1>
        <div class="biccontainer">
            <div class="container">
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
            </div>
            <div id="arrow" onclick="window.open('gamesnew.php?category=recent', '_self')">
                <input type="image" src="assets/images/right-arrow.png" />
            </div>
        </div>
    </div>


    <div id="recents">
        <h1 class="label">Liked Games</h1>
        <div class="biccontainer">
            <div class="container">
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="Retro Bowl"
                    style="background-image: url(&quot;./assets/game_images/retrobowl.jpg&quot;);" id="gameDiv"
                    onclick="location.href = 'game.php?class=Retro Bowl'" class="featured sport mobile all">
                    <div class="innerGameDiv">Retro Bowl</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
                <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="FNAF"
                    style="background-image: url('https://assets.nintendo.com/image/upload/c_scale,f_auto,q_auto,w_1280/v1/Legacy%20Videos/posters/N2ZTFzaTE6foFLgrLK4DTEhIejf4DuTI')"
                    id="gameDiv" onclick="location.href = 'game.php?class=FNAF'">
                    <div class="innerGameDiv">FNAF</div>
                </div>
            </div>
            <div id="arrow" onclick="window.open('gamesnew.php?category=recent', '_self')">
                <input type="image" src="assets/images/right-arrow.png" />
            </div>
        </div>
        
    </div>

    <div id="highscores">
        <h1 class="label">Your Highscores</h1>
        <div class="highcontainer" id="highscorecontainer">
            <p style="display: none" id="noscores">You do not hold any highscores currently.</p>
            <div class="highscore">
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/70434/trophy-clipart-xl.png">
                <h1>Cookie Clicker</h1>
                <p>1,000,576</p>
            </div>
            <div class="highscore">
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/70434/trophy-clipart-xl.png">
                <h1>Cookie Clicker</h1>
                <p>1,000,576</p>
            </div>
        </div>
    </div>

    <div style="padding-bottom: 10vh;"></div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/profile.js?v18"></script>
    <script>
    
    </script>
</body>

</html>