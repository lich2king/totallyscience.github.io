let username;
let games;
let highscores;
const scoresDiv = document.getElementById('highscorecontainer');

document.addEventListener('DOMContentLoaded', () => {
    fetch(`assets/games.json`).then((response) => response.json()).then((retrievedGames) => {
        games = retrievedGames;
    });

    fetch(`assets/php/getCookie.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
        // HAVE RESEND EMAIL BUTTON
        res = JSON.parse(res)
        if (res != null) {
            const loggedIn = res['isLoggedIn'];
            username = res['username'];

            if (loggedIn != 'true') {
                location.href = 'signup.php';
            }

            fetch(`assets/php/verified.php`).then((response) => response.text()).then((verified) => {
                if (verified == 0) {
                    location.href = 'verify.php';
                }

                document.getElementById('usernameSpan').innerText = username;
                document.getElementById('emailSpan').innerText = res['email'];
            });
        } else {
            location.href = 'signup.php';
        }
    });

    //Load highscores
    fetch(`/assets/php/personalhighscores.php?username=${username}`).then((response) => response.text()).then((res) => {
        if (res != '[]') {
            res = JSON.parse(res);
            highscores = res;
            for (score in highscores) {
                const game = highscores[score][0];
                const name = highscores[score][1];
                const gameScore = highscores[score][2];
                const highscoreDiv = `
                            <div class="highscore">
                                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/70434/trophy-clipart-xl.png">
                                <h1>${game}</h1>
                                <p>${numFormatter(gameScore)}</p>
                            </div>
                        `;
                scoresDiv.innerHTML += highscoreDiv;
            }
        } else {
            document.getElementById("noscores").setAttribute("style", "display: ");
        }
    });

    //Load liked games
    fetch(`/assets/php/game_likes/personallikes.php`).then((response) => response.text()).then((res) => {
        var likedgames = JSON.parse(res);
        const likeContainer = document.getElementById("likedcontainer");

        for (like in likedgames) {
            var game = likedgames[like][0];
            const gameButton = createGameButton(game);

            likeContainer.innerHTML += gameButton;
        }
    });

    //Load recent games
    fetch(`/assets/php/game_likes/personallikes.php`).then((response) => response.text()).then((res) => {
        let recentGames = res.split(";");
        recentGames = recentGames.slice(1);
        const recentContainer = document.getElementById("recentContainer");

        for (game in recentGames) {
            const gameButton = createGameButton(game);

            recentContainer.innerHTML += gameButton;
        }
    });
});


function changeToGif(ele) {
    const game = ele.getAttribute("name");
    const data = games[game];

    if (data.gif != null)
        ele.style = `background-image: url(${data.gif})`;
}

function noGif(ele) {
    const game = ele.getAttribute("name");
    const data = games[game];

    if (data.gif != null)
        ele.style = `background-image: url(${data.image})`;
}

function logout() {
    fetch(`assets/php/logout.php`).then(() => {
        location.href = 'login.php';
    });
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

    let classlist = data.tags.join(' ');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const gameDate = new Date(data.date_added);

    if (gameDate > weekAgo) {
        classlist += ' new';
    }

    let gameBtn = '';
    if (data.tags.includes("gamepass")) {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
            <button id="gamelock"><img src="/assets/images/icons/locked.png"></button> 
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    } else {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    }

    return (gameBtn);

}