<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/leaderboardnew.css?v4'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="top"></div>

    <div id="searchDiv">
        <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search by game">
    </div>

    <h1 id="nohighscore" style="display:none"></h1>

    <div style="text-align:center; margin-top:100px">
        <button class="button" onclick="window.open('#', '_self')"><span>Submit Highscore</span> <img
                style="padding-left:0.5vw" width="16vw"
                src="https://www.cooperlighting.com/s/vividtune/png/right-arrow.png"></button>
    </div>

    

    <div id="highscores">
    </div>

    <?php include "assets/includes/footer.php" ?>



    <script src="assets/scripts/leaderboard.js?v18"></script>
    <script src="assets/scripts/main.js"></script>
</body>

</html>