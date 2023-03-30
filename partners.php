<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/partners.css'>

    <title>Shop - Totally Science - Free Online Unblocked Games</title>

    <style>
        .tn_banner {
            text-align: center;
            font-size: 15pt;
            position: relative;
            width: 70%;
            left: 15%;
            top: 80px;
        }

        #apps {
            margin: auto;
            margin-top: 140px;
        }
        body, html {
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
            font-size: 25px;
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
            margin-top:50px;
            
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


    <!-- <a href="https://kazwire.com/" target="_blank" rel="noreferrer" class="partner" >
            <div onclick="partner('kazwire')">
                <img src="https://kazwire.com/logo.png" alt="Kazwire">
                <h3 style="color:#fff;">Kazwire</h3>
                <p>From the gaming classics to the internet, access YouTube, TikTok, and even your favorite games freely and securely.</p>
            </div>
    </a> -->
    <div id="apps">
        <div onclick="window.open('https:/\/kazwire.com/', '_blank')" class="card game">
            <img src="/assets/images/partners/Kazwire.png" style="background-color: #ffffff;">
            <h1>Kazwire</h1>
            <h2>From the gaming classics to the internet, access YouTube, TikTok, and even your favorite games freely and securely.</h2>
            <button class="launch">Visit</button>
        </div>
        <div onclick="window.open('https:/\/weblfg.com/', '_blank')" class="card game">
            <img src="/assets/images/partners/WebLFG.png" style="background-color: #ffffff;">
            <h1>Web LFG</h1>
            <h2>WebLFG is a hub for the best games on the internet, all available for free! There is so much for you to choose from.</h2>
            <button class="launch">Visit</button>
        </div>
        <div onclick="window.open('https:/\/titaniumnetwork.org/', '_blank')" class="card game">
            <img src="/assets/images/partners/TN.webp" style="background-color: #ffffff;">
            <h1>Titanium Network</h1>
            <h2>Titanium Network is the hub organization dedicated to providing services related to bypassing internet censorship.</h2>
            <button class="launch">Visit</button>
        </div>
    </div>
    

    <?php include "assets/includes/footer.php" ?>

</body>

</html>