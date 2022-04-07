const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameName = urlParams.get('class');
const id = urlParams.get('id');

let imageFile = '';

document.getElementById('report-btn').addEventListener('click', () => {
    // TODO: FIX REPORT

    /*
    if (hasReported) return;

let hasReported = false;

    fetch(`https://${hasReported}/assets/php/game_stats.php/?type=reports&name=${gameName}`).then((response) => response.text()).then((text) => {
        if (text.includes('<?php')) {
            document.getElementById('report-btn').innerText = '?';
            return;
        }
        document.getElementById('report-btn').innerText = text;
        hasReported = true;
    })
    */
});

window.addEventListener('load', () => {
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

    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {

            const file = this.files[0]
            const fileType = file['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];

            if (!validImageTypes.includes(fileType)) {
                alert('invalid image');
                document.querySelector('input[type="file"]').value = null;
                imageFile = '';
            } else if (file.size > 1000000) {
                alert('image must be under 1mb');
                document.querySelector('input[type="file"]').value = null;
                imageFile = '';
            } else {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function() {
                    imageFile = reader.result
                };
                reader.onerror = function(error) {
                    console.log('Error: ', error);
                };
            }
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
function starGame() {
    if (!getCookie('accessToken')) return alert('must be signed in to star games.');

    fetch(`/star`, { method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ class: gameName }) }).then((response) => response.text()).then((res) => {
        if (res == 'success') return location.reload();
        
        alert(res);
    });
}

function submitHighscore() {
    if (!getCookie('accessToken')) return alert('must be signed in to submit highscores.');

    const score = document.getElementById('scoreUpload').value;

    if (score == null || isNaN(score) || score == '') return alert('invalid score');
    if (imageFile == '') return alert('invalid image');
    
    let data = {
        game: gameName,
        score: score,
        image: imageFile
    }
    
    fetch('/highscore', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then((response) => response.text()).then((res) => {
        alert(res);
    });
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}