document.getElementById("gamesnav").classList.add("selected");

// featured games slides code
let shouldAutoSwitch = true
let slideIndex = 1
const slides = document.getElementsByClassName('featuredSlide')
const switchSlide = (n) => {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = ''
}
const plusSlides = (n) => {
    shouldAutoSwitch = false
    switchSlide((slideIndex += n))
}
const autoPlusSlides = (n) => {
    switchSlide((slideIndex += n))
}
const autoSwitch = () => {
    if (shouldAutoSwitch) {
        setTimeout(() => {
            if (shouldAutoSwitch) {
                autoPlusSlides(1)
                autoSwitch()
            }
        }, 2500)
    }
}

// DISABLED BECAUSE IT NEEDS TO BE RE-PROGRAMMED
// switchSlide(slideIndex)
// autoSwitch()

// Load Games
const gamesDiv = document.getElementById('games');
const maxGames = 50;

let selectedTopic = 'all';
let displayedGames = 0;
let games;
let sorted;
let hasLoaded = false;


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

        let classlist = data.tags.join(' ');

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        const gameDate = new Date(data.date_added);

        if (gameDate > weekAgo) {
            classlist += ' new';
        }


        const gameBtn = `
            <div style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${name}'" class="${classlist} all">
                <div class="innerGameDiv">${name}</div>
            </div>
        `;

        gamesDiv.innerHTML += gameBtn;
    }
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keyup', () => {
    document.getElementById('info').scrollIntoView({
        block: "start",
        inline: "nearest"
    });

    const input = searchBar.value.toUpperCase();

    if (input == '' || input == null) {
        loadTopic();
        return;
    }

    gamesDiv.innerHTML = '';

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
                    <div style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
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
})


// Category buttons

const buttons = document.querySelectorAll('.categoryButton');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.name != selectedTopic) {
            document.getElementById('info').scrollIntoView({
                block: "start",
                inline: "nearest"
            });
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


function suggestGames() {
    let randomGames = []
    for (let x = displayedGames; x < displayedGames + 6; x++) {
        let randGame = randomProperty(games)
        while (randomGames.includes(randGame)) {
            randGame = randomProperty(games)
        }
        randomGames.push(randGame);
    }
    console.log(randomGames)

    document.getElementById('scisuggests').innerHTML = '';
    randomGames.forEach(function(game) {
        const gameBtn = `
                    <div id="gameDiv" onclick="location.href = 'game.php?class=${game}'">
                        <input type="image"
                            src="${games[game]["image"]}" />
                        <div class="innerGameDiv">${game}</div>
                    </div>
                    `;

        document.getElementById('scisuggests').innerHTML += gameBtn;
    })

}

var randomProperty = function(object) {
    var keys = Object.keys(object);
    return keys[Math.floor(keys.length * Math.random())];
};