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
        suggestGames();
    });
});

function loadTopic() {
    displayedGames = 0;
    gamesDiv.innerHTML = '';
    document.getElementById("noSearch").style.display = 'none';

    sorted = sortObject(games);

    if (selectedTopic != 'all') {
        let gamesWithTopic = {};

        for (let game in sorted) {
            if (sorted[game].tags.includes(selectedTopic)) {
                gamesWithTopic[game] = sorted[game];
            }
        }

        sorted = gamesWithTopic;
    }

    displayGames();
}


function displayGames() {

    for (let x = displayedGames; x < displayedGames + maxGames; x++) {

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


        const gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${name}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${name}'" class="${classlist} all">
                <div class="innerGameDiv">${name}</div>
        </div>
        `;


        gamesDiv.innerHTML += gameBtn;
    }
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keyup', () => {

    scrollTo(0, 0);

    const input = searchBar.value.toUpperCase();

    if (input == '' || input == null) {
        loadTopic();
        return;
    }

    gamesDiv.innerHTML = '';
    document.getElementById("noSearch").style.display = 'none';

    let numGames = 0;
    Object.keys(games).forEach((game) => {
        if (numGames < maxGames) {
            if (game.toUpperCase().includes(input)) {
                if (games[game].tags.includes(selectedTopic) || selectedTopic == 'all') {
                    const data = games[game];

                    let classlist = data.tags.join(' ');

                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);

                    const gameDate = new Date(data.date_added);

                    if (gameDate > weekAgo) {
                        classlist += ' new';
                    }

                    const gameBtn = `
                    <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
                        <div class="innerGameDiv">${game}</div>
                    </div>
                    `;

                    gamesDiv.innerHTML += gameBtn;
                    numGames += 1
                }
            }
        } else {
            return;
        }
    });
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