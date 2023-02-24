let username;
let games;
let highscores;
const scoresDiv = document.getElementById('highscorecontainer');



document.addEventListener('DOMContentLoaded', async() => {
    fetch(`assets/games.json`).then((response) => response.json()).then((retrievedGames) => {
        games = retrievedGames;
    });

    res = JSON.parse(authToken);

    if (res != null) {
        const loggedIn = res['isLoggedIn'];
        username = res['username'];
        uid = res['id'];

        if (loggedIn != 'true') location.href = 'signup.php';

        document.getElementById('usernameSpan').innerText = username;
        document.getElementById('emailSpan').innerText = res['email'];
    } else location.href = 'signup.php';

    //Load highscores
    fetcher(`assets/php/personalhighscores.php`).then((response) => response.text()).then((res) => {
        if (res != '[]') {
            res = JSON.parse(res);
            highscores = res;

            for (score in highscores) {
                const game = highscores[score][0];
                const gameScore = highscores[score][2];
                const highscoreDiv = `
                    <div class="highscore">
                        <img src="../assets/images/icons/trophy.png">
                        <h1>${game}</h1>
                        <p>${numFormatter(gameScore)}</p>
                    </div>
                `;

                scoresDiv.innerHTML += highscoreDiv;
            }
        } else document.getElementById('noscores').setAttribute('style', 'display: ');
    });

    const gamesDiv = document.getElementById("games");
    let arrowContainer = '<div class="arrowsCon"><div class="arrowCon arrowLeftCon" id="arrowLeft" style="visibility: hidden;"><img class="arrow" src="/assets/images/left-arrow.png"></div><div class="arrowCon arrowRightCon" id="arrowRight" ><img class="arrow" src="/assets/images/right-arrow.png"></div></div>'


    //load liked and recent games
    let recentRow = document.createElement("div");
    let likedRow = document.createElement("div");
    recentRow.classList.add("horizontalCon");
    likedRow.classList.add("horizontalCon");
    let recentGamesContainer = document.createElement("div");
    let likedGamesContainer = document.createElement("div");
    recentGamesContainer.classList.add("gamesCon");
    likedGamesContainer.classList.add("gamesCon");
    //add the arrows to the horizontal Con
    recentRow.innerHTML += arrowContainer;
    likedRow.innerHTML += arrowContainer;


    await fetcher(`/assets/php/recent_classes/recentclasses.php`)
        .then((response) => response.text())
        .then((res) => {
            let recentGames = res.split(';');
            recentGames = recentGames.slice(1);


            for (let i = 0; i < recentGames.length; i++) {
                const gameName = recentGames[i];
                if (gameName != null) {
                    recentGamesContainer.innerHTML += createGameButton(gameName);
                }
            }
        });

    await fetcher(`/assets/php/class_likes/personallikes.php`)
        .then((response) => response.text())
        .then((res) => {
            var likedgames = JSON.parse(res);


            if (likedgames.length > 0) {
                for (like in likedgames) {
                    console.log(likedgames[like][0]);
                    if (likedgames[like][0].length > 0) {
                        likedGamesContainer.innerHTML += createGameButton(likedgames[like][0]);
                    }
                }
            }
            console.log(likedGamesContainer);
        });

    recentRow.appendChild(recentGamesContainer);
    likedRow.appendChild(likedGamesContainer);
    gamesDiv.prepend(likedRow);
    gamesDiv.innerHTML = `<h1>Liked Games</h1>` + gamesDiv.innerHTML;
    gamesDiv.prepend(recentRow);
    gamesDiv.innerHTML = `<h1>Recent Games</h1>` + gamesDiv.innerHTML;

    addArrowListeners();
});

function changeToGif(ele) {
    const game = ele.getAttribute('name');
    const data = games[game];

    if (data.gif != null) ele.style = `background-image: url(${data.gif})`;
}

function noGif(ele) {
    const game = ele.getAttribute('name');
    const data = games[game];

    if (data.gif != null) ele.style = `background-image: url(${data.image})`;
}

// converts number to string representation with K and M.
// toFixed(d) returns a string that has exactly 'd' digits
// after the decimal place, rounding if necessary.
function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    } else if (num < 1000) {
        return num; // if value < 1000, nothing to do
    }
}

function createGameButton(game, pin) {
    const data = games[game];
    if (data == null)
        return '';

    let classlist = data.tags.join(' ');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const gameDate = new Date(data.date_added);

    if (gameDate > weekAgo) classlist += ' new';

    let gameBtn = '';

    gameBtn = `
        <div name="${game}" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <img src="${data.image}" alt="Totally Science ${game}" title="Totally Science ${game}">
            <h1 class="innerGameDiv">${game}</h1>
        </div>
        `;

    return gameBtn;
}

function addArrowListeners() {

    for (let i = 0; i < document.getElementsByClassName('arrowLeftCon').length; i++) {
        document.getElementsByClassName('arrowLeftCon')[i].addEventListener("click", function(e) {
            const parentElement = e.target.parentNode.parentNode;
            const gamesCon = parentElement.querySelectorAll('.gamesCon')[0];

            // gamesCon.scrollLeft -= 1100;
            gamesCon.scrollLeft -= Math.min(gamesCon.scrollLeft, 1100);
        });
    }

    for (let i = 0; i < document.getElementsByClassName('arrowRightCon').length; i++) {
        document.getElementsByClassName('arrowRightCon')[i].addEventListener("click", function(e) {
            const parentElement = e.target.parentNode.parentNode;
            const gamesCon = parentElement.querySelectorAll('.gamesCon')[0];

            const leftArrow = e.target.parentNode.parentNode.querySelectorAll('.arrowCon')[0];
            leftArrow.style += "visibility: visible";

            // gamesCon.scrollLeft += 1100;
            const remainingSpace = gamesCon.scrollWidth - gamesCon.clientWidth - gamesCon.scrollLeft;
            gamesCon.scrollLeft += Math.min(remainingSpace, 1100);
        });
    }


}