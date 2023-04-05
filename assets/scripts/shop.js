const vid = document.getElementById('dispenserVid');
const token = JSON.parse(authToken);

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

document.getElementById('dispenserVid').addEventListener('ended', myHandler, false);

async function myHandler() {
    if (rollingDie) {
        let res = await fetcher(`${activeServer}/points/shop/unlock`);

        if (res.status == 400) {
            return notEnoughPoints();
        }

        let text = await res.text();
        let json = JSON.parse(text);

        let mini = json.mini;
        let rarity = json.rarity;

        characterFullScreen = true;

        document.getElementById('dispenseButton').innerHTML = '1000 pts';
        document.getElementById('prizeWon').innerHTML += `<img id='prizeWonImg' src='/assets/minis/JPGs/${mini}.jpg'>`;
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
    }
}

var rollingDie = false;
var tspoints = 0;
var characterFullScreen = false;

async function dispenseCharacter() {
    if (!rollingDie && token) {
        if (tspoints >= 1000) {
            let currentVal = document.getElementById('pointsDisplay').innerText;
            counter('pointsDisplay', parseInt(currentVal), parseInt(currentVal - 1000), 2000);
            document.getElementById('dispenseButton').innerHTML = 'Dispensing...';
            playVid();
            rollingDie = true;
        } else {
            notEnoughPoints();
        }
    } else if (!token) {
        notLoggedIn();
    }
}

function notEnoughPoints() {
    if (document.getElementById('dispenseButton').innerHTML != 'Not enough points!') {
        setTimeout(() => {
            document.getElementById('dispenseButton').innerHTML = '1000 pts';
        }, 2000);
    }
    document.getElementById('dispenseButton').innerHTML = 'Not enough points!';
}

function notLoggedIn() {
    if (document.getElementById('dispenseButton').innerHTML != 'Not logged in!') {
        setTimeout(function () {
            document.getElementById('dispenseButton').innerHTML = '1000 pts';
        }, 2000);
    }
    document.getElementById('dispenseButton').innerHTML = 'Not logged in!';
}

getPoints();

async function getPoints() {
    let res = await fetcher(`${activeServer}/points/check`);
    let points = await res.text();

    tspoints = parseInt(points);
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

document.body.addEventListener('click', function (evt) {
    if (characterFullScreen) {
        characterFullScreen = false;
        document.getElementById('prizeWon').classList.add('slideAway');
        rollingDie = false;
        tspoints -= 1000;
        setTimeout(function () {
            document.getElementById('prizeWon').classList.remove('active');
            document.getElementById('prizeWon').classList.remove('slideAway');
            document.getElementById('prizeWon').innerHTML = '';
        }, 1500);
    }
});

seeUnlockedMinis();

async function seeUnlockedMinis() {
    if (token) {
        let res = await fetcher(`${activeServer}/points/shop/unlocked`);
        let text = await res.text();

        let minis = text.split(';');

        for (let i = 1; i < minis.length; i++) {
            if (minis[i] == 'undefined') continue;

            document.getElementsByName(minis[i])[0].classList.remove('locked');
        }
    }
}
