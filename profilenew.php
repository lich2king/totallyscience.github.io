<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/profile.css?v9'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>



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
            <div class="container" id="recentContainer">
            </div>
            <div id="arrow" onclick="window.open('gamesnew.php?category=recent', '_self')">
                <input type="image" src="assets/images/right-arrow.png" />
            </div>
        </div>
    </div>


    <div id="recents">
        <h1 class="label">Liked Games</h1>
        <div class="biccontainer">
            <div class="container" id="likedcontainer">
                
            </div>
            <div id="arrow" onclick="window.open('gamesnew.php?category=liked', '_self')">
                <input type="image" src="assets/images/right-arrow.png" />
            </div>
        </div>
        
    </div>

    <div id="highscores">
        <h1 class="label">Your Highscores</h1>
        <div class="highcontainer" id="highscorecontainer">
            <p style="display: none" id="noscores">You do not hold any highscores currently.</p>
        </div>
    </div>

    <div style="padding-bottom: 10vh;"></div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/profile.js?v32"></script>
    <script>
    
    </script>
</body>

</html>