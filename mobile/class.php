<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "../assets/includes/head.php" ?>

    <style>
        #gameContainer {
            margin-top: 20px;
            width: 100vw;
            height: 85vh;
            margin-bottom: 5%;
        }

        #gameFrameDiv {
            width: 100%;
            height: 100%;
            text-align: center;
        }

        #gameFrameDiv iframe {
            width: 75%;
            height: 100%;
            border: 4px solid var(--accent-color);
            border-radius: 20px;
            margin-bottom: 0%;
            resize: vertical;
        }

        #alertIcon {
            height: 6vh;
        }
     </style>
</head>

<body>
    <section id="fixedElementsSection">
        <div id="fixedElements">
            <button onclick="window.open('index.php', '_self')" id="backarrow"><img id="backarrowLogo" src="../assets/images/backarrow-light.svg"></button>
            <button onclick="openSchoolSite()" id="alert"><img id="alertIcon" src="assets/exclamation.svg"></button>
        </div>
    </section>

    <section id="gameContainer">
        <div id="gameFrameDiv">
            <iframe src="" width="80vw" height="80vh" overflow="visible" frameBorder="0" id="game-iframe"></iframe>
        </div>
    </section>

    <script src="assets/scripts/main.js?v65"></script>
    <script>
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const gameName = urlParams.get('class');

        fetch(`../assets/games.json?date=${new Date().getTime()}`).then((response) => response.json()).then((games) => {
                const gameData = games[gameName];

                if (gameData == null) window.location.href = 'index.php';

                // update game view statistics
                fetch(`/stats/games/view`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: { gameName: gameName } });

                var theIframeUrl = gameData.iframe_url;
                if (theIframeUrl[0] == '.' || theIframeUrl[0] == '/' || theIframeUrl[0] == 'a') {
                    theIframeUrl = `../${theIframeUrl}`;
                }
                $('game-iframe').src = theIframeUrl;
        });
    </script>
</body>

</html>