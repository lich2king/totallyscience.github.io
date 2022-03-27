const maxGames = 10;

let selectedTopic = 'all';
let displayedGames = 0;
let games;
let sorted;

// thank you stack overflow
// sorts object in alphabetical order
function sortObject(obj) {
    return Object.keys(obj).sort().reduce((res, key) => ((res[key] = obj[key]), res), {});
}

const mk = (type) => {
    return document.createElement(type)
}

function displayGames() {
    const gamesDiv = document.getElementById('games');

    for (let x = displayedGames; x < displayedGames + maxGames; x++) {
        let keys = Object.keys(sorted);

        if (keys.length <= 6) {
            document.getElementById('load-games').style.display = 'none';

            if (x >= keys.length) {
                continue;
            }
        } else if (x + 1 > keys.length) {
            document.getElementById('load-games').style.display = 'none';
            break;
        }

        const name = keys[x];
        const data = sorted[keys[x]];
        const sectionLetter = name[0].toLowerCase();
        let existingSection = $(sectionLetter);

        if (existingSection == null) {
            const section = mk('section')
            section.id = sectionLetter
            gamesDiv.appendChild(section)
            existingSection = section
        }

        const gameBtn = mk('button')
        gameBtn.name = name
        gameBtn.classList = data.tags.join(' ')
        const gameDate = new Date(data.date_added)

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        if (gameDate > weekAgo) {
            gameBtn.classList.add('new')
        }
        gameBtn.addEventListener('click', () => {
            window.location.href = `./class?class=${name}`
        })
        gameBtn.classList.add('gameButton', 'all', 'not-selectable')

        const gameImg = mk('img')
        gameImg.src = data.image
        gameBtn.appendChild(gameImg)

        const gameText = mk('div')
        const gameTitle = mk('p')
        gameTitle.innerText = name
        gameText.appendChild(gameTitle)

        const gameDesc = mk('p2')
        gameDesc.innerText = data.description
        gameText.appendChild(gameDesc)

        gameBtn.appendChild(gameText)
        existingSection.appendChild(gameBtn)

        if (x + 1 == displayedGames + maxGames / 2) {
            const adDiv = document.createElement("div")
            adDiv.classList.add("adDiv")
            const innerAdDiv = document.createElement("div")
            adDiv.appendChild(innerAdDiv)
            existingSection.appendChild(adDiv)


            const adScript = document.createElement("script")
            adScript.async = true
            adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210"
            adScript.crossOrigin = "anonymous"

            const adIns = document.createElement("ins")
            adIns.setAttribute("class", "adsbygoogle")
            adIns.setAttribute("style", "display:inline-block;width:525px;height:105px")
            adIns.setAttribute("data-ad-client", "ca-pub-3486863589051210")
            adIns.setAttribute("data-ad-slot", "2075384482")

            const adScriptEnd = document.createElement("script")
            adScriptEnd.innerText = "(adsbygoogle = window.adsbygoogle || []).push({});"

            innerAdDiv.insertAdjacentElement('afterend', adScript);
            innerAdDiv.insertAdjacentElement('afterend', adIns);
            innerAdDiv.insertAdjacentElement('afterend', adScriptEnd);
        }
    }
    displayedGames += maxGames;
}

function loadTopic() {
    const gamesDiv = document.getElementById('games');

    displayedGames = 0;
    gamesDiv.innerHTML = '';
    document.getElementById('load-games').style.display = '';

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

let hasLoaded = false;
window.addEventListener('scroll', () => {
    let _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;

    if (window.scrollY + window.innerHeight >= _docHeight + -300 && hasLoaded == false) {
        hasLoaded = true;
        setTimeout(() => {
            displayGames();
            hasLoaded = false;
        }, 5);
    }
});

function switchTopic(e) {
    if (e.target.id == 'bolt') {
        selectedTopic = e.target.parentNode.parentNode.name;
    } else {
        selectedTopic = e.target.name;
    }

    const buttons = document.querySelectorAll('.categoryButton');

    buttons.forEach((btn) => {
        btn.classList.add('unselectedCategory');
        btn.classList.remove('selectedCategory');
    })

    const selected = $n(selectedTopic)[0];
    if (e.target.innerHTML == '⚡') {
        selected.parentNode.classList.add('selectedCategory');
        selected.parentNode.classList.remove('unselectedCategory');
    } else {
        selected.classList.add('selectedCategory');
        selected.classList.remove('unselectedCategory');
    }
    selected.classList.add('selectedCategory');
    selected.classList.remove('unselectedCategory');

    document.getElementById('searchBar').value = '';

    loadTopic();
}

function search(e) {
    const searchBar = e.target;
    const input = searchBar.value.toUpperCase();

    if (input == '' || input == null) {
        loadTopic();
        return;
    }

    const gamesDiv = document.getElementById('games');

    document.getElementById('load-games').style.display = 'none';
    gamesDiv.innerHTML = '';

    Object.keys(games).forEach((game) => {
        if (game.toUpperCase().includes(input)) {
            if (selectedTopic == 'all') {
                const data = games[game];
                const sectionLetter = game[0].toLowerCase();
                let existingSection = $(sectionLetter);

                if (existingSection == null) {
                    const section = mk('section')
                    section.id = sectionLetter
                    gamesDiv.appendChild(section)
                    existingSection = section
                }

                const gameBtn = mk('button')
                gameBtn.game = game
                gameBtn.classList = data.tags.join(' ')
                const gameDate = new Date(data.date_added)

                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);

                if (gameDate > weekAgo) {
                    gameBtn.classList.add('new')
                }
                gameBtn.addEventListener('click', () => {
                    window.location.href = `./class.html?class=${game}`
                })
                gameBtn.classList.add('gameButton', 'all', 'not-selectable')

                const gameImg = mk('img')
                gameImg.src = data.image
                gameBtn.appendChild(gameImg)

                const gameText = mk('div')
                const gameTitle = mk('p')
                gameTitle.innerText = game
                gameText.appendChild(gameTitle)

                const gameDesc = mk('p2')
                gameDesc.innerText = data.description
                gameText.appendChild(gameDesc)

                gameBtn.appendChild(gameText)
                existingSection.appendChild(gameBtn)
            } else if (games[game].tags.includes(selectedTopic)) {
                const data = games[game];
                const sectionLetter = game[0].toLowerCase();
                let existingSection = $(sectionLetter);

                if (existingSection == null) {
                    const section = mk('section')
                    section.id = sectionLetter
                    gamesDiv.appendChild(section)
                    existingSection = section
                }

                const gameBtn = mk('button')
                gameBtn.game = game
                gameBtn.classList = data.tags.join(' ')
                const gameDate = new Date(data.date_added)

                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);

                if (gameDate > weekAgo) {
                    gameBtn.classList.add('new')
                }
                gameBtn.addEventListener('click', () => {
                    window.location.href = `./class.html?class=${game}`
                })
                gameBtn.classList.add('gameButton', 'all', 'not-selectable')

                const gameImg = mk('img')
                gameImg.src = data.image
                gameBtn.appendChild(gameImg)

                const gameText = mk('div')
                const gameTitle = mk('p')
                gameTitle.innerText = game
                gameText.appendChild(gameTitle)

                const gameDesc = mk('p2')
                gameDesc.innerText = data.description
                gameText.appendChild(gameDesc)

                gameBtn.appendChild(gameText)
                existingSection.appendChild(gameBtn)
            }
        }
    });
}

fetch(`/gamesjson`).then((response) => response.json()).then((retrievedGames) => {
    games = retrievedGames;
    loadTopic();
});

document.getElementById('searchBar').style.backgroundImage = `url(icons/magnifying-${localStorage.getItem("theme")}.svg)`;