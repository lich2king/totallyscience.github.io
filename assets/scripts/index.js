let token = JSON.parse(authToken);
let interval;
let popupInterval;

// featured games slides code
let shouldAutoSwitch = true;
let slideIndex = 1;
const slides = document.getElementsByClassName('featureSlot');
const switchSlide = (n) => {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = '';
};
const plusSlides = (n) => {
    shouldAutoSwitch = false;
    switchSlide((slideIndex += n));
};
const autoPlusSlides = (n) => {
    switchSlide((slideIndex += n));
};
const autoSwitch = () => {
    if (shouldAutoSwitch) {
        setTimeout(() => {
            if (shouldAutoSwitch) {
                autoPlusSlides(1);
                autoSwitch();
            }
        }, 2500);
    }
};

// DISABLED BECAUSE IT NEEDS TO BE RE-PROGRAMMED
switchSlide(slideIndex);
autoSwitch();

// Load Games
const gamesDiv = document.getElementById('games');
const maxGames = 50;

let selectedTopic = 'all';
let displayedGames = 0;
let games;
let partners;
let sorted;
let hasLoaded = false;
let sortObject = (obj) =>
    Object.keys(obj)
        .sort()
        .reduce((res, key) => ((res[key] = obj[key]), res), {});

window.addEventListener('load', async () => {
    let gamesRes = await fetch(`assets/games.json?date=${new Date().getTime()}`);
    let retrievedGames = await gamesRes.json();

    let partnersRes = await fetch(`assets/partners.json?date=${new Date().getTime()}`);
    partners = await partnersRes.json();

    // update underline link in navbar
    document.getElementById('gamesnav').classList.add('selected');

    // check if user is signed in
    if (token) {
        let rewardRes = await fetcher(`${activeServer}/points/reward/check`);
        let text = await rewardRes.text();
        let json = JSON.parse(text);

        if (json.isReady) {
            document.getElementById('ignoreReward').style.display = 'none';

            let points = 100;

            if (json.rewardDay >= 6) {
                points = 1000;
            }

            document.getElementById('popPoints').innerText = points;

            // update visibiliy of checkmarks on days that you have passed
            for (let i = 0; i <= json.rewardDay; i++) {
                document.getElementsByClassName('popCheck')[i].style = 'visibility: visible;';
            }

            for (let i = 6; i > json.rewardDay; i--) {
                document.getElementsByClassName('popCheck')[i].style = 'visibility: hidden;';
            }

            document.getElementById('claimRewardB').innerText = 'Claim Reward';
            document.getElementById('dailyRewardPopup').style.display = '';

            // start the countdown til next reward displayed on the popup
            // endtime should be 24 hours in the future
            let endTime = Math.floor(Date.now() / 1000 + 86400);

            popupInterval = setInterval(() => {
                // divide by 1000 to get seconds
                let currentTime = Math.floor(Date.now() / 1000);

                let remainingTime = endTime - currentTime;

                let seconds = Math.floor(remainingTime % 60)
                    .toString()
                    .padStart(2, '0');
                let minutes = Math.floor((remainingTime / 60) % 60)
                    .toString()
                    .padStart(2, '0');
                let hours = Math.floor((remainingTime / (60 * 60)) % 24)
                    .toString()
                    .padStart(2, '0');

                document.getElementById('popTimer').innerText = hours + ':' + minutes + ':' + seconds;
            }, 1000);
        }

        animateBar(json.rewardDay);
        startTimer(json.rewardTime);
    } else {
        // user is not signed into an account

        // if they have dismissed the reward popup in the past, leave them alone
        // otherwise send the popup offering them the reward
        if (!localStorage.getItem('ignoreReward')) {
            // show them the popup
            document.getElementById('dailyRewardPopup').style.display = '';

            // start the countdown til next reward displayed on the popup
            // endtime should be 24 hours in the future
            let endTime = Math.floor(Date.now() / 1000 + 86400);

            popupInterval = setInterval(() => {
                // divide by 1000 to get seconds
                let currentTime = Math.floor(Date.now() / 1000);

                let remainingTime = endTime - currentTime;

                let seconds = Math.floor(remainingTime % 60)
                    .toString()
                    .padStart(2, '0');
                let minutes = Math.floor((remainingTime / 60) % 60)
                    .toString()
                    .padStart(2, '0');
                let hours = Math.floor((remainingTime / (60 * 60)) % 24)
                    .toString()
                    .padStart(2, '0');

                document.getElementById('popTimer').innerText = hours + ':' + minutes + ':' + seconds;
            }, 1000);
        }
    }

    games = retrievedGames;
    loadCookies();
});

//
// reward system
//
function startTimer(endTime) {
    clearInterval(interval);

    interval = setInterval(() => {
        // divide by 1000 to get seconds
        let currentTime = Math.floor(Date.now() / 1000);

        let remainingTime = endTime - currentTime;

        if (remainingTime < 0) {
            document.getElementById('rewardTimer').innerText = '00:00:00';
            clearInterval(interval);
            return;
        }

        let seconds = Math.floor(remainingTime % 60)
            .toString()
            .padStart(2, '0');
        let minutes = Math.floor((remainingTime / 60) % 60)
            .toString()
            .padStart(2, '0');
        let hours = Math.floor((remainingTime / (60 * 60)) % 24)
            .toString()
            .padStart(2, '0');

        document.getElementById('rewardTimer').innerText = hours + ':' + minutes + ':' + seconds;
    }, 1000);
}

function animateBar(day) {
    const rewardBar = document.getElementById('rewardDayBar');

    let w = (100 / 7) * (day + 1);

    rewardBar.style.width = `${w}%`;
    rewardBar.style.borderTopRightRadius = `0px`;
    rewardBar.style.borderBottomRightRadius = `0px`;

    if (day == 6) {
        rewardBar.style.borderTopRightRadius = `15px`;
        rewardBar.style.borderBottomRightRadius = `15px`;
    }
}

function ignorePopReward() {
    // called when "ignore pop reward" is clicked on the popup
    localStorage.setItem('ignoreReward', true);
    document.getElementById('dailyRewardPopup').style.display = 'none';
}

async function claimReward() {
    if (!token) {
        location.href = 'signup.php';
    }

    let res = await fetcher(`${activeServer}/points/reward/claim`);

    if (res.status == 200) {
        let text = await res.text();
        let json = JSON.parse(text);

        startTimer(json.rewardTime);
        animateBar(json.rewardDay);

        // update points display
        let currentVal = document.getElementById('pointsDisplay').innerText;
        counter('pointsDisplay', parseInt(currentVal), parseInt(currentVal) + parseInt(json.points), 2000);
    }

    document.getElementById('dailyRewardPopup').style.display = 'none';
    clearInterval(popupInterval);
}

async function loadCookies() {
    //when done
    loadTopic();
    suggestGames();
}

function loadTopic() {
    displayedGames = 0;

    document.getElementById('noSearch').style.display = 'none';

    sorted = sortObject(games);

    if (selectedTopic != 'all') {
        const gameButtons = document.getElementsByClassName('all');

        Array.from(gameButtons).forEach((game) => {
            if (game.classList.contains(selectedTopic)) {
                game.setAttribute('style', `background-image: url(${games[game.getAttribute('name')].image})`);
            } else {
                game.setAttribute('style', 'display:none');
            }
        });
    } else {
        gamesDiv.innerHTML = '';
        displayGames();
    }
}

async function displayGames() {
    //First check if there are any new games... if so, put them in the new games category

    let categories = [
        'multiplayer',
        'car',
        'casual',
        'action',
        'shooting',
        'puzzle',
        'classic',
        'sport',
        'clicker',
        'escape',
        '2',
        'horror',
        'hard',
        'music',
        'flash',
    ];
    let categoriesNames = [
        'Multiplayer',
        'Driving',
        'Casual',
        'Action',
        'Shooting',
        'Puzzle',
        'Classic',
        'Sport',
        'Clicker',
        'Escape',
        '2 Player',
        'Horror',
        'Impossible',
        'Music',
        'Flash',
    ];

    let arrowContainer =
        '<div class="arrowsCon"><div class="arrowCon arrowLeftCon" id="arrowLeft" style="visibility: hidden;"><img class="arrow" src="/assets/images/left-arrow.png"></div><div class="arrowCon arrowRightCon" id="arrowRight" ><img class="arrow" src="/assets/images/right-arrow.png"></div></div>';

    //Then for each category (except mobile and a few others), make the category container then add games

    for (let i = 0; i < categories.length; i++) {
        gamesDiv.innerHTML += `<h1>${categoriesNames[i]} Games <a href="/classes?category=${categories[i]}">View More</a></h1>`;

        let row = document.createElement('div');
        row.classList.add('horizontalCon');
        let gamesContainer = document.createElement('div');
        gamesContainer.classList.add('gamesCon');
        gamesContainer.id = `${categories[i]}GamesCon`;
        //add the arrows to the horizontal Con
        row.innerHTML += arrowContainer;

        row.appendChild(gamesContainer);
        gamesDiv.appendChild(row);
    }

    let newGames = [];
    let miscGames = [];
    for (let x = 0; x < Object.keys(sorted).length; x++) {
        let keys = Object.keys(sorted);
        const name = keys[x];

        const data = sorted[keys[x]];

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7 * 3);

        const gameDate = new Date(data.date_added);

        if (gameDate > weekAgo) {
            newGames.push(name);
        }

        //for each game, if it has a tag that matches on of the categories, add it to that container... MAY have multiple!
        let hasCategory = false;
        for (let i = 0; i < categories.length; i++) {
            if (data.tags.join(' ').includes(categories[i])) {
                hasCategory = true;
                document.getElementById(`${categories[i]}GamesCon`).innerHTML += createGameButton(name);
            }
        }
        if (!hasCategory) {
            //give them misc
            miscGames.push(name);
        }
    }

    if (miscGames.length > 0) {
        gamesDiv.innerHTML += `<h1>Random Games <a href="/classes?category=random">View More</a></h1>`;

        let row = document.createElement('div');
        row.classList.add('horizontalCon');
        let gamesContainer = document.createElement('div');
        gamesContainer.classList.add('gamesCon');
        //add the arrows to the horizontal Con
        row.innerHTML += arrowContainer;
        //for each element in newGames, add the game to the horizontalCon
        for (let i = 0; i < miscGames.length; i++) {
            gamesContainer.innerHTML += createGameButton(miscGames[i]);
        }
        row.appendChild(gamesContainer);
        gamesDiv.appendChild(row);
    }

    //liked games
    if (token) {
        let recentRow = document.createElement('div');
        recentRow.classList.add('horizontalCon');
        let recentGamesContainer = document.createElement('div');
        recentGamesContainer.classList.add('gamesCon');
        //add the arrows to the horizontal Con
        recentRow.innerHTML += arrowContainer;

        let length = 0;

        let userLikedRes = await fetcher(`${activeServer}/profile/liked/get`);
        let likedgames = await userLikedRes.json();

        length = likedgames.length;
        if (likedgames.length > 0) {
            for (like in likedgames) {
                if (document.getElementsByName(likedgames[like]).length > 0) {
                    recentGamesContainer.innerHTML += createGameButton(likedgames[like]);
                }
            }
        }

        if (length > 5) {
            recentRow.appendChild(recentGamesContainer);
            gamesDiv.prepend(recentRow);
            console.log(recentGamesContainer);
            console.log('here');
            console.log(gamesDiv);
            gamesDiv.innerHTML = `<h1>Liked Games</h1>` + gamesDiv.innerHTML;
        }
    }

    //popular games
    let row = document.createElement('div');
    row.classList.add('horizontalCon');
    let gamesContainer = document.createElement('div');
    gamesContainer.classList.add('gamesCon');
    //add the arrows to the horizontal Con
    row.innerHTML += arrowContainer;
    //for each popular game, add the game to the horizontalCon

    let popGamesRes = await fetcher(`${activeServer}/stats/games/popular`);

    if (popGamesRes.status == 200) {
        let text = await popGamesRes.text();
        let popularGames = JSON.parse(text);

        for (let i = 0; i < 15; i++) {
            const gameName = popularGames[i].game;
            if (gameName != null) {
                gamesContainer.innerHTML += createGameButton(gameName, 'hot');
            }
        }
    }

    row.appendChild(gamesContainer);
    gamesDiv.prepend(row);
    gamesDiv.innerHTML = `<h1>Popular Games</h1>` + gamesDiv.innerHTML;

    if (newGames.length > 0) {
        let row = document.createElement('div');
        row.classList.add('horizontalCon');
        let gamesContainer = document.createElement('div');
        gamesContainer.classList.add('gamesCon');
        //add the arrows to the horizontal Con
        row.innerHTML += arrowContainer;
        //for each element in newGames, add the game to the horizontalCon
        for (let i = 0; i < newGames.length; i++) {
            gamesContainer.innerHTML += createGameButton(newGames[i]);
        }
        row.appendChild(gamesContainer);
        gamesDiv.prepend(row);
        gamesDiv.innerHTML = `<h1>New Games <a href="/classes?category=new">View More</a></h1>` + gamesDiv.innerHTML;
    }

    //Partners
    gamesDiv.innerHTML += `<h1>Partners <a href="/partners">View More</a></h1>`;

    let partnerRow = document.createElement('div');
    partnerRow.classList.add('horizontalCon');
    let partnerGamesContainer = document.createElement('div');
    partnerGamesContainer.classList.add('gamesCon');
    partnerGamesContainer.id = `PartnersCon`;
    //add the arrows to the horizontal Con
    partnerRow.innerHTML += arrowContainer;

    partnerRow.appendChild(partnerGamesContainer);
    gamesDiv.appendChild(partnerRow);

    for (let x = 0; x < Object.keys(partners).length; x++) {
        let keys = Object.keys(partners);
        const name = keys[x];
        const image = partners[keys[x]].image;
        const website = partners[keys[x]].website;

        const backgroundImg =
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='100%25' height='100%25' fill='%23340060'/%3E%3C/svg%3E";

        const partnerButton = `<div name="${name}" id="gameDiv" onclick="window.open('${website}', target='_blank')"location.href = '${website}'">
        <div class="imageCon">
            <img class="lazy partner" data-src="${image}" src="${backgroundImg}" alt="Totally Science Partner ${name}" title="Totally Science Partner ${name}"/>
        </div>
        <h1 class="innerGameDiv">${name}</h1>
    </div>`;

        document.getElementById(`PartnersCon`).innerHTML += partnerButton;
    }

    addArrowListeners();
    findLazyImages();
}

async function suggestGames() {
    // retrieve all pinned games of user
    let res = await fetcher(`${activeServer}/profile/pinned/get`);
    let text = await res.text();

    let pinnedGames = text.split(';');
    let randomGames = [];

    for (let x = displayedGames; x < displayedGames + 3; x++) {
        let randGame = randomProperty(games);

        while (randomGames.includes(randGame) || pinnedGames.includes(randGame)) {
            randGame = randomProperty(games);
        }

        randomGames.push(randGame);
    }

    //first pinned game is always going to be '' so length will always be atleast 1
    pinnedGames = pinnedGames.slice(1);
    let totalPinned = pinnedGames.length;

    if (pinnedGames.length < 3) {
        let generateGames = 3 - pinnedGames.length;
        for (let i = 0; i < generateGames; i++) {
            let randGame = randomProperty(games);

            while (randomGames.includes(randGame) || pinnedGames.includes(randGame)) {
                randGame = randomProperty(games);
            }

            pinnedGames.push(randGame);
        }
    }

    document.getElementById('scisuggests').innerHTML = '';
    for (let i = 0; i < 3; i++) {
        let game = randomGames[i];
        let gameBtn = createGameButton(game, 'suggested', 'notlazy');

        document.getElementById('scisuggests').innerHTML += gameBtn;
        game = pinnedGames[i];

        if (i <= totalPinned - 1) {
            gameBtn = createGameButton(game, 'pin', 'notlazy');
        } else {
            gameBtn = createGameButton(game, 'suggested', 'notlazy');
        }

        document.getElementById('scisuggests').innerHTML += gameBtn;
    }
}

function createGameButton(game, pin, lazy) {
    const data = games[game];

    if (data == null) return '';

    //console.log(game);

    //console.log(data.tags.join(' '));

    let classlist = data.tags.join(' ');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7 * 3);

    const gameDate = new Date(data.date_added);

    let gameBtn = '';
    let buttons = '';

    let onclick = `location.href = 'class.php?class=${game}'`;

    let backgroundImg =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='100%25' height='100%25' fill='%23340060'/%3E%3C/svg%3E";
    let lazyClass = 'lazy';

    if (pin == 'pin') {
        buttons += "<button id='pin'><img src='/assets/images/icons/coloredpin.png'></button>";
    }

    if (pin == 'hot') {
        buttons += "<button id='newbanner'><img src='/assets/images/icons/hotbanner.png'></button>";
    }

    if (gameDate > weekAgo) {
        classlist += ' new';
        buttons += "<button id='newbanner'><img src='/assets/images/icons/newbanner.png'></button>";
    }

    if (pin != 'suggested' && pin != 'pin') {
        classlist += ' all';
    }

    if (lazy == 'notlazy') {
        backgroundImg = data.image;
        lazyClass = '';
    }

    if (pin != 'hidden') {
        gameBtn = `
        <div name="${game}" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <div class="imageCon">
                <img class="${lazyClass}" data-src="${data.image}" src="${backgroundImg}" alt="Totally Science ${game}" title="Totally Science ${game}"/>
            </div>
            <h1 class="innerGameDiv">${game}</h1>
        </div>
        `;
    } else {
        gameBtn = `
        <div name="${game}" id="gameDiv" style="display: none;" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <div class="imageCon">
                <img class="${lazyClass}" data-src="${data.image}" src="${backgroundImg}' width='1' height='1'%3E%3Crect width='100%25' height='100%25' fill='%23340060'/%3E%3C/svg%3E" alt="Totally Science ${game}" title="Totally Science ${game}"/>
            </div>
            <h1 class="innerGameDiv">${game}</h1>
        </div>
        `;
    }

    return gameBtn;
}

//check for local storage of daily reward
//if it is not over, set endTime to local storage time then count
//if it is over, check database
//if database says it is not over, set local storage to correct time and keep counting

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

function findLazyImages() {
    // Get all the lazy images
    const lazyImages = document.querySelectorAll('.lazy');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    entry.target.classList.remove('lazy');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            // Start loading the images when they are 10% visible
            threshold: 0.1,

            // Start loading the images when they are 500 pixels away from the viewport
            rootMargin: '500px 0px',
        }
    );

    lazyImages.forEach((image) => {
        observer.observe(image);
    });
}
