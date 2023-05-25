const categories = [
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

let token;
let interval;
let newGames = [];

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
let games;
let sorted;

let sortObject = (obj) =>
    Object.keys(obj)
    .sort()
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

window.addEventListener('load', async() => {
    // update underline link in navbar
    document.getElementById('gamesnav').classList.add('selected');

    loadGames();
    loadPartners();

    // check if user is authenticated
    let response = await fetcher(`/auth/check`);
    let result = await response.text();

    if (result == 'A token is required for authentication' || result == 'Invalid Token') {
        token = false;

        // user is not signed into an account
        document.getElementById('timerText').innerHTML = '<a href="/signup.php">Sign up</a> to collect your daily reward!';
    } else {
        token = true;

        loadRewards();
    }
});

async function loadGames() {
    // retrieve games from json file
    let gamesRes = await fetch(`assets/games.json?date=${new Date().getTime()}`);
    games = await gamesRes.json();
    sorted = sortObject(games);

    for (let item in sorted) {
        displayGame(item);
    }

    // if there are any new games, display them
    if (newGames.length > 0) {
        const newGamesContainer = document.getElementById('newGamesCon');

        document.getElementById('newGamesLabel').style.display = '';
        document.getElementById('newGamesHorizontalCon').style.display = '';

        for (let i = 0; i < newGames.length; i++) {
            newGamesContainer.appendChild(createGameButton(newGames[i]));
        }
    }

    loadPopularGames();
    loadLikedGames();

    suggestGames();
    addArrowListeners();
    findLazyImages();
}

async function displayGame(item) {
    const name = item;
    const data = sorted[item];

    // create date object for one week in the past
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7 * 3);

    // create date object for game added timestamp
    const gameDate = new Date(data.date_added);

    // if game is less than a week old, add it to the new games list
    if (gameDate > weekAgo) {
        newGames.push(name);
    }

    // for each game, if it has a tag that matches on of the categories, add it to that container... MAY have multiple!
    for (let category of categories) {
        if (data.tags.join(' ').includes(category)) {
            document.getElementById(`${category}GamesCon`).appendChild(createGameButton(name));
        }
    }

}

async function loadPopularGames() {
    // display popular games
    let popGamesRes = await fetcher(`/stats/games/popular`);

    if (popGamesRes.status == 200) {
        const populargamesContainer = document.getElementById('popularGamesCon');

        let popularGames = await popGamesRes.json();

        for (let i = 0; i < 15; i++) {
            if (popularGames[i].game) {
                populargamesContainer.appendChild(createGameButton(popularGames[i].game, 'hot'));
            }
        }
    }
}

async function loadLikedGames() {
    // load user's liked games
    let userLikedRes = await fetcher(`/profile/liked/get`);

    if (userLikedRes.status == 200) {
        const likedGamesContainer = document.getElementById('likedGamesCon');

        let likedgames = await userLikedRes.json();

        if (likedgames.length > 5) {
            document.getElementById('likedGamesLabel').style.display = '';
            document.getElementById('likedGamesHorizontalCon').style.display = '';

            for (like in likedgames) {
                likedGamesContainer.appendChild(createGameButton(likedgames[like]));
            }
        }
    }
}

async function loadPartners() {
    // load partners
    let partnersRes = await fetcher(`/partners`);
    let partners = await partnersRes.json();

    for (let x = 0; x < partners.length; x++) {
        const backgroundImg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='100%25' height='100%25' fill='%23340060'/%3E%3C/svg%3E`;
        const name = partners[x].name;
        const image = partners[x].image;
        const website = partners[x].website;

        let partnerEle = document.createElement('div');
        partnerEle.tagName = name;
        partnerEle.id = 'gameDiv';
        partnerEle.addEventListener('click', () => {
            window.open(website, '_blank')
        });

        let imageContainer = document.createElement('div');
        imageContainer.classList = 'imageCon partner';

        let img = document.createElement('img');
        img.classList = 'lazy partner';
        img.setAttribute('data-src', image);
        img.src = backgroundImg;
        img.alt = `Totally Science Partner ${name}`;
        img.title = `Totally Science Partner ${name}`;

        let nameEle = document.createElement('h1');
        nameEle.className = 'innerGameDiv';
        nameEle.innerText = ''

        imageContainer.appendChild(img);
        partnerEle.appendChild(imageContainer);
        partnerEle.appendChild(nameEle);

        document.getElementById(`PartnersCon`).appendChild(partnerEle);
    }
}

async function loadRewards() {
    // user is signed in, update points reward accordingly
    let rewardRes = await fetcher(`/points/reward/check`);
    let text = await rewardRes.text();
    let json = JSON.parse(text);

    if (json.isReady) {
        let points = 100;

        if (json.rewardDay >= 6) {
            points = 1000;
        }

        document.getElementById('timerText').innerHTML = `<a onclick="claimReward()" href="javascript:void(null)">Click here</a> to collect your daily reward of ${points} pts!`;
    } else {
        startTimer(json.rewardTime);
    }

    animateBar(json.rewardDay);
}





//
// reward system
//
function startTimer(endTime) {
    clearInterval(interval);

    document.getElementById('timerText').innerHTML = '<span class="loader"></span>Daily Reward In <span id="rewardTimer"></span>';

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

async function claimReward() {
    if (!token) {
        location.href = 'signup.php';
    }

    document.getElementById('timerText').innerHTML = '<span class="loader"></span>';

    let res = await fetcher(`/points/reward/claim`);

    if (res.status == 200) {
        let text = await res.text();
        let json = JSON.parse(text);

        startTimer(json.rewardTime);
        animateBar(json.rewardDay);

        // update points display
        let currentVal = document.getElementById('pointsDisplay').innerText;
        counter('pointsDisplay', parseInt(currentVal), parseInt(currentVal) + parseInt(json.points), 2000);
    }
}

async function suggestGames() {
    // retrieve all pinned games of user
    let pinnedGames = [];
    if (token) {
        let res = await fetcher(`/profile/pinned/get`);
        let text = await res.text();

        pinnedGames = text.split(';');
        pinnedGames = pinnedGames.slice(1);
    }

    let randomGames = [];

    for (let x = 0; x < 3; x++) {
        let randGame = randomProperty(games);

        while (randomGames.includes(randGame) || pinnedGames.includes(randGame)) {
            randGame = randomProperty(games);
        }

        randomGames.push(randGame);
    }

    //first pinned game is always going to be '' so length will always be atleast 1
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
        let gameBtn = createGameButton(game, 'suggested', false);

        document.getElementById('scisuggests').appendChild(gameBtn);
        game = pinnedGames[i];

        if (i <= totalPinned - 1) {
            gameBtn = createGameButton(game, 'pin', false);
        } else {
            gameBtn = createGameButton(game, 'suggested', false);
        }

        document.getElementById('scisuggests').append(gameBtn);
    }
}

function createGameButton(game, pin, lazy) {
    const data = games[game];


    if (data == null) return document.createElement('div');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7 * 3);

    const gameDate = new Date(data.date_added);

    const onclick = `location.href = 'class.php?class=${game.replaceAll(' ', '-')}'`;

    let gameDiv = document.createElement('div');
    gameDiv.setAttribute('tagName', game);
    gameDiv.id = 'gameDiv';
    gameDiv.classList = data.tags.join(' ');
    gameDiv.setAttribute('onclick', onclick);

    if (pin == 'pin') {
        let button = document.createElement('button');
        button.id = 'pin';

        let image = document.createElement('img');
        image.src = '/assets/images/icons/coloredpin.png';

        button.appendChild(image);

        gameDiv.appendChild(button);
    } else if (pin == 'hot') {
        let button = document.createElement('button');
        button.id = 'newbanner';

        let image = document.createElement('img');
        image.src = 'https://totallyscience.co/cdn-cgi/image/height=120,width=220/https:/totallyscience.co/assets/images/icons/hotbanner.png';

        button.appendChild(image);

        gameDiv.appendChild(button);
    } else if (pin == 'hidden') {
        gameDiv.style.display = 'none';
    } else if (pin != 'suggested') {
        gameDiv.classList += 'all'
    }


    if (gameDate > weekAgo) {
        gameDiv.classList += ' new';

        let button = document.createElement('button');
        button.id = 'newbanner';

        let image = document.createElement('img');
        image.src = 'https://totallyscience.co/cdn-cgi/image/height=120,width=220/https:/totallyscience.co/assets/images/icons/newbanner.png';

        button.appendChild(image);

        gameDiv.appendChild(button);
    }

    let backgroundImg = lazy ? `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='100%25' height='100%25' fill='%23340060'/%3E%3C/svg%3E` : data.image;
    let lazyClass = lazy ? 'lazy' : '';

    let imageContainer = document.createElement('div');
    imageContainer.className = 'imageCon';

    let img = document.createElement('img');
    img.setAttribute('data-src', `${data.image.endsWith('.avif') ? data.image : 'https://totallyscience.co/cdn-cgi/image/height=120,width=220/https://totallyscience.co' + data.image}`);
    img.src = backgroundImg;
    img.alt = `Totally Science ${game}`;
    img.title = `Totally Science ${game}`;
    img.className = lazyClass;

    imageContainer.appendChild(img);

    gameDiv.appendChild(imageContainer);

    let header = document.createElement('h1');
    header.className = 'innerGameDiv';
    header.innerText = game;

    gameDiv.appendChild(header);

    return gameDiv;
}

//check for local storage of daily reward
//if it is not over, set endTime to local storage time then count
//if it is over, check database
//if database says it is not over, set local storage to correct time and keep counting

async function addArrowListeners() {
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

async function findLazyImages() {
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
        }, {
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