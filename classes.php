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

    <script src="assets/scripts/classes.js?v98"></script>
</body>

</html>