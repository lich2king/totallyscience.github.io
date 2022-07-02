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
            const game = highscores[score][0];
            const name = highscores[score][1];
            const gameScore = highscores[score][2];
            const highscoreDiv = `
                <div id="highscore" onclick="location.href = 'class?class=${game}'">
                    <div class="text">
                        <h1>
                            ${game}
                        </h1>
                        <h2>
                            ${gameScore}
                        </h2>
                        <p>
                            ${name}
                        </p>
                    </div>
                    <div class="image">
                        <img src="http://localhost:3000/assets/game_images/2048.png">
                    </div>
                </div>
            `;
            scoresDiv.innerHTML += highscoreDiv;
        }
    });
    </script>
    <script src="assets/scripts/main.js"></script>
</body>

</html>