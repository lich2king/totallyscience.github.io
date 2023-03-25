<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <title>Apps - Totally Science - Free Online Unblocked Games</title>

    <style>
        .tn_banner {
            text-align: center;
            font-size: 15pt;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            top: 80px;
            width: 800px;
        }

        #apps {
            margin: auto;
            margin-top: 150px;
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
            width: 300px;
            height: 100px;
            margin-bottom: 10px;
            border-radius: 5px;
            background-color: var(--dark-accent);
            position: relative;
            padding: 20px;
            transition: 0.2s all;
        }

        div.card>h1 {
            font-family: Rubik, sans-serif;
            font-size: 20px;
            margin: 0px;
            margin-left: 30px;
            margin-bottom: 5px;
            text-align: left;
            color: var(--light-color);
        }

        div.card>h2 {
            font-family: Rubik, sans-serif;
            font-size: 16px;
            margin: 10px;
            padding-left: 50px;
            text-align: right;
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
            float: right;
        }

        div.card.game {
            height: 96px;
            padding: 10px;
            position: relative;
            padding-left: 85px;
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

    <a class="tn_banner" target="_blank" href="https://tnvpn.com/">Check out Titanium Network's VPN to browse the internet without censorship.</a>

    <div id="apps"></div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/apps.js?v12"></script>
</body>

</html>