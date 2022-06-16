const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameName = urlParams.get('class');
const id = urlParams.get('id');

window.addEventListener('load', () => {
    document.getElementById('fullscreenImg').src = `./assets/images/fullscreen-${localStorage.getItem("theme")}.svg`;

    fetch(`assets/games.json?date=${new Date().getTime()}`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(`cannot fetch ./assets/games.json?date=${new Date().getTime()}`);
        }
    }).then((games) => {
        const gameData = games[gameName];
        if (gameData == null) window.location.href = '../classes';

        document.getElementById('controls').innerText = gameData.controls;
        document.getElementById('developer').innerText = `This game was created by ${gameData.developer}.`;

        if (gameData.type == 'proxy') {
            document.getElementById('game-iframe').src = 'https://p.' + window.location.host + '/index#' + btoa(gameData.iframe_url);
        } else {
            document.getElementById('game-iframe').src = gameData.iframe_url;
        }

        if (id) {
            document.getElementById('game-iframe').src = gameData.iframe_url + '?id=' + id;
            console.log(gameData.iframe_url + '?id=' + id);
        }
    }).catch((err) => {
        if (err) console.log(`cannot fetch assets/games.json?date=${new Date().getTime()}`);
    });
});


function enterFullscreen() {
    var elem = document.getElementsByTagName("iframe")[0];

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}