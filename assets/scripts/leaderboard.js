document.getElementById("leaderboardnav").classList.add("selected");

let games;
let highscores;
const scoresDiv = document.getElementById('highscores');

fetch(`/assets/php/viewhighscores.php`).then((response) => response.text()).then((res) => {
    fetch(`assets/games.json`).then((response) => response.json()).then((retrievedGames) => {
        games = retrievedGames;

        res = JSON.parse(res);

        highscores = res;

        for (score in highscores) {
            const game = highscores[score][0];
            const name = highscores[score][1];
            const gameScore = highscores[score][2];
            const highscoreDiv = `
                    <div class="highscore" name="${game}" id="highscore" onclick="location.href = 'class?class=${game}'">
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
        console.log(highscores);
    });
});




//search bar


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keyup', () => {
    document.getElementById('top').scrollIntoView({
        block: "start",
        inline: "nearest"
    });

    const input = searchBar.value.toUpperCase();


    scoresDiv.innerHTML = '';

    let numGames = 0;

    const highscoreDivs = document.getElementsByClassName("highscore");
    console.log(highscoreDivs)
    for (highscore in highscores) {
        if (highscore.toUpperCase().includes(input)) {
            const game = highscores[highscore][0];
            const name = highscores[highscore][1];
            const gameScore = highscores[highscore][2];
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