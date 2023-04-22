<!DOCTYPE html>
<html lang="en">

<head>
    <title>Leaderboard - Totally Science - Free Online Unblocked Games</title>
    <?php include "assets/includes/head.php" ?>


    <style>
    #searchDiv {
        margin-top: 80px;
        text-align: center;
        height: 50px;
        position: sticky;
        z-index: 12;
        padding-top: 10px;
        margin-bottom: 10px;
        background-color: var(--background-color);
        top: 60px;
    }

    #submitB {
        position: relative;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 50px;
        z-index: 5;
    }

    input[type='text'] {
        width: 20vw;
        height: 5vh;
        box-sizing: border-box;
        border: transparent;
        border-radius: 17px;
        font-size: 16px;
        background-color: var(--light-color);
        outline: none;
        background-image: url('https://img.icons8.com/material-outlined/24/000000/search--v1.png');
        background-size: 1.25vw;
        background-position: 10px calc(50%);
        background-repeat: no-repeat;
        padding: 1vh 1vw 1vh 2.2vw;
        transition: width 0.4s ease-in-out;
        margin-bottom: 3%;
        color: var(--dark-color);
    }

    #highscores {
        margin-top: 80px;
        width: 100vw;
        margin-bottom: 20vh;
    }

    #highscore {
        position: relative;
        z-index: 3;
        text-align: center;
        background-color: var(--accent-color);
        margin: auto;
        border-radius: 30px;
        width: 35vw;
        height: 15vh;
        margin-bottom: 5vh;
        transition: 0.1s;
    }

    #highscore:hover {
        cursor: pointer;
        transform: scale(1.025);
    }

    #highscore .text {
        width: 50%;
        height: 100%;
        float: left;
        padding: 1vh 0;
    }

    #highscore h1,
    p,
    h2 {
        color: var(--light-color);
        font-family: 'Rubik';
        margin: 1vh;
    }

    #highscore p {
        font-size: 1vw;
    }

    #highscore h1 {
        font-size: 1.5vw;
    }

    #highbcore h2 {
        text-shadow: var(--dark-color) 1px 0 10px;
    }

    #highscore .image {
        width: 50%;
        height: 100%;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #highscore .image div {
        margin-left: 2vw;
        border-radius: 30px;
        height: 12vh;
        width: 12vw;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    #nohighscore {
        margin-top: 60px;
        text-align: center;
        color: var(--light-color);
        font-family: 'Rubik';
        font-size: 1.5vw;
    }

    #verticalAds {
        position: fixed;
        z-index: 2;
        top: 0px;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex: 1;
        align-items: center;
        justify-items: center;
        margin-top: 50px;
    }

    #verticalAds .contain-left {
        display: flex;
        flex: 1;
        align-content: flex-start;
        justify-content: flex-start;
    }

    #verticalAds .contain-right {
        display: flex;
        flex: 1;
        align-content: flex-end;
        justify-content: flex-end;
    }

    .left {
        position: relative;
        z-index: 11;
        margin-left: 15%;
        width: 15vw;
        height: 80vh;
    }

    .right {
        position: relative;
        z-index: 11;
        margin-right: 15%;
        width: 15vw;
        height: 80vh;
    }
    </style>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="top"></div>

    <div id="searchDiv">
        <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search by game">
    </div>

    <h1 id="nohighscore" style="display:none"></h1>

    <div id="highscores">
        <div id="submitB">
            <button class="button" onclick="window.open('submithighscore.php', '_self')"><span>Submit Highscore</span>
                <img style="padding-left:0.5vw" width="16vw"
                    src="https://www.cooperlighting.com/s/vividtune/png/right-arrow.png">
            </button>
        </div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script>
    window.addEventListener('load', async () => {
        const searchBar = document.getElementById('searchBar');
        const scoresDiv = document.getElementById('highscores');
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const gameName = urlParams.get('class');

        // update link in navbar
        document.getElementById("leaderboardnav").classList.add("selected");

        // fetch list of highscores
        let highscoresRes = await fetcher(`${activeServer}/profile/highscores/view`);
        let text = await highscoresRes.text();
        let highscores = JSON.parse(text);

        let gamesRes = await fetch(`assets/games.json`);
        let games = await gamesRes.json();

        for (score in highscores) {
            const game = highscores[score].game;
            const name = highscores[score].name;
            const gameScore = highscores[score].score;
            const highscoreDiv = `
                    <div class="highscore" name="${game}" id="highscore" onclick="location.href = 'class.php?class=${game}'">
                        <div class="text">
                            <h1>${game}</h1>

                            <h2>${gameScore}</h2>

                            <p>${name}</p>
                        </div>

                        <div class="image">
                            <div style="background-image: url('${games[game].image}');"></div>
                        </div>
                    </div>
                `;

            scoresDiv.innerHTML += highscoreDiv;
        }

        if (gameName) {
            let highscored = false;

            for (score in highscores) {
                const game = highscores[score].game;

                if (game == gameName) highscored = true;
            }
            if (highscored) {
                document.getElementsByName(`${gameName}`)[0].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
            } else {
                document.getElementById("nohighscore").style.display = '';
                document.getElementById("nohighscore").innerText =
                    `No current highscore set for ${gameName}`;
            }
        }

        searchBar.addEventListener('keyup', () => {
            console.log("seacjcjce");
            document.getElementById('top').scrollIntoView({
                block: "start",
                inline: "nearest"
            });

            const input = searchBar.value.toUpperCase();
            const highscoreDivs = document.getElementsByClassName("highscore");

            for (highscore in highscoreDivs) {
                if (highscoreDivs[highscore].getAttribute('name').toUpperCase().includes(input))
                    highscoreDivs[highscore].setAttribute('style', 'display:');
                else highscoreDivs[highscore].setAttribute('style', 'display:none');
            }
        });
    });
    </script>
</body>

</html>