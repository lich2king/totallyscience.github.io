<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "../assets/includes/head.php" ?>

    <style>
    iframe {
        width: 100vw;
        height: 90vh;
        position: absolute;
        top: 0;
        left: 0;
    }

    body {
        background-color: black;
        background-image: url('../background.svg');
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    html {
        overflow: hidden;
    }
    </style>
</head>

<body>
    <div id="fixedElements">
        <div><button><img id="backarrowLogo" src="assets/magnifying.svg"></button></div>
        <div><button><img id="alertIcon" src="assets/exclamation.svg"></button></div>
    </div>


    <iframe src="" width="80vw" height="80vh" overflow="visible" frameBorder="0" id="game-iframe"></iframe>

    <script src="assets/scripts/main.js?v65"></script>
    <script>
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const gameName = urlParams.get('class');

    fetch(`../assets/games.json?date=${new Date().getTime()}`).then((response) => response.json()).then((games) => {
        const gameData = games[gameName];

        if (gameData == null) window.location.href = 'index.php';

        // update game view statistics
        fetch(`/stats/games/view`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                gameName: gameName
            }
        });

        var theIframeUrl = gameData.iframe_url;
        if (theIframeUrl[0] == '.' || theIframeUrl[0] == '/' || theIframeUrl[0] == 'a') {
            theIframeUrl = `../${theIframeUrl}`;
        }
        $('game-iframe').src = theIframeUrl;
    });
    </script>
</body>

</html>