const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const gameName = urlParams.get('class')

fetch(`https://totallyscience.co/assets/php/game_stats.php/?type=views&name=${gameName}`)

fetch(`../assets/games.json?date=${new Date().getTime()}`)
    .then((response) => response.json())
    .then((games) => {
        const gameData = games[gameName]
        if (gameData == null) window.location.href = 'index.html'

        $('game-iframe').src = gameData.iframe_url
    })

let hasReported = false
const reportBtn = $('report-btn')
reportBtn.addEventListener('click', () => {
    if (hasReported) return
    hasReported = true
    fetch(`https://totallyscience.co/assets/php/game_stats.php/?type=reports&name=${gameName}`)
        .then((response) => response.text())
        .then((text) => {
            if (text.includes('<?php')) {
                reportBtn.innerText = '?'
                return
            }
            reportBtn.innerText = text
        })
})