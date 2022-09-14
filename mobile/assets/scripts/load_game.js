const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const gameName = urlParams.get('class')

//fetch(`https://totallyscience.co/assets/php/game_stats.php/?type=views&name=${gameName}`)

fetch(`../assets/games.json?date=${new Date().getTime()}`)
    .then((response) => response.json())
    .then((games) => {
        const gameData = games[gameName]
        if (gameData == null) window.location.href = 'index.html'

        var theIframeUrl = gameData.iframe_url
        if (theIframeUrl[0] == '.' || theIframeUrl[0] == '/' || theIframeUrl[0] == 'a') {
            theIframeUrl = `../${theIframeUrl}`
        }
        $('game-iframe').src = theIframeUrl
    })

document.getElementById('alertIcon').src = `../assets/images/exclamation-${localStorage.getItem("theme")}.svg`
document.getElementById('backarrowLogo').src = `../assets/images/backarrow-${localStorage.getItem("theme")}.svg`