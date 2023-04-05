<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <style>
        #dispenserCon {
            width: 400px;
            height: 500px;
            background-color: white;
            margin: auto;
            margin-top: 100px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
        }

        #dispenserCon video {
            width: 400px;
            height: 400px;
        }

        #dispenserCon button {
            min-width: 160px;
            padding: 4%;
            font-size: 1rem;
            font-weight: 100;
            cursor: pointer;
            margin-left: auto;
            margin-right: auto;
        }

        #minis {
            margin-left: 50px;
            margin-right: 50px;
            color: white;
            font-size: 1rem;
            user-select: none;
        }

        #minis .miniCon {
            margin-left: 50px;
            margin-right: 50px;
            color: white;
            font-size: 1rem;
            display: flex;
            flex-direction: row;
            gap: 20px;
            overflow: auto;
            width: 90vw;
        }

        .miniCon::-webkit-scrollbar {
            height: 7px;
        }

        .miniCon img {
            width: 100px;
            height: 100px;
            border-radius: 20px;
            user-drag: none;
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            margin-bottom: 5px;
        }

        .miniCon img.locked {
            filter: blur(3px) brightness(30%) grayscale(1);
        }

        #prizeWon {
            position: fixed;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            width: 20px;
            height: 20px;
            -webkit-filter: drop-shadow(0px 0px 15px rgb(0, 0, 0));
            transition: all 0.3s;
            transform-origin: center;
            margin-top: 0%;
        }

        #prizeWon.active {
            width: 400px;
            height: 400px;
            animation: prize-animation 1s ease-in-out infinite;
        }

        #prizeWon.slideAway {
            transition: all 1s;
            margin-top: 100vh;
        }

        #prizeWon img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            user-drag: none;
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            outline: solid 1px var(--rarityColor);
        }

        @keyframes prize-animation {
            0% {
                -webkit-filter: drop-shadow(0px 0px 30px var(--rarityColor));
                transform: translate(50%, -50%) rotate(13deg);
            }
            50% {
                -webkit-filter: drop-shadow(0px 0px 55px var(--rarityColor));
                transform: translate(50%, -50%) rotate(-13deg);
            }
            100% {
                -webkit-filter: drop-shadow(0px 0px 30px var(--rarityColor));
                transform: translate(50%, -50%) rotate(13deg);
            }
        }
    </style>

    <title>Shop - Totally Science - Free Online Unblocked Games</title>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>


    <div id="dispenserCon">
        <video id="dispenserVid" width="320" height="176">
            <source src="\assets\minis\Dispenser.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>

        <button class="button" onclick="dispenseCharacter()" id="dispenseButton">1000 pts</button>
    </div>

    <div id="minis">
        <h1>Common Minis</h1>

        <div class="miniCon">
            <img name="comwatermellon" src="\assets\minis\JPGs\comwatermellon.jpg" class="locked">
            <img name="comtomato" src="\assets\minis\JPGs\comtomato.jpg" class="locked">
            <img name="comstrawberrymale" src="\assets\minis\JPGs\comstrawberrymale.jpg" class="locked">
            <img name="comstrawberry" src="\assets\minis\JPGs\comstrawberry.jpg" class="locked">
            <img name="comprickle" src="\assets\minis\JPGs\comprickle.jpg" class="locked">
            <img name="compizza" src="\assets\minis\JPGs\compizza.jpg" class="locked">
            <img name="compineapple" src="\assets\minis\JPGs\compineapple.jpg" class="locked">
            <img name="comavocado" src="\assets\minis\JPGs\comavocado.jpg" class="locked">
            <img name="compear" src="\assets\minis\JPGs\compear.jpg" class="locked">
            <img name="compeach" src="\assets\minis\JPGs\compeach.jpg" class="locked">
            <img name="commilk" src="\assets\minis\JPGs\commilk.jpg" class="locked">
            <img name="comlemon" src="\assets\minis\JPGs\comlemon.jpg" class="locked">
            <img name="comegg" src="\assets\minis\JPGs\comegg.jpg" class="locked">
            <img name="comdragonfruit" src="\assets\minis\JPGs\comdragonfruit.jpg" class="locked">
            <img name="comcarrot" src="\assets\minis\JPGs\comcarrot.jpg" class="locked">
            <img name="combread" src="\assets\minis\JPGs\combread.jpg" class="locked">
            <img name="comberry" src="\assets\minis\JPGs\comberry.jpg" class="locked">
            <img name="comapple" src="\assets\minis\JPGs\comapple.jpg" class="locked">
        </div>

        <h1>Rare Minis</h1>

        <div class="miniCon">
            <img name="rarestormcloud" src="\assets\minis\JPGs\rarestormcloud.jpg" class="locked">
            <img name="raresoccer" src="\assets\minis\JPGs\raresoccer.jpg" class="locked">
            <img name="rarepopsicle" src="\assets\minis\JPGs\rarepopsicle.jpg" class="locked">
            <img name="raremushroom" src="\assets\minis\JPGs\raremushroom.jpg" class="locked">
            <img name="rareketchup" src="\assets\minis\JPGs\rareketchup.jpg" class="locked">
            <img name="rareheart" src="\assets\minis\JPGs\rareheart.jpg" class="locked">
            <img name="rareflower" src="\assets\minis\JPGs\rareflower.jpg" class="locked">
            <img name="rarefire" src="\assets\minis\JPGs\rarefire.jpg" class="locked">
            <img name="raredonut" src="\assets\minis\JPGs\raredonut.jpg" class="locked">
            <img name="rarecup" src="\assets\minis\JPGs\rarecup.jpg" class="locked">
            <img name="rarecoffee" src="\assets\minis\JPGs\rarecoffee.jpg" class="locked">
            <img name="rarebooze" src="\assets\minis\JPGs\rarebooze.jpg" class="locked">
        </div>

        <h1>Epic Minis</h1>

        <div class="miniCon">
            <img name="epicworld" src="\assets\minis\JPGs\epicworld.jpg" class="locked">
            <img name="epicpc" src="\assets\minis\JPGs\epicpc.jpg" class="locked">
            <img name="epicmovie" src="\assets\minis\JPGs\epicmovie.jpg" class="locked">
            <img name="epichotdog" src="\assets\minis\JPGs\epichotdog.jpg" class="locked">
            <img name="epicdrink" src="\assets\minis\JPGs\epicdrink.jpg" class="locked">
            <img name="epicdisco" src="\assets\minis\JPGs\epicdisco.jpg" class="locked">
            <img name="epicboombox" src="\assets\minis\JPGs\epicboombox.jpg" class="locked">
            <img name="epicbomb" src="\assets\minis\JPGs\epicbomb.jpg" class="locked">
        </div>

        <h1>Legendary Minis</h1>

        <div class="miniCon">
            <img name="legdollar" src="\assets\minis\JPGs\legdollar.jpg" class="locked">
            <img name="leglemonade" src="\assets\minis\JPGs\leglemonade.jpg" class="locked">
            <img name="legsuitcase" src="\assets\minis\JPGs\legsuitcase.jpg" class="locked">
            <img name="legsun" src="\assets\minis\JPGs\legsun.jpg" class="locked">
            <img name="legvr" src="\assets\minis\JPGs\legvr.jpg" class="locked">
        </div>
    </div>

    <div id="prizeWon"></div>

    <?php include "assets/includes/footer.php" ?>

    <script>
        const vid = document.getElementById('dispenserVid');
        const token = JSON.parse(authToken);

        async function playVid() {
            const dispenseButton = document.getElementById('dispenseButton');

            vid.play();
            
            let res = await fetcher(`${activeServer}/points/shop/unlock`);
            let text = await res.text();

            if (text == 'false') {
                return dispenseButton.innerHTML = 'All Minis Unlocked';
            }

            let currentVal = document.getElementById('pointsDisplay').innerText;

            counter('pointsDisplay', parseInt(currentVal), parseInt(currentVal - 1000), 2000);

            let json = JSON.parse(text);

            if (res.status == 400) {
                if (dispenseButton.innerHTML != 'Not enough points!') {
                    setTimeout(() => {
                        dispenseButton.innerHTML = '1000 pts';
                    }, 2000);
                }

                return dispenseButton.innerHTML = 'Not enough points!';
            }

            vid.addEventListener('ended', async () => {
                let mini = json.mini;
                let rarity = json.rarity;

                dispenseButton.innerHTML = '1000 pts';
                document.getElementById('prizeWon').innerHTML = `<img id='prizeWonImg' src='/assets/minis/JPGs/${mini}.jpg'>`;
                document.getElementById('prizeWon').classList.add('active');
                document.getElementsByName(mini)[0].classList.remove('locked');

                if (rarity == 'Common') {
                    document.getElementById('prizeWon').style.setProperty('--rarityColor', 'rgb(120, 120, 120)');
                } else if (rarity == 'Rare') {
                    document.getElementById('prizeWon').style.setProperty('--rarityColor', 'rgb(0, 69, 149)');
                } else if (rarity == 'Epic') {
                    document.getElementById('prizeWon').style.setProperty('--rarityColor', 'rgb(178, 0, 191)');
                } else if (rarity == 'Legendary') {
                    document.getElementById('prizeWon').style.setProperty('--rarityColor', 'rgb(233, 241, 0)');
                }
            }, false);
        }

        function dispenseCharacter() {
            const dispenseButton = document.getElementById('dispenseButton');

            if (vid.paused && token) {
                dispenseButton.innerHTML = 'Dispensing...';

                playVid();
            } else if (!token) {
                if (dispenseButton.innerHTML != 'Not logged in!') {
                    setTimeout(() => {
                        dispenseButton.innerHTML = '1000 pts';
                    }, 2000);
                }
                dispenseButton.innerHTML = 'Not logged in!';
            }
        }


        window.addEventListener('load', async () => {
            // if user is logged in, load minis they have unlocked
            if (token) {
                let res = await fetcher(`${activeServer}/points/shop/unlocked`);
                let text = await res.text();

                let minis = text.split(';');

                for (let i = 1; i < minis.length; i++) {
                    if (minis[i] == 'undefined') continue;

                    document.getElementsByName(minis[i])[0].classList.remove('locked');
                }
            }
        });

        document.body.addEventListener('click', () => {
            // hide awarded mini from front center of screen when clicked
            const prizeWon = document.getElementById('prizeWon');

            if (prizeWon.innerHTML != '') {
                prizeWon.classList.add('slideAway');

                setTimeout(() => {
                    prizeWon.classList.remove('active', 'slideAway');
                    prizeWon.innerHTML = '';
                }, 1500);
            }
        });
    </script>
</body>

</html>