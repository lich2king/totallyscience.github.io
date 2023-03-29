var vid = document.getElementById('dispenserVid');

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

document.getElementById('dispenserVid').addEventListener('ended', myHandler, false);

async function myHandler(e) {
    if (rollingDie) {
        await fetcher(`/assets/php/shop/unlockCharacter.php`)
            .then((response) => response.text())
            .then((res) => {
                let mini = res.split(':')[1];
                let rarity = res.split(':')[0];

                console.log(`won prize: ${mini}`);
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
            });
    }
}

var rollingDie = false;
var tspoints = 0;
var characterFullScreen = false;

async function dispenseCharacter() {
    console.log(checkLoggedIn());
    if (!rollingDie && checkLoggedIn()) {
        console.log(tspoints);
        if (tspoints >= 1000) {
            let currentVal = document.getElementById('pointsDisplay').innerText;
            counter('pointsDisplay', parseInt(currentVal), parseInt(currentVal - 1000), 2000);
            document.getElementById('dispenseButton').innerHTML = 'Dispensing...';
            playVid();
            rollingDie = true;
        } else {
            notEnoughPoints();
        }
    } else if (!checkLoggedIn()) {
        console.log(checkLoggedIn());
        notLoggedIn();
    }
}

function notEnoughPoints() {
    if (document.getElementById('dispenseButton').innerHTML != 'Not enough points!') {
        setTimeout(function () {
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

function checkLoggedIn() {
    res = JSON.parse(authToken);
    if (res != null) {
        console.log('Not null');
        const isLoggedIn = res['isLoggedIn'];
        console.log(isLoggedIn);
        if (isLoggedIn == 'true') {
            console.log('true');
            return true;
        }
    }
    return false;
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
        console.log('clicked');
        console.log(characterFullScreen);
        characterFullScreen = false;
        document.getElementById('prizeWon').classList.add('slideAway');
        rollingDie = false;
        tspoints -= 1000;
        setTimeout(function () {
            console.log('intervaled');
            document.getElementById('prizeWon').classList.remove('active');
            document.getElementById('prizeWon').classList.remove('slideAway');
            document.getElementById('prizeWon').innerHTML = '';
        }, 1500);
    }
});

seeUnlockedMinis();

function seeUnlockedMinis() {
    if (checkLoggedIn()) {
        fetcher(`/assets/php/shop/unlockedMinis.php`)
            .then((response) => response.text())
            .then((res) => {
                let minis = res.split(';');

                for (let i = 1; i < minis.length; i++) {
                    document.getElementsByName(minis[i])[0].classList.remove('locked');
                }
            });
    }
}
