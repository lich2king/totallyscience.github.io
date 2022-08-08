document.getElementById("gamesnav").classList.add("selected");



//Check if user is logged in
let loggedIn = false;
fetch(`assets/php/getCookie.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
    res = JSON.parse(res);

    let userloggedIn = 'false';

    if (res != null) {
        userloggedIn = res['isLoggedIn'];
    }

    if (loggedIn == "true") {
        loggedIn = true;
    }
});



//Load Game

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameName = urlParams.get('class');
const id = urlParams.get('id');

window.addEventListener('load', () => {
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
});

//Like Button

const likeButton = document.querySelector('#like');
const likeButtonImg = likeButton.firstChild;

let likeCount = 0;

likeButton.addEventListener('click', function() {
    if (loggedIn) {
        if (likeButtonImg.getAttribute('src') == 'assets/images/icons/likeoutline.png') {
            likeButtonImg.setAttribute('src', 'assets/images/icons/like.png');
            likeCount += 1;
            UpdateLikeCount();
        } else {
            likeButtonImg.setAttribute('src', 'assets/images/icons/likeoutline.png');
            likeCount -= 1;
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