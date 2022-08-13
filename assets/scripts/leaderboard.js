document.getElementById("leaderboardnav").classList.add("selected");

let games;
let highscores;
const scoresDiv = document.getElementById('highscores');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameName = urlParams.get('class');

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
                    <div class="highscore" name="${game}" id="highscore" onclick="location.href = 'game.php?class=${game}'">
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
                            <img style="background-image: url('${games[game].image}')" src="">
                        </div>
                    </div>
                `;
            scoresDiv.innerHTML += highscoreDiv;
        }
        console.log(gameName);


        if (gameName) {
            let highscored = false;
            for (score in highscores) {
                const game = highscores[score][0];
                if (game == gameName) {
                    highscored = true;
                }
            }
            if (highscored) {
                document.getElementsByName(`${gameName}`)[0].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
            } else {
                document.getElementById("nohighscore").style.display = '';
                document.getElementById("nohighscore").innerText = `No current highscore set for ${gameName}`;
            }

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

    for (highscore in highscoreDivs) {
        if (highscoreDivs[highscore].getAttribute('name').toUpperCase().includes(input)) {
            highscoreDivs[highscore].setAttribute('style', 'display:')

        } else {
            highscoreDivs[highscore].setAttribute('style', 'display:none')
        }
    }
});