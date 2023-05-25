document.getElementById('gamesnav').classList.add('selected');

let token;

window.addEventListener('load', async() => {
    let response = await fetcher(`/auth/check`);
    let result = await response.text();

    if (result == 'A token is required for authentication' || result == 'Invalid Token') {
        token = false;
    } else {
        token = JSON.parse(result);
    }
});

// Load Games
const gamesDiv = document.getElementById('games');
const maxGames = 500;

let selectedTopic = 'all';
let displayedGames = 0;
let games;
let sorted;
let hasLoaded = false;
let customcategory = false;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get('category');
const search = urlParams.get('search');

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

if (search != null) {
    const input = document.getElementById('searchBar');
    input.focus();
    input.select();
}

if (category != null) {
    selectedTopic = category;

    document.getElementById('topText').style.display = '';
    if (categories[categories.indexOf(category)] > -1) {
        document.getElementById('topText').innerText = `${categories[categories.indexOf(category)].toUpperCase()} Games`;
    } else {
        document.getElementById('topText').innerText = `${category.toUpperCase()} Games`;
    }
    document.getElementById('searchcat').style.display = 'none';

    customcategory = true;
}

let sortObject = (obj) =>
    Object.keys(obj)
    .sort()
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

document.addEventListener('DOMContentLoaded', () => {
    fetch(`assets/games.json?date=${new Date().getTime()}`)
        .then((response) => response.json())
        .then((retrievedGames) => {
            games = retrievedGames;

            loadCookies();
        });
});

async function loadCookies() {
    //when done
    loadTopic();
}

async function loadTopic() {
    displayedGames = 0;

    document.getElementById('noSearch').style.display = 'none';

    sorted = sortObject(games);

    if (selectedTopic != 'all') {
        if (customcategory) {
            //solves the problem of doing the category parameter on url
            document.getElementsByTagName(
                'title'
            )[0].innerHTML = `Totally Science - ${category.toUpperCase()} Games || Play ${category} Games on Totally Science`;
            await displayGames();
        }

        const filteredGameCon = document.getElementById('filteredGames');

        const gameButtons = filteredGameCon.querySelectorAll('.all');

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

    let arrowContainer =
        '<div class="arrowsCon"><div class="arrowCon arrowLeftCon" id="arrowLeft" style="visibility: hidden;"><img class="arrow" src="/assets/images/left-arrow.png"></div><div class="arrowCon arrowRightCon" id="arrowRight" ><img class="arrow" src="/assets/images/right-arrow.png"></div></div>';

    //Then for each category (except mobile and a few others), make the category container then add games

    for (let i = 0; i < categories.length; i++) {
        gamesDiv.innerHTML += `<h1>${capitalizeFirstLetter(categories[i])} Games <a href="/classes.php?category=${categories[i]}">View More</a></h1>`;

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

    const filteredGameCon = document.getElementById('filteredGames');

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

        filteredGameCon.appendChild(createGameButton(name, 'filtered'));

        //for each game, if it has a tag that matches on of the categories, add it to that container... MAY have multiple!
        let hasCategory = false;
        for (let i = 0; i < categories.length; i++) {
            if (data.tags.join(' ').includes(categories[i])) {
                hasCategory = true;
                document.getElementById(`${categories[i]}GamesCon`).appendChild(createGameButton(name));
            }
        }
        if (!hasCategory) {
            //give them misc
            miscGames.push(name);
        }
    }
    if (miscGames.length > 0) {
        gamesDiv.innerHTML += `<h1>Random Games <a href="/classes.php?category=random">View More</a></h1>`;

        let row = document.createElement('div');
        row.classList.add('horizontalCon');
        let gamesContainer = document.createElement('div');
        gamesContainer.classList.add('gamesCon');
        //add the arrows to the horizontal Con
        row.innerHTML += arrowContainer;
        //for each element in newGames, add the game to the horizontalCon
        for (let i = 0; i < miscGames.length; i++) {
            gamesContainer.appendChild(createGameButton(miscGames[i]));
        }
        row.appendChild(gamesContainer);
        gamesDiv.appendChild(row);
    }

    //recent games

    //for each popular game, add the game to the horizontalCon
    if (token) {
        let recentRow = document.createElement('div');
        recentRow.classList.add('horizontalCon');
        let recentGamesContainer = document.createElement('div');
        recentGamesContainer.classList.add('gamesCon');
        //add the arrows to the horizontal Con
        recentRow.innerHTML += arrowContainer;

        let length = 0;

        let userLikedRes = await fetcher(`/profile/liked/get`);
        let likedgames = await userLikedRes.json();

        length = likedgames.length;
        if (likedgames.length > 0) {
            for (like in likedgames) {
                if (document.getElementsByName(likedgames[like]).length > 0) {
                    recentGamesContainer.appendChild(createGameButton(likedgames[like]));
                }
            }
        }

        if (length > 5) {
            recentRow.appendChild(recentGamesContainer);
            gamesDiv.prepend(recentRow);
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

    let popGamesRes = await fetcher(`/stats/games/popular`);

    if (popGamesRes.status == 200) {
        let text = await popGamesRes.text();
        let popularGames = JSON.parse(text);

        for (let i = 0; i < 15; i++) {
            const gameName = popularGames[i].game;
            if (gameName != null) {
                gamesContainer.appendChild(createGameButton(gameName, 'hot'));
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
            gamesContainer.appendChild(createGameButton(newGames[i]));
        }
        row.appendChild(gamesContainer);
        gamesDiv.prepend(row);
        gamesDiv.innerHTML = `<h1>New Games <a href="/classes.php?category=new">View More</a></h1>` + gamesDiv.innerHTML;
    }

    //Make new games last 3 weeks
    //UNSORT THE GAMES
    addArrowListeners();
    findLazyImages();
}

const searchBar = document.getElementById('searchBar');
var typingTimer;
var doneTypingInterval = 1000; // Time in milliseconds (1 second)

searchBar.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
        let input = searchBar.value;

        zaraz.track("search", { input: input, user: token.id });
    }, doneTypingInterval);

    scrollTo(0, 0);

    let input = searchBar.value.toUpperCase().split(' ').join('');

    document.getElementById('filteredGames').style.display = 'none';
    if (input != '') {
        document.getElementById('filteredGames').style.display = '';
    }

    const gameButtons = document.getElementById('filteredGames').getElementsByClassName('all');

    let gameShown = false;
    Array.from(gameButtons).forEach((game) => {
        var name = game.getAttribute('name').toUpperCase();
        var keywords = game.getAttribute('keywords').toUpperCase();
        name = name.split(' ').join('');

        if ((name.includes(input) || keywords.includes(input)) && game.classList.contains(selectedTopic)) {
            game.style.display = '';
            gameShown = true;
        } else {
            game.style.display = 'none';
        }
    });
    if (!gameShown) {
        document.getElementById('noSearch').style.display = '';
    } else {
        document.getElementById('noSearch').style.display = 'none';
    }
    if (gamesDiv.innerHTML == '') {
        document.getElementById('noSearch').style.display = '';
    }
});

function createGameButton(game, pin, lazy) {
    const data = games[game];


    if (data == null) return document.createElement('div');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7 * 3);

    const gameDate = new Date(data.date_added);

    const onclick = `location.href = 'class.php?class=${game.replaceAll(' ', '-')}'`;

    let gameDiv = document.createElement('div');
    gameDiv.setAttribute('name', game);
    gameDiv.id = 'gameDiv';
    gameDiv.classList = data.tags.join(' ') + ' all';
    gameDiv.setAttribute('onclick', onclick);
    if (data.keywords != null) { gameDiv.setAttribute('keywords', data.keywords) };

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
        gameDiv.classlist += 'all'
    }


    if (gameDate > weekAgo) {
        gameDiv.classlist += ' new';

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
    img.classList.add(lazyClass);

    imageContainer.appendChild(img);

    gameDiv.appendChild(imageContainer);

    let header = document.createElement('h1');
    header.className = 'innerGameDiv';
    header.innerText = game;

    gameDiv.appendChild(header);

    return gameDiv;
}

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