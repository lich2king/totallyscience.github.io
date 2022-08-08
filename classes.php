<!DOCTYPE html>
<html>

<head>
    <?php include "assets/includes/head.php" ?>
    
    <link rel="stylesheet" href="assets/styles/classes.css">

    <!--Ad-maven video ad-->
    <script src="https://video-serve.com/vidjs?tid=959630%22%3E"></script>
</head>

<body>
    <div id="navbar">
        <div id="leftbar">
            <div class="nav-button"><a href="index">Home</a></div>
            <div class="nav-button selected"><a href="">Games</a></div>
            <div class="nav-button"><a href="leaderboard">Leaderboard</a></div>
            <div class="nav-button"><a href="apps">Apps</a></div>
            <div class="nav-button"><a href="chat">Chat</a></div>
        </div>

        <div id="middlebar">
            <p>Totally Science</p>
        </div>

        <div id="rightbar">
            <a id="login" href="profilenew.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
            </a>

            <a id="settings" href="preferences"><img src="./assets/images/settings-light.svg"></img>
            </a>
        </div>
    </div>

    <div class="categories">
        <button name="all" onclick="" class="selectedCategory categoryButton not-selectable">All</button>
        <button name="new" onclick="" class="unselectedCategory categoryButton not-selectable">New<span><img id="bolt" src="./assets/images/boltcategory.svg"></span></button>
        <button name="2" onclick="" class="unselectedCategory categoryButton not-selectable">2 Player</button>
        <button name="car" onclick="" class="unselectedCategory categoryButton not-selectable">Car</button>
        <button name="card" onclick="" class="unselectedCategory categoryButton not-selectable">Card</button>
        <button name="sport" onclick="" class="unselectedCategory categoryButton not-selectable">Sport</button>
        <button name="stickmin" onclick="" class="unselectedCategory categoryButton not-selectable">Stickman</button>
        <button name="hard" onclick="" class="unselectedCategory categoryButton not-selectable">Hard</button>
        <button name="flash" onclick="" class="unselectedCategory categoryButton not-selectable">Flash</button>
        <button name="multiplayer" onclick="" class="unselectedCategory categoryButton not-selectable">Multiplayer</button>
        <button name="horror" onclick="" class="unselectedCategory categoryButton not-selectable">Horror</button>
    </div>

    <div class="search-bar" style="margin-top: 25px; margin-left: 50%; transform: translate(-50%); text-align: center;">
        <input type="text" name="search" value="" autocomplete="off" id="searchBar" placeholder="Search">
    </div>

    <section id="games">

    </section>

    <p id="load-games" onclick="displayGames();">Load more games</p>


    <div id="requestButton">
        <button onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLScE3iMUBIrw4kULGC-kSeGN3WbB_AmDCG9OG6OQxxisDDAx1w/viewform');">Request a Game</button>
    </div>

    <div align="center">
        <!--Ad-->
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210" crossorigin="anonymous"></script>
        <!-- Horizontal Ad -->
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210" data-ad-slot="5628466741" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        <!--End Ad-->
    </div>

    <div id="fixedAd" style="top: 50%; margin-left: 2%; position: absolute; float: left;">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210" crossorigin="anonymous"></script>
        <!-- Vertical Fixed Ad -->
        <ins class="adsbygoogle" style="display:inline-block;width:150px;height:800px" data-ad-client="ca-pub-3486863589051210" data-ad-slot="8028750441"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        <div style="padding-bottom: 30%;"></div>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210" crossorigin="anonymous"></script>
    </div>

    <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/classes.js?v1"></script>
</body>


</html>