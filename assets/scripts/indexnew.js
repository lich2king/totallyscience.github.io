document.getElementById("gamesnav").classList.add("selected");

// featured games slides code
let shouldAutoSwitch = true
let slideIndex = 1
const slides = document.getElementsByClassName('imageTest')
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
        suggestGames();
    });
});

function loadTopic() {
    displayedGames = 0;

    document.getElementById("noSearch").style.display = 'none';

    sorted = sortObject(games);

    if (selectedTopic != 'all') {
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


function displayGames() {
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
    //all games are generated... now add the liked and recent tags to the games
    const gameButtons = document.getElementsByClassName("all");

    fetch(`/assets/php/game_likes/personallikes.php`).then((response) => response.text()).then((res) => {
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

    Array.from(gameButtons).forEach(game => {
        var name = game.getAttribute("name").toUpperCase();
        name = name.split(' ').join('');

        if (name.includes(input)) {
            game.setAttribute('style', `background-image: url(${games[game.getAttribute('name')].image})`)
        } else {
            game.setAttribute('style', 'display:none')
        }
    });


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
    let pinnedGames = [];
    //check previously pinned games
    fetch(`assets/php/game_pin/getpinnedgames.php`).then((response) => response.text()).then((res) => {

        pinnedGames = res.split(";");
        let randomGames = [];

        for (let x = displayedGames; x < displayedGames + 3; x++) {
            let randGame = randomProperty(games)
            while (randomGames.includes(randGame) || pinnedGames.includes(randGame)) {
                randGame = randomProperty(games)
            }
            randomGames.push(randGame);
        }


        //first pinned game is always going to be '' so length will always be atleast 1
        pinnedGames = pinnedGames.slice(1);
        let totalPinned = pinnedGames.length;

        if (pinnedGames.length < 3) {
            let generateGames = 3 - pinnedGames.length;
            for (let i = 0; i < generateGames; i++) {
                let randGame = randomProperty(games)
                while (randomGames.includes(randGame) || pinnedGames.includes(randGame)) {
                    randGame = randomProperty(games)
                }
                pinnedGames.push(randGame);
            }
        }



        document.getElementById('scisuggests').innerHTML = '';
        for (let i = 0; i < 3; i++) {
            let game = randomGames[i];
            let gameBtn = createGameButton(game, "suggested");
            document.getElementById('scisuggests').innerHTML += gameBtn;
            game = pinnedGames[i];
            if (i <= totalPinned - 1) {
                gameBtn = createGameButton(game, "pin");
            } else {
                gameBtn = createGameButton(game, "suggested");
            }

            document.getElementById('scisuggests').innerHTML += gameBtn;
        }
        // randomGames.forEach(function(game) {
        //     const gameBtn = `
        //             <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${games[game]["image"]})" id="gameDiv" onclick="location.href = 'game.php?class=${encodeURIComponent(game)}'">
        //                 <div class="innerGameDiv">${game}</div>
        //             </div>
        //             `;

        //     document.getElementById('scisuggests').innerHTML += gameBtn;
        // })
        // pinnedGames.forEach(function(game) {
        //     const gameBtn = `
        //             <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${games[game]["image"]})" id="gameDiv" onclick="location.href = 'game.php?class=${encodeURIComponent(game)}'">
        //                 <div class="innerGameDiv">${game}</div>
        //             </div>
        //             `;

        //     document.getElementById('scisuggests').innerHTML += gameBtn;
        // })
    });
}

var randomProperty = function(object) {
    var keys = Object.keys(object);
    return keys[Math.floor(keys.length * Math.random())];
};

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
    if (data.tags.includes("gamepass")) {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist} all">
            <button id="gamelock"><img src="/assets/images/icons/locked.png"></button> 
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    } else if (pin == "pin") {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist}">
            <button id="pin"><img src="/assets/images/icons/coloredpin.png"></button>
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    } else if (pin == "suggested") {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="location.href = 'game.php?class=${game}'" class="${classlist}">
            <button id="pin"><img src="/assets/images/icons/coloredpin.png"></button>
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