// READY

document.getElementById("gamesnav").classList.add("selected");

// Load Games
const gamesDiv = document.getElementById('games');
const maxGames = 500;

let selectedTopic = 'all';
let displayedGames = 0;
let games;
let sorted;
let hasLoaded = false;
let customcategory = false;
let loggedIn = false;



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const category = urlParams.get('category');
if (category != null) {
    selectedTopic = category;

    document.getElementById("topText").style.display = '';
    document.getElementById("topText").innerText = `${category.toUpperCase()} Games`;
    document.getElementsByName('all')[0].classList.add('unselectedCategory');
    document.getElementsByName('all')[0].classList.remove('selectedCategory');
    document.getElementById('searchcat').style.marginTop = "20px";

    customcategory = true;
}


let sortObject = (obj) =>
    Object.keys(obj).sort().reduce((res, key) => ((res[key] = obj[key]), res), {})


document.addEventListener('DOMContentLoaded', () => {
    fetch(`assets/games.json`).then((response) => response.json()).then((retrievedGames) => {
        games = retrievedGames;

        loadCookies();
    });
});

async function loadCookies() {
    await fetch(`assets/php/getCookie.php`).then((response) => response.text()).then((res) => {
        res = JSON.parse(res);
        if (res != null) {
            const isLoggedIn = res['isLoggedIn'];

            if (isLoggedIn == 'true') {
                loggedIn = true;
            }
        }
    });

    //when done
    loadTopic();
}

async function loadTopic() {
    displayedGames = 0;

    document.getElementById("noSearch").style.display = 'none';

    sorted = sortObject(games);

    if (selectedTopic != 'all') {
        if (customcategory) { //solves the problem of doing the category parameter on url
            await displayGames();
        }
        const gameButtons = document.getElementsByClassName("all");

        Array.from(gameButtons).forEach(game => {
            if (game.classList.contains(selectedTopic)) {
                game.setAttribute('style', `background-image: url(${games[game.getAttribute('name')].image})`)
            } else {
                game.setAttribute('style', 'display:none')
            }
        });
    } else {
        gamesDiv.innerHTML = '';
        displayGames();
    }
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

        let gameBtn;
        if (customcategory) {
            gameBtn = createGameButton(name, "hidden");
        } else {
            gameBtn = createGameButton(name);
        }

        gamesDiv.innerHTML += gameBtn;
    }


    await fetch(`/assets/php/getpopulargames.php`).then((response) => response.text()).then((res) => {
        let popularGames = JSON.parse(res);

        for (let i = 0; i < 10; i++) {
            if (document.getElementsByName(popularGames[i][0])) {
                document.getElementsByName(popularGames[i][0])[0].classList.add('popular');
                document.getElementsByName(popularGames[i][0])[0].innerHTML += "<button id='newbanner'><img src='/assets/images/icons/hotbanner.png'></button>";
            }
        }
    });

    //only get recent and liked games if logged in
    if (loggedIn) {
        //all games are generated... now add the liked and recent tags to the games
        const gameButtons = document.getElementsByClassName("all");

        await fetch(`/assets/php/class_likes/personallikes.php`).then((response) => response.text()).then((res) => {
            var likedgames = JSON.parse(res);

            for (like in likedgames) {
                if (document.getElementsByName(likedgames[like][0])) {
                    document.getElementsByName(likedgames[like][0])[0].classList.add('liked');
                }
            }
        });
        await fetch(`/assets/php/recent_classes/recentclasses.php`).then((response) => response.text()).then((res) => {
            let recentGames = res.split(";");
            recentGames = recentGames.slice(1);

            for (let i = 0; i < recentGames.length; i++) {
                if (document.getElementsByName(recentGames[i]).length > 0) {
                    document.getElementsByName(recentGames[i])[0].classList.add('recent');
                }
            }
        });
    }
}


const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', () => {
    scrollTo(0, 0);

    let input = (searchBar.value.toUpperCase()).split(' ').join('');;

    if (input == '' || input == null) {
        loadTopic();
        return;
    }

    const gameButtons = document.getElementsByClassName("all");

    let gameShown = false;
    Array.from(gameButtons).forEach(game => {
        var name = game.getAttribute("name").toUpperCase();
        name = name.split(' ').join('');

        if (name.includes(input) && game.classList.contains(selectedTopic)) {
            game.setAttribute('style', `background-image: url(${games[game.getAttribute('name')].image})`)
            gameShown = true;
        } else {
            game.setAttribute('style', 'display:none')
        }
    });
    if (!gameShown) {
        document.getElementById("noSearch").style.display = '';
    } else {
        document.getElementById("noSearch").style.display = 'none';
    }
    if (gamesDiv.innerHTML == '') {
        document.getElementById("noSearch").style.display = '';
    }
})


// Category buttons
const buttons = document.querySelectorAll('.categoryButton');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        if (customcategory) {
            document.getElementById("topText").style.display = 'none';
            document.getElementById('searchcat').style.marginTop = "80px";
            customcategory = false;
        }

        if (e.target.name != selectedTopic) {
            window.scrollTo(0, 0);
        }

        selectedTopic = e.target.name;

        const buttons = document.querySelectorAll('.categoryButton');

        buttons.forEach((btn) => {
            btn.classList.add('unselectedCategory');
            btn.classList.remove('selectedCategory');
        })

        const selected = document.getElementsByName(selectedTopic)[0];
        selected.classList.add('selectedCategory');
        selected.classList.remove('unselectedCategory');

        document.getElementById('searchBar').value = '';

        loadTopic();
    })
})

function changeToGif(ele) {
    const game = ele.getAttribute("name");
    const data = games[game];

    if (data.gif != null) ele.style = `background-image: url(${data.gif})`;
}

function noGif(ele) {
    const game = ele.getAttribute("name");
    const data = games[game];

    if (data.gif != null) ele.style = `background-image: url(${data.image})`;
}

function createGameButton(game, pin) {
    const data = games[game];

    let classlist = data.tags.join(' ');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const gameDate = new Date(data.date_added);

    let gameBtn = '';

    let buttons = '';

    let onclick = `location.href = 'class?class=${game}'`;

    if (pin == "pin") {
        buttons += "<button id='pin'><img src='/assets/images/icons/coloredpin.png'></button>";
    }

    if (gameDate > weekAgo) {
        classlist += ' new';
        buttons += "<button id='newbanner'><img src='/assets/images/icons/newbanner.png'></button>";
    }

    if (pin != "suggested") {
        classlist += ' all';
    }

    if (pin != "hidden") {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    } else {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="display: none" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    }

    return (gameBtn);
}