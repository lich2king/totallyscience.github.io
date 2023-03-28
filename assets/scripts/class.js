const urlParams = new URLSearchParams(window.location.search);
const gameName = urlParams.get('class');
const id = urlParams.get('id');

const token = JSON.parse(authToken);

const likeButton = document.querySelector('#like');
const likeButtonImg = likeButton.firstChild;
const pinButton = document.querySelector('#pin');
const pinButtonImg = pinButton.firstChild;

let games;

window.addEventListener('load', async () => {
    let retrievedGamesRes = await fetch(`assets/games.json`);
    let retrievedGames = await retrievedGamesRes.json();

    const gameData = retrievedGames[gameName];

    if (!gameData) window.location.href = '../classes';

    // update navbar to underline game link
    document.getElementById('gamesnav').classList.add('selected');

    // -------
    games = retrievedGames;
    suggestGames();
    // ----

    // token will be undefined if user is not signed in
    if (token) {
        // check if user has liked this games
        let likedRes = await fetcher(`${activeServer}/profile/liked/check`, { body: { gameName: gameName } });

        // set like icon if user has liked it
        if (likedRes.status == 200) likeButtonImg.setAttribute('src', 'assets/images/icons/like.png');

        // check if user has pinned this game
        let pinnedRes = await fetcher(`${activeServer}/profile/pinned/check`, { body: { gameName: gameName } });

        // set pin icon if user has pinned it
        if (pinnedRes.status == 200) pinButtonImg.setAttribute('src', 'assets/images/icons/pin.png');


        // add to recently played games list
        fetcher(`${activeServer}/profile/recent/set`, { body: { gameName: gameName } });
    }

    // Zach set this up i am unsure of what its purpose is
    if (id) {
        document.getElementById('iframe').src = gameData.iframe_url + '?id=' + id;
    }

    // set iframe to correct url defined in games.json
    if (gameData.type == 'proxy') {
        document.getElementById('iframe').src = 'https://a.' + 'megamathstuff.com' + '#' + btoa(gameData.iframe_url);
    } else {
        document.getElementById('iframe').src = gameData.iframe_url;
    }

    // focus on the iframe. This is necessary for certain games such as eaglercraft
    document.getElementById('iframe').focus();

    // update metadata
    let metaDesc = gameData.description.length > 155 ? gameData.description.substr(0, 156) : gameData.description;

    document.querySelector('meta[name="description"]').setAttribute('content', metaDesc);
    document.querySelector('meta[name="DC.description"]').setAttribute('content', metaDesc);
    document.querySelector('meta[property="og:description"]').setAttribute('content', metaDesc);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', metaDesc);

    document.getElementsByTagName('title')[0].innerHTML = `Totally Science - ${gameName} || Play ${gameName} unblocked on Totally Science`;
    document.getElementsByTagName('iframe')[0].title = `${gameName} Unblocked`;

    // update game information
    document.getElementById('description').innerText = gameData.description;
    document.getElementById('controls').innerText = gameData.controls;
    document.getElementById('developer').innerText = `${gameName} was created by ${gameData.developer}.`;
    
    // update game total like count
    let likedCountRes = await fetcher(`${activeServer}/profile/liked/count`, { body: { gameName: gameName } });
    let likedCountText = await likedCountRes.text();

    document.getElementById('likeCount').innerText = numFormatter(parseInt(likedCountText));

    // update game current highscore
    let highscoreRes = await fetcher(`${activeServer}/profile/highscores/retrieve`, { body: { gameName: gameName } });
    let highscoreText = await highscoreRes.text();

    document.getElementById('currentHighscore').innerText = highscoreRes.status == 200 ? numFormatter(highscoreText) : '0';

    // update game statistics
    fetcher(`${activeServer}/stats/games/view`, { body: { gameName: gameName } });
});

//Like Button
likeButton.addEventListener('click', function () {
    if (token) {
        if (likeButtonImg.getAttribute('src') == 'assets/images/icons/likeoutline.png') {
            likeButtonImg.setAttribute('src', 'assets/images/icons/like.png');
            fetcher(`${activeServer}/profile/liked/change`, { body: { gameName: gameName } });

            document.getElementById('likeCount').innerText = numFormatter(parseInt(document.getElementById('likeCount').innerText) + 1);
        } else {
            likeButtonImg.setAttribute('src', 'assets/images/icons/likeoutline.png');
            fetcher(`${activeServer}/profile/liked/change`, { body: { gameName: gameName } });
            
            document.getElementById('likeCount').innerText = numFormatter(parseInt(document.getElementById('likeCount').innerText) + 1);
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

likeButton.addEventListener('click', function () {
    likeButton.classList.add('button-click');
});
likeButton.addEventListener('webkitAnimationEnd', function () {
    likeButton.classList.remove('button-click');
});
pinButton.addEventListener('click', function () {
    pinButton.classList.add('button-click');
});
pinButton.addEventListener('webkitAnimationEnd', function () {
    pinButton.classList.remove('button-click');
});
pinButton.addEventListener('click', async () => {
    if (token) {
        let res = await fetcher(`${activeServer}/profile/pinned/change`, { body: { gameName: gameName } });

        if (res.status == 400) {
            swal('You have pinned the max amount of games (3).');
        } else {
            // check if it is pinned by checking current icon
            // update icon to match chnaged state
            let isPinned = pinButtonImg.getAttribute('src') == 'assets/images/icons/pin.png';

            pinButtonImg.setAttribute('src', isPinned ? 'assets/images/icons/pinoutline.png' : 'assets/images/icons/pin.png');
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

function suggestGames() {
    let displayedGames = 0;
    let randomGames = [];
    let currentTags = games[gameName]['tags'];
    let totalGames = Object.keys(games).length;

    for (let x = 0; x < totalGames; x++) {
        let randGame = Object.keys(games)[x];
        let sameTag = false;

        currentTags.forEach(function (game) {
            let gameTags = games[randGame]['tags'];
            gameTags.forEach(function (currentgame) {
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
    randomGames.forEach(function (game) {
        gamesContainer.innerHTML += createGameButton(game);
    });

    row.appendChild(gamesContainer);
    gamesDiv.appendChild(row);

    addArrowListeners();
}

var randomProperty = function (object) {
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

window.addEventListener('click', () => {
    //fix some text inputs not working (eaglercraft)
    document.getElementById('iframe').focus();
});

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
