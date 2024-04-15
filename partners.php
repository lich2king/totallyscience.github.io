<!DOCTYPE html>
<html lang="en">

<head>
    <title>Partners - Definitely Science - Free Online Unblocked Games</title>
    <?php include "assets/includes/head.php" ?>

	<!-- <link rel='stylesheet' href='assets/styles/partners.css'> -->
    


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

    <div id="apps"></div>

    <?php include "assets/includes/footer.php" ?>

    <script>
        window.addEventListener('load', async () => {
            let partnersRes = await fetcher(`/partners`);
            partners = await partnersRes.json();

            for (let x = 0; x < partners.length; x++) {
                const name = partners[x].name;
                const image = partners[x].image;
                const website = partners[x].website;
                const description = partners[x].description;

                const partnerEle = `
                    <div onclick="window.open('${website}', '_blank')" class="card game">
                        <img src="${image}" style="background-color: #ffffff;" title="Totally Science Partner - ${name}" alt="${name} logo">
                        <h1>${name}</h1>
                        <h2>${description}</h2>
                        <button class="launch">Visit</button>
                    </div>
                `;

                document.getElementById(`apps`).innerHTML += partnerEle;
            }

            let response = await fetcher(`/auth/check`);
            if (response.status == 200) {
                // display points count in navbar
                let json = await response.json();
                setPointsDisplay(json.points || 0, json.username || "");
            }
        });
    </script>
</body>

</html>