// READY
// Load Games
const gamesDiv = document.getElementById('games');
let games;
let sorted;

let sortObject = (obj) =>
    Object.keys(obj)
        .sort()
        .reduce((res, key) => ((res[key] = obj[key]), res), {});

document.addEventListener('DOMContentLoaded', () => {
    fetch(`../assets/games.json`)
        .then((response) => response.json())
        .then((retrievedGames) => {
            games = retrievedGames;

            loadTopic();
        });
});

async function loadTopic() {
    sorted = sortObject(games);
    gamesDiv.innerHTML = '';
    displayGames();
}

async function displayGames() {
    for (let x = 0; x < Object.keys(sorted).length; x++) {
        let keys = Object.keys(sorted);

        const name = keys[x];
        const data = sorted[keys[x]];

        let classlist = '';
        classlist = data.tags.join(' ');

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        const gameDate = new Date(data.date_added);

        if (gameDate > weekAgo) {
            classlist += ' new';
        }

        const gameBtn = createGameButton(name);

        gamesDiv.innerHTML += gameBtn;
    }
    showPopularGames();
}

function showPopularGames() {
    fetch(`../assets/php/getpopulargames.php`)
        .then((response) => response.text())
        .then((res) => {
            let popularGames = JSON.parse(res);

            for (let i = 0; i < 10; i++) {
                if (document.getElementsByName(popularGames[i][0])) {
                    document.getElementsByName(popularGames[i][0])[0].innerHTML +=
                        "<button id='newbanner'><img src='../assets/images/icons/hotbanner.png'></button>";
                }
            }
        });
}

function createGameButton(game, pin) {
    const data = games[game];

    let classlist = data.tags.join(' ');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const gameDate = new Date(data.date_added);

    let gameBtn = '';

    let buttons = '';

    let onclick = `location.href = 'class.php?class=${game}'`;

    if (gameDate > weekAgo) {
        classlist += ' new';
        buttons += "<button id='newbanner'><img src='../assets/images/icons/newbanner.png'></button>";
    }

    if (classlist.includes('mobile')) {
        gameBtn = `
        <div name="${game}" style="background-image: url(../${data.mobileimage})" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
        </div>
        `;
    } else {
        gameBtn = `
        <div name="${game}" style="display: none" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
        </div>
        `;
    }

    return gameBtn;
}

function search() {
    document.getElementById('searchBarSection').style.display = '';
    document.getElementById('searchBar').focus();
}

function noSearch() {
    document.getElementById('searchBarSection').style.display = 'none';
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', () => {
    scrollTo(0, 0);

    let input = searchBar.value.toUpperCase().split(' ').join('');

    if (input == '' || input == null) {
        loadTopic();
        return;
    }

    const gameButtons = document.getElementsByClassName('mobile');

    let gameShown = false;
    Array.from(gameButtons).forEach((game) => {
        var name = game.getAttribute('name').toUpperCase();
        name = name.split(' ').join('');

        if (name.includes(input)) {
            game.setAttribute('style', `background-image: url(../${games[game.getAttribute('name')].image})`);
            gameShown = true;
        } else {
            game.setAttribute('style', 'display:none');
        }
    });

    // noSearch doesn't exist?
    /*
    if (!gameShown) {
        document.getElementById("noSearch").style.display = '';
    } else {
        document.getElementById("noSearch").style.display = 'none';
    }
    if (gamesDiv.innerHTML == '') {
        document.getElementById("noSearch").style.display = '';
    }
    */
});
