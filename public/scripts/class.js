const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameName = urlParams.get('class');
const id = urlParams.get('id');

let hasReported = false;
let baseurl = location.host;

if (baseurl.includes("github")) {
    baseurl = 'totallyscience.co';
}

document.getElementById('report-btn').addEventListener('click', () => {
    // TODO: FIX REPORT
    if (hasReported) return;

    fetch(`https://${baseurl}/assets/php/game_stats.php/?type=reports&name=${gameName}`).then((response) => response.text()).then((text) => {
        if (text.includes('<?php')) {
            document.getElementById('report-btn').innerText = '?';
            return;
        }
        document.getElementById('report-btn').innerText = text;
        hasReported = true;
    })
});

window.addEventListener('load', () => {
    document.getElementById('fullscreenImg').src = `icons/fullscreen-${localStorage.getItem("theme")}.svg`;

    fetch(`/gamesjson`).then((response) => {
        if (response.ok) {
            return response.json();
        }
    }).then((games) => {
        const gameData = games[gameName];
        if (gameData == null) window.location.href = '../classes.html';

        document.getElementById('controls').innerText = gameData.controls;
        document.getElementById('developer').innerText = `This game was created by ${gameData.developer}.`;
        document.getElementById('game-iframe').src = gameData.iframe_url;

        if (id) {
            document.getElementById('game-iframe').src = gameData.iframe_url + '?id=' + id;
            console.log(gameData.iframe_url + '?id=' + id);
        }
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