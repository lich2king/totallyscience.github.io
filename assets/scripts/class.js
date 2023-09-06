const urlParams = new URLSearchParams(window.location.search);

let gameName = urlParams.get('class');
if (gameName) {
    gameName = gameName.replaceAll('-', ' ');
} else {
    gameName = '';
}

let likeCount = 0;

async function displayUserData() {
    const pinBtn = document.querySelector('#pin');
    const likeBtn = document.querySelector('#like');
    const pinImg = pinBtn.firstChild;
    const likeImg = likeBtn.firstChild;

    // check if user has liked and/or pinned the game
    let res = await fetcher(`/profile/gamedata/${gameName}`);
    let json = await res.json();

    // set like icon if user has liked it
    if (json.liked) likeImg.setAttribute('src', 'assets/images/icons/like.avif');

    // set pin icon if user has pinned it
    if (json.pinned) pinImg.setAttribute('src', 'assets/images/icons/pin.avif');

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

        let res = await fetcher(`/profile/liked/change`, { body: { gameName: gameName } });

        if (res.status == 200) {
            const likedIcon = 'assets/images/icons/like.avif';
            const notLikedIcon = 'assets/images/icons/likeoutline.avif';

            // check if it is liked by checking current icon
            let isLiked = e.target.firstChild.getAttribute('src') == likedIcon;

            // update icon to match chnaged state
            e.target.firstChild.setAttribute('src', isLiked ? notLikedIcon : likedIcon);

            // set updated like count
            let likeCountEle = document.getElementById('likeCount');

            let prevLikeCount = parseInt(likeCount);
            likeCount = isLiked ? prevLikeCount - 1 : prevLikeCount + 1;

            likeCountEle.innerText = numFormatter(likeCount);
        } else swal('You must login to like the game', swalConfig).then(swalHandler);
    });
    likeBtn.addEventListener('webkitAnimationEnd', () => {
        likeBtn.classList.remove('button-click');
    });

    pinBtn.addEventListener('click', async(e) => {
        e.target.classList.add('button-click');

        let res = await fetcher(`/profile/pinned/change`, { body: { gameName: gameName } });

        if (res.status == 400) {
            swal('You have pinned the max amount of games (3).');
        } else if (res.status == 401 || res.status == 403) {
            swal('You must login to pin the game', swalConfig).then(swalHandler);
        } else {
            const pinnedIcon = 'assets/images/icons/pin.avif';
            const notPinnedIcon = 'assets/images/icons/pinoutline.avif';

            // check if it is pinned by checking current icon
            // update icon to match chnaged state
            let isPinned = e.target.firstChild.getAttribute('src') == pinnedIcon;

            e.target.firstChild.setAttribute('src', isPinned ? notPinnedIcon : pinnedIcon);
        }
    });
    pinBtn.addEventListener('webkitAnimationEnd', () => {
        pinBtn.classList.remove('button-click');
    });
}

window.addEventListener('load', async() => {
    // update navbar to underline game link
    document.getElementById('gamesnav').classList.add('selected');

    // fetch games from jsons
    let retrievedGamesRes = await fetch(`assets/games.json`);
    let retrievedGames = await retrievedGamesRes.json();
    // get data for selected game
    const gameData = retrievedGames[gameName];
    // if the game requested does not exist in the json file redirect
    if (!gameData) window.location.href = '../classes.php';

    // check if user is signed in
    let response = await fetcher(`/auth/check`);

    if (response.status == 200) {
        // display points count in navbar
        let json = await response.json();
        setPointsDisplay(json.points || 0);

        // display user like and pin status of game
        displayUserData();

        const socketUrl = location.host.startsWith('localhost') || location.host.startsWith('127.0.0.1') ? localServer : null;
        let socket = io(socketUrl);

        socket.on('request-introduction', () => {
            socket.emit('respond-introduction', JSON.stringify({ name: json.username, id: json.id, mini: json.activeMini, game: gameName }));

            // FOR ZACH: add id of button that should send chat messages
            // TODO: also allow clicking enter key to send a message
            document.getElementById('sendChat').addEventListener('click', () => {
                // FOR ZACH: add id of textinput here
                let message = document.getElementById('messageBox').value;

                socket.emit('send-message', message);
                document.getElementById('messageBox').value = '';
            });

            document.querySelector('#messageBox').addEventListener('keyup', function(e) {
                if (e.key === 'Enter' && document.getElementById('messageBox').value != '') {
                    let message = document.getElementById('messageBox').value;

                    socket.emit('send-message', message);
                    document.getElementById('messageBox').value = '';
                }
            });

            var isAutoScrolling = true;
            var chatContent = document.getElementById("chatContent");

            // Detect manual scrolling
            chatContent.addEventListener("scroll", function() {
                console.log("Scrolling");
                // Check if the user has manually scrolled to the top
                if (chatContent.scrollHeight - chatContent.scrollTop != chatContent.height) {
                    isAutoScrolling = false;
                    console.log("User scrolled up");
                }
                // Check if the user has manually scrolled back to the bottom
                else if (chatContent.scrollHeight - chatContent.scrollTop == chatContent.height && !isAutoScrolling) {
                    isAutoScrolling = true;
                    console.log("User scrolled down");
                }
                console.log(chatContent.scrollTop);
            });

            socket.on('broadcast-message', (jsonStr) => {
                let json = JSON.parse(jsonStr);

                let message = '';

                if (json.username == null && json.mini == null) {
                    message = `
                        <div class="server">
                            <p class='message'>${json.message}</p>
                        </div>`
                } else if (json.username != null && json.mini != null) {
                    message = `
                    <div>
                        <div class='nameBar'><img src='/assets/minis/JPGs/${json.mini}.avif'>
                            <p>${json.username}</p>
                        </div>
                        <p class='message'>${json.message}</p>
                    </div>`
                }


                chatContent.innerHTML += message;
                console.log(isAutoScrolling);
                if (isAutoScrolling) {
                    chatContent.scrollTop = chatContent.scrollHeight;
                }


                // FOR ZACH: display message
                // json var contains
                // json.message (message body sent by another user)
                // json.username (the username of the sender)
                // json.mini (the active mini of the sender)

                // if json has no value for mini or username, it is a system message such as a user join or leave, display it in a different color
            });

            socket.on('broadcast-user-count', (userCount) => {
                // FOR ZACH: display user count number to the element on the page
                document.getElementById('usersOnline').innerText = userCount;
            });
        });
    }

    const iframe = document.getElementById('iframe');
    // TODO: reduce # of getElementById calls for performance

    // -------
    suggestGames(retrievedGames);
    // ----

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

window.addEventListener('click', (e) => {
    //fix some text inputs not working (eaglercraft)
    if (e.target.id != 'messageBox') {
        document.getElementById('iframe').focus();
    }
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