const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const gameName = urlParams.get('game')

const $ = (id) => {
    return document.getElementById(id)
}

fetch('./assets/games.json')
    .then((response) => response.json())
    .then((games) => {
        const gameData = games[gameName]
        if (gameData == null) window.location.href = '../games.html'

        $('controls').innerText = gameData.controls
        $('developer').innerText = `This game was created by ${gameData.developer}.`
        $('game-iframe').src = gameData.iframe_url
    })
