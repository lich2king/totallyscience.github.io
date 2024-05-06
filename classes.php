<!DOCTYPE html>
<html lang="en">

<head>
    <title>Classes - Definitely Science</title>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/classes.css?v9'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <h1 id="topText"></h1>

    <div id="searchcatParent">
        <div id="searchcat">
            <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search">
        </div>

        <div class="adsrc adhorz" style="text-align:center;"></div>

        <div id="filteredGames"></div>

        <div id="noSearch" style="display:none">
            <p>You search terms does not match any games...</p>
        </div>

        <div id="games"></div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/classes.js?v146"></script>
</body>

</html>