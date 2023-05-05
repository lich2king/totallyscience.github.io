<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "../assets/includes/head.php" ?>
    <link rel='stylesheet' href='assets/styles/game.css?v11'>
</head>

<body>
    <section id="fixedElementsSection">
        <div id="fixedElements">
            <button onclick="window.open('index', '_self')" id="backarrow"><img id="backarrowLogo" src="../assets/images/backarrow-light.svg"></button>
            <button onclick="openSchoolSite()" id="alert"><img id="alertIcon" src="../assets/images/exclamation-light.svg"></button>
        </div>
    </section>

    <section id="gameContainer">
        <div id="gameFrameDiv">
            <iframe src="" width="80vw" height="80vh" overflow="visible" frameBorder="0" id="game-iframe"></iframe>
        </div>
    </section>

        

    <script src="assets/scripts/main.js?v65"></script>
    <script src="assets/scripts/load_game.js?v64"></script>
</body>

</html>