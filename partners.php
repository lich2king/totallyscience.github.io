<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/partners.css'>

    <title>Partners - Totally Science - Free Online Unblocked Games</title>

    <style>
    #apps {
        margin: auto;
        margin-top: 140px;
    }

    body,
    html {
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        border: none;
        font-family: 'Rubik', sans-serif;
        overflow-x: hidden;
    }

    * {
        box-sizing: border-box;
    }

    div.card {
        max-width: 315px;
        min-height: 100px;
        margin-bottom: 10px;
        border-radius: 5px;
        background-color: var(--dark-accent);
        position: relative;
        padding: 20px;
        transition: 0.2s all;

        display: flex;
        flex-direction: column;

    }

    div.card>h1 {
        font-family: Rubik, sans-serif;
        font-size: 26px;
        margin: 0px;
        margin-left: 30px;
        margin-bottom: 5px;
        text-align: left;
        color: var(--light-color);
        padding-left: 85px;
        white-space: nowrap;
    }

    div.card>h2 {
        font-family: Rubik, sans-serif;
        font-size: 16px;
        margin: 10px;
        margin-top: 50px;

        text-align: left;
        color: var(--light-color);
    }

    button.launch {
        width: 150px;
        height: 35px;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.2s all;
        border: none;
        margin: 0px;
        padding: 0px;
        margin-top: 10px;
        color: var(--light-color);
        font-family: Rubik, sans-serif;
        font-size: 18px;
        background: var(--accent-color);
        align-self: center;
    }

    div.card.game {
        min-height: 96px;
        padding: 10px;
        position: relative;
        cursor: default;
    }

    div.card.game>img {
        position: absolute;
        top: 0px;
        left: 0px;
        transition: 0.2s all;
        transform: translate(-20px, -20px);
        padding: 10px;
        border-radius: 15px;
        border: 5px solid var(--dark-accent);
        background: var(--light-color);
        width: 100px;
        height: 100px;
    }

    div.card>h1 {
        margin-left: 0px;
    }

    div.card.game:hover {
        transform: scale(1.05);
    }

    div.card.game>button:hover {
        transform: scale(1.05);
    }

    div.card.game>img:hover {
        transform: translate(-20px, -20px) scale(1.05);
    }

    * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }

    div#apps {
        max-width: 1100px;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        grid-template-columns: auto auto auto;
    }

    div.card.game {
        margin-bottom: 60px;
    }


    .partner {
        width: 500px;
        height: 300px;
        background-color: var(--dark-accent);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .partner div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .partner div img {
        border-radius: 20px;
        position: absolute;
        object-fit: cover;
    }

    @media (max-width: 1200px) {
        div#apps {
            max-width: 800px;
            grid-template-columns: auto auto;
        }
    }

    @media (max-width: 900px) {
        div#apps {
            max-width: 400px;
            grid-template-columns: auto;
        }
    }
    </style>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="apps">
        <div onclick="window.open('https:/\/kazwire.com/', '_blank')" class="card game">
            <img src="/assets/images/partners/Kazwire.png" style="background-color: #ffffff;"
                title="Totally Science Partner - Kazwire" alt="Kazwire logo">
            <h1>Kazwire</h1>
            <h2>From the gaming classics to the internet, access YouTube, TikTok, and even your favorite games freely
                and securely.</h2>
            <button class="launch">Visit</button>
        </div>

        <div onclick="window.open('https:/\/weblfg.com/', '_blank')" class="card game">
            <img src="/assets/images/partners/weblfg.webp" style="background-color: #ffffff;"
                title="Totally Science Partner - Web LFG" alt="Web LFG logo">
            <h1>Web LFG</h1>
            <h2>WebLFG is a hub for the best games on the internet, all available for free! There is so much for you to
                choose from.</h2>
            <button class="launch">Visit</button>
        </div>

        <div onclick="window.open('https:/\/titaniumnetwork.org/', '_blank')" class="card game">
            <img src="/assets/images/partners/TN.webp" style="background-color: #ffffff;"
                title="Totally Science Partner - Titanium Network" alt="Titanium Network logo">
            <h1>Titanium Network</h1>
            <h2>Titanium Network is the hub organization dedicated to providing services related to bypassing internet
                censorship.</h2>
            <button class="launch">Visit</button>
        </div>

        <div onclick="window.open('https:/\/bgs.pages.dev/g/glanding', '_blank')" class="card game">
            <img src="/assets/images/partners/bigfoot.png" style="background-color: #ffffff;"
                title="Totally Science Partner - Bigfoot's Game Shack" alt="Bigfoot's Game Shack logo">
            <h1 style="font-size: 21px;">Bigfoot's Game Shack</h1>
            <h2>Get ready to level up your gaming experience with Bigfoot's Game Shack, offering a massive selection of
                over 500+ games built for Chromebook gaming.</h2>
            <button class="launch">Visit</button>
        </div>

        <div onclick="window.open('https:/\/phantom.delusionz.xyz/', '_blank')" class="card game">
            <img src="/assets/images/partners/phantomgames.png" style="background-color: #ffffff;"
                title="Totally Science Partner - Phantom Games" alt="Phantom Games logo">
            <h1>Phantom Games</h1>
            <h2>PhantomGames where simplicity and unblocked fun collide!
            </h2>
            <button class="launch">Visit</button>
        </div>

        <div onclick="window.open('https:/\/irunblocked.xyz/', '_blank')" class="card game">
            <img src="/assets/images/partners/IRunblocked.png" style="background-color: #ffffff;"
                title="Totally Science Partner - IR Unblocked" alt="IR Unblocked logo">
            <h1>IR Unblocked</h1>
            <h2>IR Unblocked is the One-Stop Shop for all of your Unblocked Gaming, Scripting, and Entertainment Needs!
            </h2>
            <button class="launch">Visit</button>
        </div>

        <div onclick="window.open('https:/\/bluehatcrew.tk/', '_blank')" class="card game">
            <img src="/assets/images/partners/bluehatcrew.png" style="background-color: #ffffff;"
                title="Totally Science Partner - Blue Hat Crew" alt="Blue Hat Crew logo">
            <h1>Blue Hat Crew</h1>
            <h2>Meet the Blue Hat Crew - student tech experts who create solutions for students. Unblockers, unblocking
                methods - we have what you need for easy access to online resources.
            </h2>
            <button class="launch">Visit</button>
        </div>

        <div onclick="window.open('https:/\/bluehatcrew.tk/', '_blank')" class="card game">
            <img src="/assets/images/partners/bluehatcrew.png" style="background-color: #ffffff;"
                title="Totally Science Partner - Blue Hat Crew" alt="Blue Hat Crew logo">
            <h1>Blue Hat Crew</h1>
            <h2>Meet the Blue Hat Crew - student tech experts who create solutions for students. Unblockers, unblocking
                methods - we have what you need for easy access to online resources.
            </h2>
            <button class="launch">Visit</button>
        </div>

        <div onclick="window.open('https:/\/artclass.site/', '_blank')" class="card game">
            <img src="/assets/images/partners/bluehatcrew.png" style="background-color: #ffffff;"
                title="Totally Science Partner - Art Class" alt="Art Class logo">
            <h1>Art Class</h1>
            <h2>Art Class is the perfect website for anyone looking to play unblocked games, or use popular websites.
                Our collection includes classics like Roblox, Subway Surfers, Idle Breakout, YouTube, and Discord - all
                unblocked and easy to use.
            </h2>
            <button class="launch">Visit</button>
        </div>


    </div>

    <?php include "assets/includes/footer.php" ?>
</body>

</html>