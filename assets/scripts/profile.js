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
                //location.href = 'signup.php';
            }

            fetch(`assets/php/verified.php`).then((response) => response.text()).then((verified) => {
                if (verified == 0) {
                    location.href = 'verify.php';
                }

                document.getElementById('usernameSpan').innerText = name;
                document.getElementById('emailSpan').innerText = res['email'];
            });
        } else {
            //location.href = 'signup.php';
        }
    });

    fetch(`/assets/php/personalhighscores.php?username=zm`).then((response) => response.text()).then((res) => {
        alert(res);
        scoresDiv.innerHTML = '';
        res = JSON.parse(res);
        if (res != '') {
            highscores = res;
            for (score in highscores) {
                const game = highscores[score][0];
                const name = highscores[score][1];
                const gameScore = highscores[score][2];
                const highscoreDiv = `
                            <div class="highscore">
                                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/70434/trophy-clipart-xl.png">
                                <h1>${game}</h1>
                                <p>${gameScore}</p>
                            </div>
                        `;
                scoresDiv.innerHTML += highscoreDiv;
            }
        } else {
            document.getElementById("noscores").style.display = '';
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