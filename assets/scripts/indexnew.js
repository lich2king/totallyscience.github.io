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

switchSlide(slideIndex)
autoSwitch()


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
            <div id="gameDiv" onclick="location.href = 'class?class=${name}'" class="${classlist} all">
                <input type="image"
                    src="${data.image}" />
                <div class="innerGameDiv border"></div>
                <div class="innerGameDiv">${name}</div>
            </div>
        `;

        gamesDiv.innerHTML += gameBtn;
    }
}