// READY

document.getElementById('gamesnav').classList.add('selected');

//Load Game
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameName = urlParams.get('class');
const id = urlParams.get('id');
const likeButton = document.querySelector('#like');
const likeButtonImg = likeButton.firstChild;
const pinButton = document.querySelector('#pin');
const pinButtonImg = pinButton.firstChild;

let likeCount = 0;
let loggedIn = false;
let verified = true;
let games;

document.getElementsByTagName('title')[0].innerHTML = `Totally Science - ${gameName} || Play ${gameName} unblocked on Totally Science`;
document.getElementsByTagName('iframe')[0].title = `${gameName} Unblocked`;

window.addEventListener('load', () => {
    //Check if user is logged in
    res = JSON.parse(authToken);

    let userloggedIn = 'false';

    if (res != null) userloggedIn = res['isLoggedIn'];

    console.log(userloggedIn);
    if (userloggedIn == 'true') {
        loggedIn = true;

        //check if user liked the game previously
        fetcher(`assets/php/class_likes/checkuserliked.php?name=${gameName}`)
            .then((response) => response.text())
            .then((res) => {
                if (res == 'liked') likeButtonImg.setAttribute('src', 'assets/images/icons/like.png');
            });

        //check if user pinned the game previously
        fetcher(`assets/php/class_pin/checkpinned.php?name=${gameName}`)
            .then((response) => response.text())
            .then((res) => {
                if (res == 'pinned') pinButtonImg.setAttribute('src', 'assets/images/icons/pin.png');
            });

        //add to recent games list
        fetcher(`assets/php/recent_classes/addclass.php?name=${gameName}`);
    }

    //get game data for iframe etc
    fetch(`assets/games.json?date=${new Date().getTime()}`)
        .then((response) => {
            if (response.ok) return response.json();
            else console.log(`cannot fetch ./assets/games.json?date=${new Date().getTime()}`);
        })
        .then((games) => {
            const gameData = games[gameName];

            if (gameData == null) window.location.href = '../classes';

            document.getElementById('description').innerText = gameData.description;
            document.getElementById('controls').innerText = gameData.controls;
            document.getElementById('developer').innerText = `${gameName} was created by ${gameData.developer}.`;


            console.log(document.querySelector('meta[name="description"]'));
            console.log(document.querySelector('meta[name="description"]').getAttribute("content"));

            // document.querySelector('meta[name="description"]').setAttribute("content", gameData.description);
            // document.querySelector('meta[name="og:description"]').setAttribute("content", gameData.description);
            // document.querySelector('meta[name="twitter:description"]').setAttribute("content", gameData.description);

            if (gameData.type == 'proxy') {
                document.getElementById('iframe').src = 'https://a.' + 'megamathstuff.com' + '#' + btoa(gameData.iframe_url);
            } else {
                document.getElementById('iframe').src = gameData.iframe_url;
            }

            document.getElementById('iframe').focus();

            if (id) {
                document.getElementById('iframe').src = gameData.iframe_url + '?id=' + id;
                console.log(gameData.iframe_url + '?id=' + id);
            }
        })
        .catch((err) => {
            if (err) console.log(`cannot fetch assets/games.json?date=${new Date().getTime()}`);
        });

    //get like count
    fetch(`assets/php/class_likes/getlikes.php?name=${gameName}`)
        .then((response) => response.text())
        .then((res) => {
            likeCount = parseInt(res);
            UpdateLikeCount();
        });

    //get current highscore
    fetch(`assets/php/class_likes/getclasshighscore.php?name=${gameName}`)
        .then((response) => response.text())
        .then((res) => {
            if (res != '') {
                const currentHighscore = numFormatter(res);
                document.getElementById('currentHighscore').innerText = currentHighscore;
            } else document.getElementById('currentHighscore').innerText = '0';
        });
});

//Like Button
likeButton.addEventListener('click', function() {
    if (loggedIn) {
        if (likeButtonImg.getAttribute('src') == 'assets/images/icons/likeoutline.png') {
            likeButtonImg.setAttribute('src', 'assets/images/icons/like.png');
            likeCount += 1;
            fetcher(`assets/php/class_likes/likeclass.php?name=${gameName}`);
            UpdateLikeCount();
        } else {
            likeButtonImg.setAttribute('src', 'assets/images/icons/likeoutline.png');
            likeCount -= 1;
            fetcher(`assets/php/class_likes/unlikeclass.php?name=${gameName}`);
            UpdateLikeCount();
        }
    } else {
        swal('You must login to like the game', {
            buttons: { cancel: 'Cancel', login: { text: 'Login', value: 'login' } },
        }).then((value) => {
            if (value == 'login') {
                window.open('signup.php', '_self');
            }
        });
    }
});

likeButton.addEventListener('click', function() {
    likeButton.classList.add('button-click');
});
likeButton.addEventListener('webkitAnimationEnd', function() {
    likeButton.classList.remove('button-click');
});
pinButton.addEventListener('click', function() {
    pinButton.classList.add('button-click');
});
pinButton.addEventListener('webkitAnimationEnd', function() {
    pinButton.classList.remove('button-click');
});
pinButton.addEventListener('click', function() {
    if (loggedIn) {
        if (pinButtonImg.getAttribute('src') == 'assets/images/icons/pinoutline.png') {
            fetcher(`assets/php/class_pin/pinclass.php?name=${gameName}`)
                .then((response) => response.text())
                .then((res) => {
                    if (res == 'successpinned') pinButtonImg.setAttribute('src', 'assets/images/icons/pin.png');
                    else if (res == 'maxpins') swal('You have pinned the max amount of games (3).');
                });
        } else {
            fetcher(`assets/php/class_pin/unpinclass.php?name=${gameName}`);
            pinButtonImg.setAttribute('src', 'assets/images/icons/pinoutline.png');
        }
    } else {
        swal('You must login to pin the game', {
            buttons: { cancel: 'Cancel', login: { text: 'Login', value: 'login' } },
        }).then((value) => {
            if (value == 'login') {
                window.open('signup.php', '_self');
            }
        });
    }
});

function UpdateLikeCount() {
    document.getElementById('likeCount').innerText = numFormatter(likeCount);
}

function OpenHighscore() {
    window.open(`/leaderboard.php?class=${gameName}`, '_self');
}

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

document.getElementById('fullscreen').addEventListener('click', () => {
    var elem = document.getElementById('iframe');

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    fetch(`assets/games.json`)
        .then((response) => response.json())
        .then((retrievedGames) => {
            games = retrievedGames;
            suggestGames();
            addGameData(); //increment game views by 1
        });
});

function suggestGames() {
    let displayedGames = 0;
    let randomGames = [];
    let currentTags = games[gameName]['tags'];
    let totalGames = Object.keys(games).length;

    for (let x = 0; x < totalGames; x++) {
        let randGame = Object.keys(games)[x];
        let sameTag = false;

        currentTags.forEach(function(game) {
            let gameTags = games[randGame]['tags'];
            gameTags.forEach(function(currentgame) {
                if (game == currentgame && game != 'mobile' && game != 'recent' && game != 'new' && game != 'popular') {
                    sameTag = true;
                }
            });
        });
        if (gameName == randGame) sameTag = false;

        if (sameTag && displayedGames < 15) {
            randomGames.push(randGame);
            displayedGames++;
        } else if (displayedGames >= 15) break;
    }
    while (displayedGames < 15) {
        for (let x = 0; x < 15 - displayedGames; x++) {
            let randGame = randomProperty(games);

            while (randomGames.includes(randGame)) {
                randGame = randomProperty(games);
            }

            randomGames.push(randGame);
            displayedGames++;
        }
    }

    let arrowContainer =
        '<div class="arrowsCon"><div class="arrowCon arrowLeftCon" id="arrowLeft" style="visibility: hidden;"><img class="arrow" src="/assets/images/left-arrow.png"></div><div class="arrowCon arrowRightCon" id="arrowRight" ><img class="arrow" src="/assets/images/right-arrow.png"></div></div>';
    let gamesDiv = document.getElementById('games');

    gamesDiv.innerHTML += `<h1>Recommended Games</h1>`;

    let row = document.createElement('div');
    row.classList.add('horizontalCon');
    let gamesContainer = document.createElement('div');
    gamesContainer.classList.add('gamesCon');
    //add the arrows to the horizontal Con
    row.innerHTML += arrowContainer;
    //for each element in newGames, add the game to the horizontalCon
    randomGames.forEach(function(game) {
        gamesContainer.innerHTML += createGameButton(game);
    });

    row.appendChild(gamesContainer);
    gamesDiv.appendChild(row);

    addArrowListeners();
}

var randomProperty = function(object) {
    var keys = Object.keys(object);
    return keys[Math.floor(keys.length * Math.random())];
};

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

function addGameData() {
    const gameData = games[gameName];
    console.log(gameData);
    if (gameData != null) fetch(`assets/php/addgameviews.php?name=${gameName}`);
}

window.addEventListener('click', () => {
    //fix some text inputs not working (eaglercraft)
    document.getElementById('iframe').focus();
});

function addArrowListeners() {
    for (let i = 0; i < document.getElementsByClassName('arrowLeftCon').length; i++) {
        document.getElementsByClassName('arrowLeftCon')[i].addEventListener('click', function(e) {
            const parentElement = e.target.parentNode.parentNode;
            const gamesCon = parentElement.querySelectorAll('.gamesCon')[0];

            // gamesCon.scrollLeft -= 1100;
            gamesCon.scrollLeft -= Math.min(gamesCon.scrollLeft, 1100);
        });
    }

    for (let i = 0; i < document.getElementsByClassName('arrowRightCon').length; i++) {
        document.getElementsByClassName('arrowRightCon')[i].addEventListener('click', function(e) {
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
        <div name="${game}" id="gameDiv" onclick="location.href = 'class?class=${game}'" class="${classlist}">
            <div class="imageCon">
                <img src="${data.image}" alt="Totally Science ${game}" title="Totally Science ${game}">
            </div>
            <h1 class="innerGameDiv">${game}</h1>
        </div>
        `;

    return gameBtn;
}