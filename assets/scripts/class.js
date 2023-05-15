const urlParams = new URLSearchParams(window.location.search);
let gameName = urlParams.get('class');
console.log(gameName);
if (gameName) {
    gameName = gameName.replaceAll('-', ' ');
} else {
    gameName = '';
}
const id = urlParams.get('id');

let likeCount = 0;
let token;

async function displayUserData() {
    const pinBtn = document.querySelector('#pin');
    const likeBtn = document.querySelector('#like');
    const pinImg = pinBtn.firstChild;
    const likeImg = likeBtn.firstChild;

    // check if user has liked and/or pinned the game
    let res = await fetcher(`/profile/gamedata/${gameName}`);
    let json = await res.json();

    // set like icon if user has liked it
    if (json.liked) likeImg.setAttribute('src', 'assets/images/icons/like.png');

    // set pin icon if user has pinned it
    if (json.pinned) pinImg.setAttribute('src', 'assets/images/icons/pin.png');

    // add to recently played games list
    fetcher(`/profile/recent/set`, { body: { gameName: gameName } });
}

function setupActionButtons() {
    const pinBtn = document.querySelector('#pin');
    const likeBtn = document.querySelector('#like');

    // configuration for swal popup
    const swalConfig = { buttons: { cancel: 'Cancel', login: { text: 'Login', value: 'login' } } };
    const swalHandler = (value) => {
        if (value == 'login') window.open('signup.php', '_self');
    };

    likeBtn.addEventListener('click', async(e) => {
        e.target.classList.add('button-click');

        if (token) {
            //took away the await
            let res = await fetcher(`/profile/liked/change`, { body: { gameName: gameName } });

            if (res.status == 200) {
                const likedIcon = 'assets/images/icons/like.png';
                const notLikedIcon = 'assets/images/icons/likeoutline.png';

                // check if it is liked by checking current icon
                let isLiked = e.target.firstChild.getAttribute('src') == likedIcon;

                // update icon to match chnaged state
                e.target.firstChild.setAttribute('src', isLiked ? notLikedIcon : likedIcon);

                // set updated like count
                let likeCountEle = document.getElementById('likeCount');

                let prevLikeCount = parseInt(likeCount);
                likeCount = isLiked ? prevLikeCount - 1 : prevLikeCount + 1;

                likeCountEle.innerText = numFormatter(likeCount);
            }
        } else {
            swal('You must login to like the game', swalConfig).then(swalHandler);
        }
    });
    likeBtn.addEventListener('webkitAnimationEnd', () => {
        likeBtn.classList.remove('button-click');
    });

    pinBtn.addEventListener('click', async(e) => {
        e.target.classList.add('button-click');

        if (token) {
            let res = await fetcher(`/profile/pinned/change`, { body: { gameName: gameName } });

            if (res.status == 400) {
                swal('You have pinned the max amount of games (3).');
            } else {
                const pinnedIcon = 'assets/images/icons/pin.png';
                const notPinnedIcon = 'assets/images/icons/pinoutline.png';

                // check if it is pinned by checking current icon
                // update icon to match chnaged state
                let isPinned = e.target.firstChild.getAttribute('src') == pinnedIcon;

                e.target.firstChild.setAttribute('src', isPinned ? notPinnedIcon : pinnedIcon);
            }
        } else {
            swal('You must login to pin the game', swalConfig).then(swalHandler);
        }
    });
    pinBtn.addEventListener('webkitAnimationEnd', () => {
        pinBtn.classList.remove('button-click');
    });
}

window.addEventListener('load', async() => {
    let response = await fetcher(`/auth/check`);
    let result = await response.text();

    if (result == 'A token is required for authentication' || result == 'Invalid Token') {
        token = false;
    } else {
        token = true;
    }

    const iframe = document.getElementById('iframe');
    // TODO: reduce # of getElementById calls for performance

    let retrievedGamesRes = await fetch(`assets/games.json?date=${new Date().getTime()} `);
    let retrievedGames = await retrievedGamesRes.json();

    const gameData = retrievedGames[gameName];

    if (!gameData) window.location.href = '../classes.php';

    // update navbar to underline game link
    document.getElementById('gamesnav').classList.add('selected');

    // -------
    suggestGames(retrievedGames);
    // ----

    // TODO: /pinned/check and /liked/check could be combined into one request

    // token will be undefined if user is not signed in
    if (token) displayUserData();

    // Zach set this up i am unsure of what its purpose is
    if (id) iframe.src = gameData.iframe_url + '?id=' + id;

    // set iframe to correct url defined in games.json
    if (gameData.type == 'proxy') {
        iframe.src = 'https://a.' + 'megamathstuff.com' + '#' + btoa(gameData.iframe_url);
    } else {
        iframe.src = gameData.iframe_url;
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
    likeCount = await fetcher(`/profile/liked/count`, { body: { gameName: gameName } });
    likeCount = await likeCount.text();

    document.getElementById('likeCount').innerText = numFormatter(parseInt(likeCount)) || '0';

    // update game current highscore
    let highscoreRes = await fetcher(`/profile/highscores/retrieve`, { body: { gameName: gameName } });
    let highscoreText = await highscoreRes.text();

    document.getElementById('currentHighscore').innerText = highscoreRes.status == 200 ? numFormatter(highscoreText) : '0';

    // update game statistics
    fetcher(`/stats/games/view`, { body: { gameName: gameName } });

    // setup action button events
    setupActionButtons();
});

function OpenHighscore() {
    window.open(`/leaderboard.php?class=${gameName}`, '_self');
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

function suggestGames(games) {
    const gamesSuggesting = 15;

    let curGameTags = games[gameName].tags;
    let suggestedGames = [];

    // get random games that have a similar tag to the game being played
    for (let x = 0; x < Object.keys(games).length - 1; x += 1) {
        if (suggestGames.length == gamesSuggesting) break;

        let randGame = randomProperty(games);

        if (suggestedGames.includes(randGame)) continue;

        let randGameTags = games[randGame].tags;

        let simTag = randGameTags.find((ele) => curGameTags.includes(ele));

        if (simTag) {
            suggestedGames.push(randGame);
        }
    }

    // if above does not full up gamesSuggesting games, add random ones to fill it in
    while (suggestedGames.length < gamesSuggesting) {
        let randGame = randomProperty(games);

        if (suggestedGames.includes(randGame)) continue;

        suggestedGames.push(randGame);
    }

    let gamesDiv = document.querySelector('.gamesCon');

    suggestedGames.forEach((game) => {
        const data = games[game];

        if (data == null) return '';

        let classlist = data.tags.join(' ');

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        const gameDate = new Date(data.date_added);

        if (gameDate > weekAgo) classlist += ' new';

        gamesDiv.innerHTML += `
            <div name="${game}" id="gameDiv" onclick="location.href = 'class.php?class=${game.replaceAll(' ', '-')}'" class="${classlist}">
                <div class="imageCon">
                    <img src="${data.image}" alt="Totally Science ${game}" title="Totally Science ${game}"/>
                </div>
                <h1 class="innerGameDiv">${game}</h1>
            </div>
        `;
    });

    addArrowListeners();
}

window.addEventListener('click', () => {
    //fix some text inputs not working (eaglercraft)
    document.getElementById('iframe').focus();
});

function addArrowListeners() {
    const arrowLeft = document.querySelector('.arrowLeftCon');
    const arrowRight = document.querySelector('.arrowRightCon');
    const gamesCon = document.querySelector('.gamesCon');

    arrowLeft.addEventListener('click', () => {
        gamesCon.scrollLeft -= Math.min(gamesCon.scrollLeft, 1100);
    });

    arrowRight.addEventListener('click', (e) => {
        arrowLeft.style += 'visibility: visible';

        let remainingSpace = gamesCon.scrollWidth - gamesCon.clientWidth - gamesCon.scrollLeft;

        gamesCon.scrollLeft += Math.min(remainingSpace, 1100);
    });
}

function shareTo(website) {
    let url;
    let gameNameLink = document.location;

    if (website == 'Twitter') {
        url = `https://twitter.com/intent/tweet?url=${gameNameLink}&text=Check%20out%20this%20cool%20game%20I%27m%20playing%20-%20${gameName}&via=TotallyScience&hashtags=TotallyScience&related=TotallyScience`;
    } else if (website == 'Reddit') {
        url = `https://www.reddit.com/submit?url=${gameNameLink}&title=Check%20out%20this%20cool%20game%20I%27m%20playing%20-%20${gameName}`;
    } else if (website == 'Facebook') {
        url = `https://www.facebook.com/sharer/sharer.php?u=${gameNameLink}&hashtag=#totallyscience`;
    } else if (website == 'LinkedIn') {
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${gameNameLink}`;
    } else if (website == 'Whats App') {
        url = `https://web.whatsapp.com/send?text=Check%20out%20this%20cool%20game%20I%27m%20playing%20-%20${gameName}%20${gameNameLink}`;
    } else if (website == 'Mail') {
        url = `mailto:?subject=Check out this cool game I'm playing&body=Here's the link: ${gameNameLink}`;
    }
    window.open(url, '_blank');
}

function shareGame() {
    document.body.innerHTML += `<div id="shareCon">
    <div class="innerCon">
        <h1>Share the fun!</h1>
        <div class="platforms">
            <img onclick="shareTo('Mail')" src="assets/images/icons/shareicons/email.png">
            <img onclick="shareTo('Facebook')" src="assets/images/icons/shareicons/facebook.webp">
            <img onclick="shareTo('Whats App')" src="assets/images/icons/shareicons/whatsapp.png">
            <img onclick="shareTo('Twitter')" src="assets/images/icons/shareicons/twitter.png">
            <img onclick="shareTo('Reddit')" src="assets/images/icons/shareicons/reddit.png">
            <img onclick="shareTo('LinkedIn')" src="assets/images/icons/shareicons/linkedin.png">
        </div>
        <input type="text" onclick="copyLink()" readonly value="${document.location}">
        <div class="buttonsCon">
            <button class="copy" id="copyLinkButton" onclick="copyLink()">Copy</button>
            <button class="cancel" onclick="closeShare()">Cancel</button>
        </div>
    </div>
</div>`;
}

function copyLink() {
    document.getElementById('copyLinkButton').innerHTML = 'Copied.';
    navigator.clipboard.writeText(document.location);
    setTimeout(() => {
        document.getElementById('copyLinkButton').innerHTML = 'Copy';
    }, 1000);
}

function closeShare() {
    var element = document.getElementById('shareCon');

    element.classList.add('hide');
    setTimeout(() => {
        element.parentNode.removeChild(element);
    }, 250);
}