document.getElementById("leaderboardnav").classList.add("selected");

let games;
fetch(`/assets/php/viewhighscores.php`).then((response) => response.text()).then((res) => {
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
                    <div name="${game}" id="highscore" onclick="location.href = 'class?class=${game}'">
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



//search bar

let highscoresDiv = document.getElementById("highscores");

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keyup', () => {
    document.getElementById('top').scrollIntoView({
        block: "start",
        inline: "nearest"
    });

    const input = searchBar.value.toUpperCase();


    highscoresDiv.innerHTML = '';

    let numGames = 0;
    Object.keys(games).forEach((game) => {
        if (game.toUpperCase().includes(input)) {
            if (games[game].tags.includes(selectedTopic) || selectedTopic == 'all') {
                const data = games[game];

                const highscoreDiv = `
                    <div name="${game}" id="highscore" onclick="location.href = 'class?class=${game}'">
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
                numGames += 1
            }
        }
    });
})