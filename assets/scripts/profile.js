let games;
let highscores;
const scoresDiv = document.getElementById('highscorecontainer');

document.addEventListener('DOMContentLoaded', async () => {
    fetch(`assets/games.json`)
        .then((response) => response.json())
        .then((retrievedGames) => {
            games = retrievedGames;
        });

    let response = await fetcher(`${activeServer}/auth/check`);
    let result = await response.text();

    if (result == 'A token is required for authentication' || result == 'Invalid Token') {
        location.href = 'signup.php';
    }

    let token = JSON.parse(result);

    document.getElementById('usernameSpan').innerText = token.username;
    document.getElementById('emailSpan').innerText = token.email;

    // load user's highscores
    let highscoreRes = await fetcher(`${activeServer}/profile/highscores/get`);

    if (highscoreRes.status == 200) {
        highscores = await highscoreRes.json();

        for (let score = 0; score < highscores.length; score += 1) {
            if (!highscores[score]) continue;

            const highscoreDiv = `
                <div class="highscore">
                    <img src="../assets/images/icons/trophy.png">
                    <h1>${highscores[score].game}</h1>
                    <p>${numFormatter(highscores[score].score)}</p>
                </div>
            `;

            scoresDiv.innerHTML += highscoreDiv;
        }
    } else if (highscoreRes.status == 400) {
        document.getElementById('noscores').setAttribute('style', 'display: ');
    }

    const gamesDiv = document.getElementById('games');
    let arrowContainer =
        '<div class="arrowsCon"><div class="arrowCon arrowLeftCon" id="arrowLeft" style="visibility: hidden;"><img class="arrow" src="/assets/images/left-arrow.png"></div><div class="arrowCon arrowRightCon" id="arrowRight" ><img class="arrow" src="/assets/images/right-arrow.png"></div></div>';

    //load liked and recent games
    let recentRow = document.createElement('div');
    let likedRow = document.createElement('div');
    recentRow.classList.add('horizontalCon');
    likedRow.classList.add('horizontalCon');
    let recentGamesContainer = document.createElement('div');
    let likedGamesContainer = document.createElement('div');
    recentGamesContainer.classList.add('gamesCon');
    likedGamesContainer.classList.add('gamesCon');
    //add the arrows to the horizontal Con
    recentRow.innerHTML += arrowContainer;
    likedRow.innerHTML += arrowContainer;

    let recentGamesres = await fetcher(`${activeServer}/profile/recent/get`);
    let text = await recentGamesres.text();

    // split from string into array and slice the first element out (first element is an empty space)
    let recentGames = text.split(';').slice(1);

    for (let i = 0; i < recentGames.length; i++) {
        const gameName = recentGames[i];
        if (gameName != null) {
            recentGamesContainer.innerHTML += createGameButton(gameName);
        }
    }

    let userLikedRes = await fetcher(`${activeServer}/profile/liked/get`);
    let likedgames = await userLikedRes.json();

    if (likedgames.length > 0) {
        for (like in likedgames) {
            if (likedgames[like] != null) {
                likedGamesContainer.innerHTML += createGameButton(likedgames[like]);
            }
        }
    }

    recentRow.appendChild(recentGamesContainer);
    likedRow.appendChild(likedGamesContainer);
    gamesDiv.prepend(likedRow);
    gamesDiv.innerHTML = `<h1>Liked Games</h1>` + gamesDiv.innerHTML;
    gamesDiv.prepend(recentRow);
    gamesDiv.innerHTML = `<h1>Recent Games</h1>` + gamesDiv.innerHTML;

    addArrowListeners();
});

function createGameButton(game, pin) {
    const data = games[game];
    if (data == null) return '';

    let classlist = data.tags.join(' ');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const gameDate = new Date(data.date_added);

    if (gameDate > weekAgo) classlist += ' new';

    let gameBtn = '';

    gameBtn = `
        <div name="${game}" id="gameDiv" onclick="location.href = 'class.php?class=${game.replaceAll(' ', '-')}'" class="${classlist}">
            <div class="imageCon">
                <img src="${data.image}" alt="Totally Science ${game}" title="Totally Science ${game}"/>
            </div>
            <h1 class="innerGameDiv">${game}</h1>
        </div>
        `;

    return gameBtn;
}

function addArrowListeners() {
    for (let i = 0; i < document.getElementsByClassName('arrowLeftCon').length; i++) {
        document.getElementsByClassName('arrowLeftCon')[i].addEventListener('click', function (e) {
            const parentElement = e.target.parentNode.parentNode;
            const gamesCon = parentElement.querySelectorAll('.gamesCon')[0];

            // gamesCon.scrollLeft -= 1100;
            gamesCon.scrollLeft -= Math.min(gamesCon.scrollLeft, 1100);
        });
    }

    for (let i = 0; i < document.getElementsByClassName('arrowRightCon').length; i++) {
        document.getElementsByClassName('arrowRightCon')[i].addEventListener('click', function (e) {
            const parentElement = e.target.parentNode.parentNode;
            const gamesCon = parentElement.querySelectorAll('.gamesCon')[0];

            const leftArrow = e.target.parentNode.parentNode.querySelectorAll('.arrowCon')[0];
            leftArrow.style += 'visibility: visible';

            // gamesCon.scrollLeft += 1100;
            const remainingSpace = gamesCon.scrollWidth - gamesCon.clientWidth - gamesCon.scrollLeft;
            gamesCon.scrollLeft += Math.min(remainingSpace, 1100);
        });
    }
}
