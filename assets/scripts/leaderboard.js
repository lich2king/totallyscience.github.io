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


    const highscoreDivs = document.getElementsByClassName("highscore");
    console.log(highscoreDivs);

    for (highscore in highscoreDivs) {
        console.log(highscoreDivs[highscore]);
        /*if (highscore.name.toUpperCase().includes(input)) {
            console.log(highscore);

        } else {
            console.log("NO");
            console.log(highscore);
        }*/
    }
});