// Thank you stack overflow.
const sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {})

const $ = (id) => {
    return document.getElementById(id)
}

const mk = (type) => {
    return document.createElement(type)
}

const gamesDiv = $("games-div")

fetch("./games.json").then(response => response.json()).then(games => {
    let sorted = sortObject(games)
    for(const [name, data] of Object.entries(sorted)) {
        const sectionLetter = name[0].toLowerCase()
        let existingSection = $(sectionLetter)

        if(existingSection == null) {
            const section = mk("section")
            section.id = sectionLetter
            gamesDiv.appendChild(section)
            existingSection = section
        }

        const gameBtn = mk("button")
        gameBtn.classList = data.tags.join(" ")
        gameBtn.addEventListener("click", () => {
            window.location.href = `./game.html?game=${name}`
        })
        gameBtn.classList.add("gameButton")

        const gameImg = mk("img")
        gameImg.src = data.image
        gameBtn.appendChild(gameImg)
        

        const gameText = mk("div")
        const gameTitle = mk("p")
        gameTitle.innerText = name
        gameText.appendChild(gameTitle)

        const gameDesc = mk("p2")
        gameDesc.innerText = data.description
        gameText.appendChild(gameDesc)
        
        gameBtn.appendChild(gameText)
        existingSection.appendChild(gameBtn)
    }
})
