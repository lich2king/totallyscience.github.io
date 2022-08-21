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
        loadTopic();
    });
});

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
        /*let gamesWithTopic = {};

        for (let game in sorted) {
            if (sorted[game].tags.includes(selectedTopic)) {
                gamesWithTopic[game] = sorted[game];
            }
        }

        sorted = gamesWithTopic;*/
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
    //all games are generated... now add the liked and recent tags to the games
    const gameButtons = document.getElementsByClassName("all");

    await fetch(`/assets/php/game_likes/personallikes.php`).then((response) => response.text()).then((res) => {
        var likedgames = JSON.parse(res);

        Array.from(gameButtons).forEach(game => {
            let liked = false;
            for (like in likedgames) {
                if (likedgames[like][0] == game.getAttribute("name")) {
                    liked = true;
                }
            }

            if (liked) {
                game.classList.add('liked');
            }

        });

    });
    await fetch(`/assets/php/recent_games/recentgames.php`).then((response) => response.text()).then((res) => {
        let recentGames = res.split(";");
        recentGames = recentGames.slice(1);
        const recentContainer = document.getElementById("recentContainer");

        Array.from(gameButtons).forEach(game => {
            let recent = false;

            for (let i = 0; i < recentGames.length; i++) {
                if (recentGames[i] == game.getAttribute("name")) {
                    recent = true;
                }
            }

            if (recent) {
                game.classList.add('recent');
            }
        });
    });
}


const searchBar = document.getElementById('searchBar')
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


    /*gamesDiv.innerHTML = '';
    document.getElementById("noSearch").style.display = 'none';

    let numGames = 0;
    Object.keys(games).forEach((game) => {
        if (numGames < maxGames) {
            if (game.toUpperCase().includes(input)) {
                if (games[game].tags.includes(selectedTopic) || selectedTopic == 'all') {
                    const gameBtn = createGameButton(game);

                    gamesDiv.innerHTML += gameBtn;
                    numGames += 1
                }
            }
        } else {
            return;
        }
    });*/
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

    if (data.gif != null)
        ele.style = `background-image: url(${data.gif})`;
}

function noGif(ele) {
    const game = ele.getAttribute("name");
    const data = games[game];

    if (data.gif != null)
        ele.style = `background-image: url(${data.image})`;
}

function createGameButton(game, pin) {
    const data = games[game];

    let classlist = data.tags.join(' ');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const gameDate = new Date(data.date_added);

    if (gameDate > weekAgo) {
        classlist += ' new';
    }

    let gameBtn = '';
    if (data.tags.includes("gamepass") && pin != "hidden") {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
            <button id="gamelock"><img src="/assets/images/icons/locked.png"></button> 
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    } else if (data.tags.includes("gamepass") && pin == "hidden") {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
            <button id="gamelock"><img src="/assets/images/icons/locked.png"></button> 
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    } else if (pin == "hidden") {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="display:none" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    } else {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    }

    return (gameBtn);

}