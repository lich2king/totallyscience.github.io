// Thank you stack overflow.
let sortObject = (obj) =>
    Object.keys(obj).sort().reduce((res, key) => ((res[key] = obj[key]), res), {})


const gamesDiv = document.getElementById('games');
const maxGames = 10;

let selectedTopic = 'all';
let displayedGames = 0;
let games;
let sorted;
let hasLoaded = false;


function displayGames() {
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

        let classlist = data.tags.join(' ');

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        const gameDate = new Date(data.date_added);

        if (gameDate > weekAgo) {
            classlist += ' new';
        }


        const gameBtn = `
            <button onclick="location.href = 'class.html?class=${name}'" name="${name}" class="${classlist} gameButton all not-selectable">
                <img src="${data.image}">

                <div>
                    <p>${name}</p>
                    <p2>${data.description}</p2>
                </div>
            </button>
        `;

        gamesDiv.innerHTML += gameBtn;

        if (x + 1 == displayedGames + maxGames / 2) {
            let adDiv = document.createElement('div');
            adDiv.classList.add('adDiv');
            let innerAdDiv = document.createElement("div");
            adDiv.appendChild(innerAdDiv);
            gamesDiv.appendChild(adDiv);


            let adScript = document.createElement('script');
            adScript.async = true;
            adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210';
            adScript.crossOrigin = 'anonymous';

            let adIns = document.createElement('ins');
            adIns.setAttribute('class', 'adsbygoogle');
            adIns.setAttribute('style', 'display:inline-block;width:525px;height:105px');
            adIns.setAttribute('data-ad-client', 'ca-pub-3486863589051210');
            adIns.setAttribute('data-ad-slot', '2075384482');

            let adScriptEnd = document.createElement('script');
            adScriptEnd.innerText = '(adsbygoogle = window.adsbygoogle || []).push({});';

            innerAdDiv.insertAdjacentElement('afterend', adScript);
            innerAdDiv.insertAdjacentElement('afterend', adIns);
            innerAdDiv.insertAdjacentElement('afterend', adScriptEnd);
        }
    }
    displayedGames += maxGames;
    
    hasLoaded = false;
}


//game catagories
//selected topic variable is used both in the button category changer and the search bar function
const buttons = document.querySelectorAll('.categoryButton, #bolt');

//buttons.appendChild(document.getElementById('bolt'))
//add event listener to every element in the document with the class "categoryButton"
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

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

        const selected = document.getElementsByName(selectedTopic)[0];
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
    })
})

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keyup', () => {
    const input = searchBar.value.toUpperCase();

    if (input == '' || input == null) {
        loadTopic();
        return;
    }

    document.getElementById('load-games').style.display = 'none';
    gamesDiv.innerHTML = '';

    Object.keys(games).forEach((game) => {
        if (game.toUpperCase().includes(input)) {
            if (selectedTopic == 'all') {
                const data = games[game];
                const sectionLetter = game[0].toLowerCase();
                let existingSection = document.getElementById(sectionLetter);

                if (existingSection == null) {
                    const section = document.createElement('section')
                    section.id = sectionLetter
                    gamesDiv.appendChild(section)
                    existingSection = section
                }

                const gameBtn = document.createElement('button')
                gameBtn.game = game
                gameBtn.classList = data.tags.join(' ')
                const gameDate = new Date(data.date_added)

                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);

                if (gameDate > weekAgo) {
                    gameBtn.classList.add('new')
                }
                gameBtn.addEventListener('click', () => {
                    window.location.href = `class.html?class=${game}`
                })
                gameBtn.classList.add('gameButton', 'all', 'not-selectable')

                const gameImg = document.createElement('img')
                gameImg.src = data.image
                gameBtn.appendChild(gameImg)

                const gameText = document.createElement('div')
                const gameTitle = document.createElement('p')
                gameTitle.innerText = game
                gameText.appendChild(gameTitle)

                const gameDesc = document.createElement('p2')
                gameDesc.innerText = data.description
                gameText.appendChild(gameDesc)

                gameBtn.appendChild(gameText)
                existingSection.appendChild(gameBtn)
            } else if (games[game].tags.includes(selectedTopic)) {
                const data = games[game];
                const sectionLetter = game[0].toLowerCase();
                let existingSection = document.getElementById(sectionLetter);

                if (existingSection == null) {
                    const section = document.createElement('section')
                    section.id = sectionLetter
                    gamesDiv.appendChild(section)
                    existingSection = section
                }

                const gameBtn = document.createElement('button')
                gameBtn.game = game
                gameBtn.classList = data.tags.join(' ')
                const gameDate = new Date(data.date_added)

                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);

                if (gameDate > weekAgo) {
                    gameBtn.classList.add('new')
                }
                gameBtn.addEventListener('click', () => {
                    window.location.href = `class.html?class=${game}`
                })
                gameBtn.classList.add('gameButton', 'all', 'not-selectable')

                const gameImg = document.createElement('img')
                gameImg.src = data.image
                gameBtn.appendChild(gameImg)

                const gameText = document.createElement('div')
                const gameTitle = document.createElement('p')
                gameTitle.innerText = game
                gameText.appendChild(gameTitle)

                const gameDesc = document.createElement('p2')
                gameDesc.innerText = data.description
                gameText.appendChild(gameDesc)

                gameBtn.appendChild(gameText)
                existingSection.appendChild(gameBtn)
            }
        }
    });
})

window.addEventListener('scroll', () => {
    let _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;

    if (window.scrollY + window.innerHeight >= _docHeight + -300 && hasLoaded == false) {
        hasLoaded = true;
        setTimeout(() => {
            displayGames();
        }, 5);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    fetch(`assets/games.json`).then((response) => response.json()).then((retrievedGames) => {
        games = retrievedGames;
        loadTopic();
    });


    document.getElementById('searchBar').style.backgroundImage = `url(assets/images/magnifying-${localStorage.getItem("theme")}.svg)`;
});

function loadTopic() {
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