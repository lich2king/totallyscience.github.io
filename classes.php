<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/classes.css?v6'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <h1 id="topText">
        
    </h1>

    <div id="searchcatParent">
        <div id="searchcat">
            <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search">
        </div>

        <div class="adsrc adhorz" style="text-align:center;">
            <!-- Under the Game -->
            <ins class="adsbygoogle" style="display:inline-block;width:800px;height:100px"
                data-ad-client="ca-pub-3486863589051210" data-ad-slot="3824383684"></ins>
            <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
        
        <div id="filteredGames">

        </div>

        <div id="noSearch" style="display:none">
            <p>
                You search terms does not match any games...
            </p>
        </div>


        <div id="games">
        </div>

        
    </div>

    <div style="padding-bottom: 14vh"></div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/classes.js?v101"></script>
</body>

</html>