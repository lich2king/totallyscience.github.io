<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "../assets/includes/head.php" ?>
    <link rel='stylesheet' href='assets/styles/main.css?v12'>
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

    <div class="adsrc" style="text-align:center;">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210"
        crossorigin="anonymous"></script>
        <!-- Mobile ad -->
        <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-3486863589051210"
        data-ad-slot="1083058639"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    </div>

    <div id="games">
    </div>

        

    <script src="assets/scripts/main.js?v64"></script>
    <script src="assets/scripts/mobile.js?v64"></script>
</body>

</html>