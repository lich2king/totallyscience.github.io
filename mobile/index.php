<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "../assets/includes/head.php" ?>
    <link rel='stylesheet' href='assets/styles/main.css?v9'>
</head>

<body>
    <section id="fixedElementsSection">
        <div id="fixedElements">
            <button onclick="search()" id="backarrow"><img id="backarrowLogo" src="../assets/images/magnifying-dark.svg"></button>
            <button onclick="openSchoolSite()" id="alert"><img id="alertIcon" src="../assets/images/exclamation-light.svg"></button>
        </div>
    </section>
    
    <section id="searchBarSection" style="display:none;">
        <div class="search-bar" style="margin-top: 25px" align="center">
            <input type="text" name="search" value="" onfocusout="noSearch()" autocomplete="off" id="searchBar" placeholder="Search">
        </div>
    </section>

    <div id="games">
    </div>

        

    <script src="assets/scripts/main.js?v63"></script>
    <script src="assets/scripts/mobile.js?v63"></script>
</body>

</html>