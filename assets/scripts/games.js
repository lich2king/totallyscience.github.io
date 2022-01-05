//const { format } = require("express/lib/response")

// Thank you stack overflow.
let sortObject = (obj) =>
    Object.keys(obj)
        .sort()
        .reduce((res, key) => ((res[key] = obj[key]), res), {})

const weekAgo = new Date()
weekAgo.setDate(weekAgo.getDate() - 7)

const gamesDiv = $('games-div')

fetch(`./assets/games.json?${new Date().getTime()}`)
    .then((response) => response.json())
    .then((games) => {
        let sorted = sortObject(games)
        let gamesInRow = 0
        for (const [name, data] of Object.entries(sorted)) {
            gamesInRow++
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

            if (gameDate > weekAgo) {
                gameBtn.classList.add('new')
            }
            gameBtn.addEventListener('click', () => {
                window.location.href = `./class.html?game=${name}`
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
            if(gamesInRow >= 9)
            {
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
                //adIns.setAttribute("data-ad-format", "auto")
                //adIns.setAttribute("data-ad-layout-key", "-gs+3s+5e-7t-2r")
                adIns.setAttribute("data-ad-client", "ca-pub-3486863589051210")
                adIns.setAttribute("data-ad-slot", "2075384482")

                const adScriptEnd = document.createElement("script")
                adScriptEnd.innerText="(adsbygoogle = window.adsbygoogle || []).push({});"

                const adDivCushion = document.createElement("div")
                adDivCushion.style = "padding-bottom: 100vh"
                
                innerAdDiv.insertAdjacentElement('afterend', adScript);
                innerAdDiv.insertAdjacentElement('afterend', adIns);
                innerAdDiv.insertAdjacentElement('afterend', adScriptEnd);
                gamesInRow = 0
            }
        }
    })

//game catagories
//selected topic variable is used both in the button category changer and the search bar function
let selectedTopic = 'all'
const buttons = $qsa('.categoryButton, #bolt')
//buttons.appendChild(document.getElementById('bolt'))
//add event listener to every element in the document with the class "categoryButton"
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id == 'bolt') {
            selectedTopic = e.target.parentNode.name
        } else {
            selectedTopic = e.target.name
        }

        const buttons = $qsa('.categoryButton')
        const games = $qsa('.gameButton')

        buttons.forEach((btn) => {
            btn.classList.add('unselectedCategory')
            btn.classList.remove('selectedCategory')
        })

        const selected = $n(selectedTopic)[0]
        if (e.target.innerHTML == '⚡') {
            selected.parentNode.classList.add('selectedCategory')
            selected.parentNode.classList.remove('unselectedCategory')
        } else {
            selected.classList.add('selectedCategory')
            selected.classList.remove('unselectedCategory')
        }
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
    letter.addEventListener('click', (e) => {
        const letter = e.target.innerText.toLowerCase()
        const section = $(letter)
        if (section == null) return
        const sectionBox = section.getBoundingClientRect()
        //-90 acts as an offsett so the top button isn't off screen
        const scroll = window.scrollY + sectionBox.top - 90

        window.scrollTo({top: scroll, behavior: 'smooth'})
    })
})

document.getElementById('searchBar').style.backgroundImage = `url(./assets/images/magnifying-${localStorage.getItem("theme")}.svg)`
