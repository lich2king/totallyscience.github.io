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



    <script>
    console.log("Here");
    window.open('leaderboardnew.php');
    fetch(`/assets/php/viewhighscores.php`).then((response) => response.text()).then((res) => {
        console.log(res);
        res = JSON.parse(res);

        const highscores = res;
        const scoresDiv = document.getElementById('highscores');

        for (score in highscores) {
            const highscoreDiv = `
            <div id="highscore">
            <div class="text">
                <h1>
                    ${highscores[score][0]}
                </h1>
                <h2>
                    ${highscores[score][2]}
                </h2>
                <p>
                    ${highscores[score][1]}
                </p>
            </div>
            <div class="image">
                <img src="http://localhost:3000/assets/game_images/2048.png">
            </div>
        </div>
        `;

            scoresDiv.appendChild(highscoreDiv);
        }
    });
    </script>
    <script src="assets/scripts/main.js"></script>
</body>

</html>