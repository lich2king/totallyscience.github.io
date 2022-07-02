document.getElementById("leaderboardnav").classList.add("selected");

window.open('leaderboardnew.php');
fetch(`/assets/php/viewhighscores.php`).then((response) => response.text()).then((res) => {
    let games;
    fetch(`assets/games.json`).then((response) => response.json()).then((retrievedGames) => {
        games = retrievedGames;

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
                            <img src="${games[game].image}">
                        </div>
                    </div>
                `;
            scoresDiv.innerHTML += highscoreDiv;
        }

    });
});