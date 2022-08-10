document.getElementById("gamesnav").classList.add("selected");



//Check if user is logged in
let loggedIn = false;
fetch(`assets/php/getCookie.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
    res = JSON.parse(res);

    let userloggedIn = 'false';

    if (res != null) {
        userloggedIn = res['isLoggedIn'];
    }

    if (userloggedIn == "true") {
        loggedIn = true;
    }
});



//Load Game

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameName = urlParams.get('class');
const id = urlParams.get('id');

let likeCount = 0;

const likeButton = document.querySelector('#like');
const likeButtonImg = likeButton.firstChild;

window.addEventListener('load', () => {

    //get game data for iframe etc

    fetch(`assets/games.json?date=${new Date().getTime()}`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(`cannot fetch ./assets/games.json?date=${new Date().getTime()}`);
        }
    }).then((games) => {
        const gameData = games[gameName];
        if (gameData == null) window.location.href = '../classes';

        document.getElementById('description').innerText = gameData.description;
        document.getElementById('controls').innerText = gameData.controls;
        document.getElementById('developer').innerText = `This game was created by ${gameData.developer}.`;

        document.getElementById('iframe').src = gameData.iframe_url;

        if (id) {
            document.getElementById('iframe').src = gameData.iframe_url + '?id=' + id;
            console.log(gameData.iframe_url + '?id=' + id);
        }
    }).catch((err) => {
        if (err) console.log(`cannot fetch assets/games.json?date=${new Date().getTime()}`);
    });

    //check if user liked the game previously
    fetch(`assets/php/game_likes/checkuserliked.php?name=${gameName}`).then((response) => response.text()).then((res) => {
        if (res == 'liked') {
            likeButtonImg.setAttribute('src', 'assets/images/icons/like.png');
        }
    });

    //set like count
    fetch(`assets/php/game_likes/getlikes.php?name=${gameName}`).then((response) => response.text()).then((res) => {
        likeCount = parseInt(res);
        UpdateLikeCount();
    });
});

//Like Button




likeButton.addEventListener('click', function() {
    if (loggedIn) {
        if (likeButtonImg.getAttribute('src') == 'assets/images/icons/likeoutline.png') {
            likeButtonImg.setAttribute('src', 'assets/images/icons/like.png');
            likeCount += 1;
            fetch(`assets/php/game_likes/likegame.php?name=${gameName}`);
            UpdateLikeCount();
        } else {
            likeButtonImg.setAttribute('src', 'assets/images/icons/likeoutline.png');
            likeCount -= 1;
            fetch(`assets/php/game_likes/unlikegame.php?name=${gameName}`);
            UpdateLikeCount();
        }
    } else {
        alert("You must log in.");
    }

});


likeButton.addEventListener("click", function() {
    likeButton.classList.add("button-click");
})

likeButton.addEventListener("webkitAnimationEnd", function() {
    likeButton.classList.remove("button-click");
})



function UpdateLikeCount() {
    likeButton.setAttribute('data-hover', likeCount);
}


const pinButton = document.querySelector('#pin');
const pinButtonImg = pinButton.firstChild;


pinButton.addEventListener('click', function() {
    if (loggedIn) {
        if (pinButtonImg.getAttribute('src') == 'assets/images/icons/pinoutline.png') {
            pinButtonImg.setAttribute('src', 'assets/images/icons/pin.png');
        } else {
            pinButtonImg.setAttribute('src', 'assets/images/icons/pinoutline.png');
        }
    } else {
        alert("You must log in.")
    }
});


pinButton.addEventListener("click", function() {
    pinButton.classList.add("button-click");
})

pinButton.addEventListener("webkitAnimationEnd", function() {
    pinButton.classList.remove("button-click");
})




function OpenHighscore() {
    window.open(`/leaderboardnew.php?class=${gameName}`, '_self')
}

document.getElementById("fullscreen").addEventListener('click', function() {
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
});



document.addEventListener('DOMContentLoaded', () => {
    fetch(`assets/games.json`).then((response) => response.json()).then((retrievedGames) => {
        games = retrievedGames;
        suggestGames();
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

function suggestGames() {
    let displayedGames = 0;
    let randomGames = []
    let currentTags = games[gameName]["tags"];
    let totalGames = Object.keys(games).length;
    for (let x = 0; x < totalGames; x++) {
        //let randGame = randomProperty(games)
        //while (randomGames.includes(randGame)) {
        //randGame = randomProperty(games)
        //}
        let randGame = Object.keys(games)[x];
        let sameTag = false;
        currentTags.forEach(function(game) {
            let gameTags = games[randGame]["tags"];
            gameTags.forEach(function(currentgame) {
                if (game == currentgame && game != 'mobile' && game != 'recent' && game != 'premium' && game != 'new' && game != 'popular') {
                    sameTag = true;
                }
            })
        })
        if (gameName == randGame) {
            sameTag = false;
        }
        if (sameTag && displayedGames < 5) {
            randomGames.push(randGame);
            displayedGames++;
        } else if (displayedGames >= 5) {
            break;
        }
    }
    while (displayedGames < 5) {
        for (let x = 0; x < 5 - displayedGames; x++) {
            let randGame = randomProperty(games)
            while (randomGames.includes(randGame)) {
                randGame = randomProperty(games)
            }
            randomGames.push(randGame);
            displayedGames++;
        }
    }
    console.log(randomGames)

    document.getElementById('suggestedGames').innerHTML = '';
    randomGames.forEach(function(game) {
        const gameBtn = `
                    <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${games[game]["image"]})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'">
                        <div class="innerGameDiv">${game}</div>
                    </div>
                    `;

        document.getElementById('suggestedGames').innerHTML += gameBtn;
    })
}


var randomProperty = function(object) {
    var keys = Object.keys(object);
    return keys[Math.floor(keys.length * Math.random())];
};