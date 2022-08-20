<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/gamesnew.css?v1'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <h1 id="topText">
    </h1>

    <div id="searchcatParent">
        <div id="searchcat">
            <div id="firstcatrow">
                <button name="all" onclick="" class="selectedCategory categoryButton">All</button>
                <button name="new" onclick="" class="unselectedCategory categoryButton">New</button>
                <button name="popular" onclick="" class="unselectedCategory categoryButton">Popular</button>
                <button name="2" onclick="" class="unselectedCategory categoryButton">2 Player</button>
                <button name="car" onclick="" class="unselectedCategory categoryButton">Car</button>
                <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search">
                <button name="stickman" onclick="" class="unselectedCategory categoryButton">Stickman</button>
                <button name="card" onclick="" class="unselectedCategory categoryButton">Card</button>
                <button name="hard" onclick="" class="unselectedCategory categoryButton">Hard</button>
                <button name="fnf" onclick="" class="unselectedCategory categoryButton">FNF</button>
                <button name="multiplayer" onclick="" class="unselectedCategory categoryButton">Multiplayer</button>
            </div>
            <div id="nextcatrow">
                <button name="fnaf" onclick="" class="unselectedCategory categoryButton">FNAF</button>
                <button name="emulator" onclick="" class="unselectedCategory categoryButton">Emulator</button>
                <button name="puzzle" onclick="" class="unselectedCategory categoryButton">Puzzle</button>
                <button name="scratch" onclick="" class="unselectedCategory categoryButton">Scratch</button>
                <button name="sport" onclick="" class="unselectedCategory categoryButton">Sport</button>
                <button name="recent" onclick="" class="unselectedCategory categoryButton">Recent</button>
                <button name="liked" onclick="" class="unselectedCategory categoryButton">Liked</button>
                <button name="gamepass" onclick="" class="unselectedCategory categoryButton">GamePass</button>
            </div>
        </div>


        <div id="games">
        </div>

        <div id="noSearch" style="display:none">
            <p>
                You search terms did not match any games...
                <br>
                Would you like to request it?
            </p>

            <button class="button">Request Game</button>
        </div>
    </div>

    <div style = "padding-bottom: 14vh"></div>
    
    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/gamesnew.js?v17"></script>
</body>

</html>