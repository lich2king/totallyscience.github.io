// Thank you stack overflow.
const sortObject = (obj) =>
    Object.keys(obj)
        .sort()
        .reduce((res, key) => ((res[key] = obj[key]), res), {})

const $ = (id) => {
    return document.getElementById(id)
}

const $c = (className) => {
    return document.getElementsByClassName(className)
}

const $qsa = (query) => {
    return document.querySelectorAll(query)
}

const $n = (name) => {
    return document.getElementsByName(name)
}

const mk = (type) => {
    return document.createElement(type)
}

const weekAgo = new Date()
weekAgo.setDate(weekAgo.getDate() - 7)

const gamesDiv = $('games-div')

fetch('./games.json')
    .then((response) => response.json())
    .then((games) => {
        let sorted = sortObject(games)
        for (const [name, data] of Object.entries(sorted)) {
            const sectionLetter = name[0].toLowerCase()
            let existingSection = $(sectionLetter)

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
            console.log(gameDate)
            if (gameDate > weekAgo) {
                gameBtn.classList.add('new')
            }
            gameBtn.addEventListener('click', () => {
                window.location.href = `./game.html?game=${name}`
            })
            gameBtn.classList.add('gameButton', 'all')

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
        }
    })

//game catagories
//selected topic variable is used both in the button category changer and the search bar function
let selectedTopic = 'all'
const buttons = $qsa('.categoryButton')
//add event listener to every element in the document with the class "categoryButton"
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        selectedTopic = e.target.name
        const buttons = $qsa('.categoryButton')
        const games = $qsa('.gameButton')

        buttons.forEach((btn) => {
            btn.classList.add('unselectedCategory')
            btn.classList.remove('selectedCategory')
        })

        const selected = $n(selectedTopic)[0]
        selected.classList.add('selectedCategory')
        selected.classList.remove('unselectedCategory')

        games.forEach((game) => {
            if (game.classList.contains(selectedTopic)) {
                game.style.display = ''
            } else {
                game.style.display = 'none'
            }
        })
    })
})

const searchBar = $('searchBar')
searchBar.addEventListener('keyup', () => {
    const input = searchBar.value.toUpperCase()
    $qsa('.gameButton').forEach((button) => {
        console.log(button)
        const gameName = button.getAttribute('name')
        if (gameName.toUpperCase().indexOf(input) > -1) {
            if (button.classList.contains(selectedTopic)) {
                button.style.display = ''
            } else {
                button.style.display = 'none'
            }
        } else {
            button.style.display = 'none'
        }
    })
})

//scroll to section on click of letter
//add event listener to every element in the document with the class "letter"
const letters = $qsa('.letter')
letters.forEach((letter) => {
    letter.addEventListener('click', function (e) {
        var letter = e.target.innerText.toLowerCase()
        var section = document.getElementById(letter)
        var sectionBox = section.getBoundingClientRect()
        //-90 acts as an offsett so the top button isn't off screen
        var scroll = window.scrollY + sectionBox.top - 90
        window.scrollTo({top: scroll, behavior: 'smooth'})
    })
})
