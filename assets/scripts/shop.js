var vid = document.getElementById("dispenserVid");


function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

document.getElementById('dispenserVid').addEventListener('ended', myHandler, false);

function myHandler(e) {
    if (rollingDie) {
        document.getElementById('prizeWon').innerHTML += `<img id='prizeWonImg' src='/assets/minis/JPGs/!Avatar31.jpg'>`;
        document.getElementById('prizeWon').classList.add('active');
    }
}






//Everyone starts with first tomato mini
//If logged in:
//If you click the 1000pts button:
//If you have enough points:
//Play take away points animation, but don't take it away in php yet
//Pick 1-10
//40% common, 30% rare, 20% epic, 10% legendary
//From the rarity, pick a random character
//Check if the character is taken
//If if it, pick a new one from the beginning
//Else, unlock it in the css and play the prize animation
//Take away points in the same php script that unlocks it

var rollingDie = false;


async function dispenseCharacter() {
    if (checkLoggedIn()) {
        console.log(await getPoints());
        if (await getPoints() >= 1000) {
            let currentVal = document.getElementById('pointsDisplay').innerText;
            counter('pointsDisplay', parseInt(currentVal), parseInt(currentVal - 1000), 2000);
            playVid();
            rollingDie = true;
        } else {
            alert("Not enough points!");
        }
    }

}

function checkLoggedIn() {
    res = JSON.parse(authToken);

    if (res != null) {
        const isLoggedIn = res['isLoggedIn'];

        if (isLoggedIn == 'true') {
            return true;
        }
    }
    return false;
}

async function getPoints() {
    await fetcher(`assets/php/points/checkpoints.php`)
        .then((points) => points.text())
        .then((points) => {
            console.log(points);
            if (points.startsWith('error')) location.reload();
            if (!isNaN(points)) {
                return parseInt(points);
            }
            return "l";
        });
}

function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, step);
}