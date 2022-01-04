const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const gameName = urlParams.get('game')

fetch(`https://moovally.com/totallyscience-backend/game_stats.php/?type=views&name=${gameName}`)

fetch(`./assets/games.json?date=${new Date().getTime()}`)
    .then((response) => response.json())
    .then((games) => {
        const gameData = games[gameName]
        if (gameData == null) window.location.href = '../games.html'

        $('controls').innerText = gameData.controls
        $('developer').innerText = `This game was created by ${gameData.developer}.`
        $('game-iframe').src = gameData.iframe_url
    })

let hasReported = false
const reportBtn = $('report-btn')
reportBtn.addEventListener('click', () => {
    if (hasReported) return
    hasReported = true
    fetch(`https://moovally.com/totallyscience-backend/game_stats.php/?type=reports&name=${gameName}`)
        .then((response) => response.text())
        .then((text) => {
            if (text.includes('<?php')) {
                reportBtn.innerText = '?'
                return
            }
            reportBtn.innerText = text
        })
})
