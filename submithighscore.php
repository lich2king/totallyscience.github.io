<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/submithighscore.css'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="gameInfo">
        <p>What game is it for?</p>
        <select name="gamesSelect" id="gamesSelect">
        </select>

        <p>What is your score?</p>
        <input type="text" id="scoreText" placeholder="100">

        <p>Submit a screenshot of your score (Show full screen including top website bar otherwise INVALID)</p>
        <input type="file" id="fileUpload">
        <br><br>
        <button class="button" id="save-button" onclick="SubmitHighscore()">Submit</button>
        <p style="text-align: center; color: red;" id="errorText"></p>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/submithighscore.js?v2"></script>
</body>

</html>