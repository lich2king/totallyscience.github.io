// READY

document.getElementById('gamesnav').classList.add('selected');

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
const search = urlParams.get('search');


let categories = ["multiplayer", "car", "casual", "action", "shooting", "puzzle", "classic", "sport", "clicker", "escape", "2", "horror", "hard", "music", "flash"];
let categoriesNames = ["Multiplayer", "Driving", "Casual", "Action", "Shooting", "Puzzle", "Classic", "Sport", "Clicker", "Escape", "2 Player", "Horror", "Impossible", "Music", "Flash"];


if (search != null) {
    const input = document.getElementById('searchBar');
    input.focus();
    input.select();
}

if (category != null) {

    selectedTopic = category;

    document.getElementById('topText').style.display = '';
    if (categoriesNames[categories.indexOf(category)] > -1) {
        document.getElementById('topText').innerText = `${categoriesNames[categories.indexOf(category)].toUpperCase()} Games`;
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
    res = JSON.parse(authToken);

    if (res != null) {
        const isLoggedIn = res['isLoggedIn'];

        if (isLoggedIn == 'true') {
            loggedIn = true;
        }
    }

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
            await displayGames();
        }

        const filteredGameCon = document.getElementById('filteredGames');

        const gameButtons = filteredGameCon.querySelectorAll('.all');

        Array.from(gameButtons).forEach((game) => {
            console.log(game);
            console.log(game.classList);
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



    let arrowContainer = '<div class="arrowsCon"><div class="arrowCon arrowLeftCon" id="arrowLeft" style="visibility: hidden;"><img class="arrow" src="/assets/images/left-arrow.png"></div><div class="arrowCon arrowRightCon" id="arrowRight" ><img class="arrow" src="/assets/images/right-arrow.png"></div></div>'



    //Then for each category (except mobile and a few others), make the category container then add games



    for (let i = 0; i < categories.length; i++) {


        gamesDiv.innerHTML += `<h1>${categoriesNames[i]} Games <a href="/classes?category=${categories[i]}">View More</a></h1>`

        let row = document.createElement("div");
        row.classList.add("horizontalCon");
        let gamesContainer = document.createElement("div");
        gamesContainer.classList.add("gamesCon");
        gamesContainer.id = (`${categories[i]}GamesCon`);
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
        weekAgo.setDate(weekAgo.getDate() - 7);

        const gameDate = new Date(data.date_added);

        if (gameDate > weekAgo) {
            newGames.push(name);
        }

        filteredGameCon.innerHTML += createGameButton(name, "filtered");
        console.log("Filtered in:");
        console.log(name);

        //for each game, if it has a tag that matches on of the categories, add it to that container... MAY have multiple!
        let hasCategory = false;
        for (let i = 0; i < categories.length; i++) {
            console.log(name);
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
        gamesDiv.innerHTML += `<h1>Random Games <a href="/classes.php?category=random">View More</a></h1>`;

        let row = document.createElement("div");
        row.classList.add("horizontalCon");
        let gamesContainer = document.createElement("div");
        gamesContainer.classList.add("gamesCon");
        //add the arrows to the horizontal Con
        row.innerHTML += arrowContainer;
        //for each element in newGames, add the game to the horizontalCon
        for (let i = 0; i < miscGames.length; i++) {
            console.log(miscGames[i]);
            gamesContainer.innerHTML += createGameButton(miscGames[i]);
            console.log(row);
        }
        row.appendChild(gamesContainer);
        gamesDiv.appendChild(row);
    }


    //recent games



    //for each popular game, add the game to the horizontalCon
    if (loggedIn) {
        let recentRow = document.createElement("div");
        recentRow.classList.add("horizontalCon");
        let recentGamesContainer = document.createElement("div");
        recentGamesContainer.classList.add("gamesCon");
        //add the arrows to the horizontal Con
        recentRow.innerHTML += arrowContainer;

        fetcher(`/assets/php/recent_classes/recentclasses.php`)
            .then((response) => response.text())
            .then((res) => {
                let recentGames = res.split(';');
                recentGames = recentGames.slice(1);

                for (let i = 0; i < recentGames.length; i++) {
                    console.log(recentGames[i]);
                    const gameName = recentGames[i];
                    if (gameName != null) {
                        recentGamesContainer.innerHTML += createGameButton(gameName);
                    }
                }
            });

        recentRow.appendChild(recentGamesContainer);
        gamesDiv.prepend(recentRow);
        console.log("here");
        console.log(gamesDiv);
        gamesDiv.innerHTML = `<h1>Recent Games</h1>` + gamesDiv.innerHTML;
    }



    //popular games
    let row = document.createElement("div");
    row.classList.add("horizontalCon");
    let gamesContainer = document.createElement("div");
    gamesContainer.classList.add("gamesCon");
    //add the arrows to the horizontal Con
    row.innerHTML += arrowContainer;


    //for each popular game, add the game to the horizontalCon

    await fetch(`/assets/php/getpopulargames.php`)
        .then((response) => response.text())
        .then((res) => {
            let popularGames = JSON.parse(res);

            for (let i = 0; i < 15; i++) {
                const gameName = popularGames[i][0];
                if (gameName != null) {
                    gamesContainer.innerHTML += createGameButton(gameName, "hot");
                }
            }
        });

    row.appendChild(gamesContainer);
    gamesDiv.prepend(row);
    gamesDiv.innerHTML = `<h1>Popular Games</h1>` + gamesDiv.innerHTML;

    if (newGames.length > 0) {
        let row = document.createElement("div");
        row.classList.add("horizontalCon");
        let gamesContainer = document.createElement("div");
        gamesContainer.classList.add("gamesCon");
        //add the arrows to the horizontal Con
        row.innerHTML += arrowContainer;
        //for each element in newGames, add the game to the horizontalCon
        for (let i = 0; i < newGames.length; i++) {
            console.log(newGames[i]);
            gamesContainer.innerHTML += createGameButton(newGames[i]);
            console.log(row);
        }
        row.appendChild(gamesContainer);
        gamesDiv.prepend(row);
        gamesDiv.innerHTML = `<h1>New Games <a href="/classes.php?category=new">View More</a></h1>` + gamesDiv.innerHTML;
    }


    // if (loggedIn) {
    //     fetcher(`/assets/php/class_likes/personallikes.php`)
    //         .then((response) => response.text())
    //         .then((res) => {
    //             var likedgames = JSON.parse(res);

    //             if (likedgames.length > 0) {

    //                 gamesDiv.innerHTML += `<h1>Liked Games <a href="">View More</a></h1>`

    //                 let row = document.createElement("div");
    //                 row.classList.add("horizontalCon");
    //                 let gamesContainer = document.createElement("div");
    //                 gamesContainer.classList.add("gamesCon");
    //                 //add the arrows to the horizontal Con
    //                 row.innerHTML += arrowContainer;

    //                 for (like in likedgames) {
    //                     if (document.getElementsByName(likedgames[like][0]).length > 0) {
    //                         //line below accounts for suggested/pinned games
    //                         console.log(like);
    //                         gamesContainer.innerHTML += createGameButton(like);
    //                         // if (document.getElementsByName(likedgames[like][0])[0].classList.contains('all')) {
    //                         //     document.getElementsByName(likedgames[like][0])[0].classList.add('liked');
    //                         // } else {
    //                         //     document.getElementsByName(likedgames[like][0])[1].classList.add('liked');
    //                         // }
    //                     }
    //                 }
    //                 row.appendChild(gamesContainer);
    //                 gamesDiv.appendChild(row);
    //             }
    //         });
    //     //Get recent games
    // }
    //Get popular games

    //Make new games last 3 weeks
    //UNSORT THE GAMES
    addArrowListeners();
}

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', () => {
    scrollTo(0, 0);

    let input = searchBar.value.toUpperCase().split(' ').join('');

    const gameButtons = document.getElementById("filteredGames").getElementsByClassName('all');

    let gameShown = false;
    Array.from(gameButtons).forEach((game) => {
        var name = game.getAttribute('name').toUpperCase();
        name = name.split(' ').join('');

        if (name.includes(input) && game.classList.contains(selectedTopic)) {
            game.style.display = "";
            gameShown = true;
        } else {
            game.style.display = "none";
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


function changeToGif(ele) {
    const game = ele.getAttribute('name');
    const data = games[game];

    if (data.gif != null) ele.style = `background-image: url(${data.gif})`;
}

function noGif(ele) {
    const game = ele.getAttribute('name');
    const data = games[game];

    if (data.gif != null) ele.style = `background-image: url(${data.image})`;
}

function createGameButton(game, pin) {
    const data = games[game];

    console.log(game);

    let classlist = data.tags.join(' ');


    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7 * 3);

    const gameDate = new Date(data.date_added);



    let gameBtn = '';

    let buttons = '';

    let onclick = `location.href = 'class?class=${game}'`;

    if (pin == 'pin') {
        buttons += "<button id='pin'><img src='/assets/images/icons/coloredpin.png'></button>";
    }
    if (pin == 'hot') {
        buttons += "<button id='newbanner'><img src='/assets/images/icons/hotbanner.png'></button>";
    }

    if (pin == "filtered") {
        let hasCategory = false;
        for (let i = 0; i < categories.length; i++) {
            if (data.tags.join(' ').includes(categories[i])) {
                hasCategory = true;
            }
        }
        if (!hasCategory) {
            classlist += " random";
        }


    }

    if (gameDate > weekAgo) {
        classlist += ' new';
        buttons += "<button id='newbanner'><img src='/assets/images/icons/newbanner.png'></button>";
    }

    if (pin != 'suggested') {
        classlist += ' all';
    }

    if (pin != 'hidden' && pin != 'filtered') {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <h1 class="innerGameDiv">${game}</h1>
        </div>
        `;
    } else {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image}); display: none;" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <h1 class="innerGameDiv">${game}</h1>
        </div>
        `;
    }

    return gameBtn;
}

function addArrowListeners() {
    console.log("called");

    for (let i = 0; i < document.getElementsByClassName('arrowLeftCon').length; i++) {
        document.getElementsByClassName('arrowLeftCon')[i].addEventListener("click", function(e) {
            const parentElement = e.target.parentNode.parentNode;
            const gamesCon = parentElement.querySelectorAll('.gamesCon')[0];

            // gamesCon.scrollLeft -= 1100;
            gamesCon.scrollLeft -= Math.min(gamesCon.scrollLeft, 1100);
        });
    }

    for (let i = 0; i < document.getElementsByClassName('arrowRightCon').length; i++) {
        document.getElementsByClassName('arrowRightCon')[i].addEventListener("click", function(e) {
            console.log(e.target);
            const parentElement = e.target.parentNode.parentNode;
            const gamesCon = parentElement.querySelectorAll('.gamesCon')[0];

            const leftArrow = e.target.parentNode.parentNode.querySelectorAll('.arrowCon')[0];
            leftArrow.style += "visibility: visible";

            // gamesCon.scrollLeft += 1100;
            const remainingSpace = gamesCon.scrollWidth - gamesCon.clientWidth - gamesCon.scrollLeft;
            gamesCon.scrollLeft += Math.min(remainingSpace, 1100);
        });
    }


}