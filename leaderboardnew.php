<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/leaderboardnew.css'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="searchDiv">
        <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search">
    </div>

    <div id="highscores">
        

    </div>

    <?php include "assets/includes/footer.php" ?>



    <script src="assets/scripts/leaderboard.js"></script>
    <script src="assets/scripts/main.js"></script>
</body>

</html>