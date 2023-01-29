// READY

document.getElementById('gamesnav').classList.add('selected');

// featured games slides code
let shouldAutoSwitch = true;
let slideIndex = 1;
const slides = document.getElementsByClassName('featureSlot');
const switchSlide = (n) => {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = '';
};
const plusSlides = (n) => {
    shouldAutoSwitch = false;
    switchSlide((slideIndex += n));
};
const autoPlusSlides = (n) => {
    switchSlide((slideIndex += n));
};
const autoSwitch = () => {
    if (shouldAutoSwitch) {
        setTimeout(() => {
            if (shouldAutoSwitch) {
                autoPlusSlides(1);
                autoSwitch();
            }
        }, 2500);
    }
};

// DISABLED BECAUSE IT NEEDS TO BE RE-PROGRAMMED
switchSlide(slideIndex);
autoSwitch();

// Load Games
const gamesDiv = document.getElementById('games');
const maxGames = 50;

let selectedTopic = 'all';
let displayedGames = 0;
let games;
let sorted;
let hasLoaded = false;
let loggedIn = false;

let sortObject = (obj) =>
    Object.keys(obj)
        .sort()
        .reduce((res, key) => ((res[key] = obj[key]), res), {});

document.addEventListener('DOMContentLoaded', () => {
    fetch(`assets/games.json?1`)
        .then((response) => response.json())
        .then((retrievedGames) => {
            games = retrievedGames;
            loadCookies();
        });
});

async function loadCookies() {
    await fetch(`assets/php/getCookie.php`)
        .then((response) => response.text())
        .then((res) => {
            res = JSON.parse(res);
            if (res != null) {
                const isLoggedIn = res['isLoggedIn'];

                if (isLoggedIn == 'true') {
                    loggedIn = true;
                }
            }
        });

    //when done
    loadTopic();
    suggestGames();
    checkReward();
}

function loadTopic() {
    displayedGames = 0;

    document.getElementById('noSearch').style.display = 'none';

    sorted = sortObject(games);

    if (selectedTopic != 'all') {
        const gameButtons = document.getElementsByClassName('all');

        Array.from(gameButtons).forEach((game) => {
            if (game.classList.contains(selectedTopic)) {
                game.setAttribute(
                    'style',
                    `background-image: url(${
                        games[game.getAttribute('name')].image
                    })`
                );
            } else {
                game.setAttribute('style', 'display:none');
            }
        });
    } else {
        gamesDiv.innerHTML = '';
        displayGames();
    }
}

async function displayGames() {
    for (let x = 0; x < Object.keys(sorted).length; x++) {
        let keys = Object.keys(sorted);

        const name = keys[x];
        const data = sorted[keys[x]];

        let classlist = '';
        classlist = data.tags.join(' ');

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        const gameDate = new Date(data.date_added);

        if (gameDate > weekAgo) {
            classlist += ' new';
        }

        let gameBtn;
        if (x >= maxGames) {
            gameBtn = createGameButton(name, 'hidden');
        } else {
            gameBtn = createGameButton(name);
        }

        gamesDiv.innerHTML += gameBtn;
    }

    await fetch(`/assets/php/getpopulargames.php`)
        .then((response) => response.text())
        .then((res) => {
            let popularGames = JSON.parse(res);

            for (let i = 0; i < 10; i++) {
                if (document.getElementsByName(popularGames[i][0])) {
                    document
                        .getElementsByName(popularGames[i][0])[0]
                        .classList.add('popular');
                    document.getElementsByName(
                        popularGames[i][0]
                    )[0].innerHTML +=
                        "<button id='newbanner'><img src='/assets/images/icons/hotbanner.png'></button>";
                }
            }
        });

    //only get recent and liked games if logged in
    if (loggedIn) {
        //all games are generated... now add the liked and recent tags to the games
        fetch(`/assets/php/class_likes/personallikes.php`)
            .then((response) => response.text())
            .then((res) => {
                var likedgames = JSON.parse(res);

                fetch(`/assets/php/recent_classes/recentclasses.php`)
                    .then((response) => response.text())
                    .then((res) => {
                        let recentGames = res.split(';');
                        recentGames = recentGames.slice(1);
                        const recentContainer =
                            document.getElementById('recentContainer');
                        for (like in likedgames) {
                            if (
                                document.getElementsByName(
                                    likedgames[like][0]
                                ) != null
                            ) {
                                //line below accounts for suggested/pinned games
                                if (
                                    document
                                        .getElementsByName(
                                            likedgames[like][0]
                                        )[0]
                                        .classList.contains('all')
                                ) {
                                    document
                                        .getElementsByName(
                                            likedgames[like][0]
                                        )[0]
                                        .classList.add('liked');
                                } else {
                                    document
                                        .getElementsByName(
                                            likedgames[like][0]
                                        )[1]
                                        .classList.add('liked');
                                }
                            }
                        }
                        for (let i = 0; i < recentGames.length; i++) {
                            if (
                                document.getElementsByName(recentGames[i])
                                    .length > 0
                            ) {
                                //line below accounts for suggested/pinned games
                                if (
                                    document
                                        .getElementsByName(recentGames[i])[0]
                                        .classList.contains('all')
                                ) {
                                    document
                                        .getElementsByName(recentGames[i])[0]
                                        .classList.add('recent');
                                } else {
                                    document
                                        .getElementsByName(recentGames[i])[1]
                                        .classList.add('recent');
                                }
                            }
                        }
                    });
            });
    }
}

// const searchBar = document.getElementById('searchBar');
// searchBar.addEventListener('keyup', () => {
//     document.getElementById('info').scrollIntoView({
//         block: 'start',
//         inline: 'nearest',
//     });

//     let input = searchBar.value.toUpperCase().split(' ').join('');

//     if (input == '' || input == null) {
//         loadTopic();
//         return;
//     }

//     const gameButtons = document.getElementsByClassName('all');

//     let gameShown = false;
//     Array.from(gameButtons).forEach((game) => {
//         var name = game.getAttribute('name').toUpperCase();
//         name = name.split(' ').join('');

//         if (name.includes(input) && game.classList.contains(selectedTopic)) {
//             game.setAttribute(
//                 'style',
//                 `background-image: url(${
//                     games[game.getAttribute('name')].image
//                 })`
//             );
//             gameShown = true;
//         } else {
//             game.setAttribute('style', 'display:none');
//         }
//     });
//     if (!gameShown) {
//         document.getElementById('noSearch').style.display = '';
//     } else {
//         document.getElementById('noSearch').style.display = 'none';
//     }
//     if (gamesDiv.innerHTML == '') {
//         document.getElementById('noSearch').style.display = '';
//     }
// });

// Category buttons
const buttons = document.querySelectorAll('.categoryButton');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.name != selectedTopic) {
            document.getElementById('adScroll').scrollIntoView({
                block: 'start',
                inline: 'nearest',
            });
        }

        selectedTopic = e.target.name;

        const buttons = document.querySelectorAll('.categoryButton');

        buttons.forEach((btn) => {
            btn.classList.add('unselectedCategory');
            btn.classList.remove('selectedCategory');
        });

        const selected = document.getElementsByName(selectedTopic)[0];
        selected.classList.add('selectedCategory');
        selected.classList.remove('unselectedCategory');

        // document.getElementById('searchBar').value = '';

        loadTopic();
    });
});

function suggestGames() {
    let pinnedGames = [];
    //check previously pinned games
    fetch(`assets/php/class_pin/getpinnedclasses.php`)
        .then((response) => response.text())
        .then((res) => {
            pinnedGames = res.split(';');
            let randomGames = [];

            for (let x = displayedGames; x < displayedGames + 3; x++) {
                let randGame = randomProperty(games);

                while (
                    randomGames.includes(randGame) ||
                    pinnedGames.includes(randGame)
                ) {
                    randGame = randomProperty(games);
                }

                randomGames.push(randGame);
            }

            //first pinned game is always going to be '' so length will always be atleast 1
            pinnedGames = pinnedGames.slice(1);
            let totalPinned = pinnedGames.length;

            if (pinnedGames.length < 3) {
                let generateGames = 3 - pinnedGames.length;
                for (let i = 0; i < generateGames; i++) {
                    let randGame = randomProperty(games);

                    while (
                        randomGames.includes(randGame) ||
                        pinnedGames.includes(randGame)
                    ) {
                        randGame = randomProperty(games);
                    }

                    pinnedGames.push(randGame);
                }
            }

            document.getElementById('scisuggests').innerHTML = '';
            for (let i = 0; i < 3; i++) {
                let game = randomGames[i];
                let gameBtn = createGameButton(game, 'suggested');

                document.getElementById('scisuggests').innerHTML += gameBtn;
                game = pinnedGames[i];

                if (i <= totalPinned - 1) {
                    gameBtn = createGameButton(game, 'pin');
                } else {
                    gameBtn = createGameButton(game, 'suggested');
                }

                document.getElementById('scisuggests').innerHTML += gameBtn;
            }
        });
}

var randomProperty = function (object) {
    var keys = Object.keys(object);
    return keys[Math.floor(keys.length * Math.random())];
};

function changeToGif(ele) {
    const game = ele.getAttribute('name');
    const data = games[game];

    if (data.gif != null) ele.style = `background-image: url(${data.gif})`;
}

function noGif(ele) {
    const game = ele.getAttribute('name');
    const data = games[game];

    if (data.gif != null) ele.style = `background-image: url(${data.image})`;
}

function createGameButton(game, pin) {
    const data = games[game];

    let classlist = data.tags.join(' ');

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const gameDate = new Date(data.date_added);

    let gameBtn = '';
    let buttons = '';

    let onclick = `location.href = 'class?class=${game}'`;

    if (pin == 'pin') {
        buttons +=
            "<button id='pin'><img src='/assets/images/icons/coloredpin.png'></button>";
    }

    if (gameDate > weekAgo) {
        classlist += ' new';
        buttons +=
            "<button id='newbanner'><img src='/assets/images/icons/newbanner.png'></button>";
    }

    if (pin != 'suggested' && pin != 'pin') {
        classlist += ' all';
    }

    if (pin != 'hidden') {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="background-image: url(${data.image})" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    } else {
        gameBtn = `
        <div onmouseout="(noGif(this));" onmouseover="changeToGif(this);" name="${game}" style="display: none" id="gameDiv" onclick="${onclick}" class="${classlist}">
            ${buttons}
            <div class="innerGameDiv">${game}</div>
        </div>
        `;
    }

    return gameBtn;
}

//check for local storage of daily reward
//if it is not over, set endTime to local storage time then count
//if it is over, check database
//if database says it is not over, set local storage to correct time and keep counting

function checkReward() {
    setRewardDayBar('initial');
    if (loggedIn) {
        var currentTime = Math.floor(Date.now() / 1000); //must divide by 1000 because Date.now() get's miliseconds but mysql takes seconds

        if (localStorage.getItem('rewardTimer') != null) {
            console.log('found local storage');
            const rewardTime = localStorage.getItem('rewardTimer');

            if (currentTime > rewardTime) {
                fetch(`assets/php/points/checkrewardtimer.php`)
                    .then((dbRewardTime) => dbRewardTime.text())
                    .then((dbRewardTime) => {
                        console.log(dbRewardTime);
                        if (currentTime > dbRewardTime) {
                            console.log('Claim reward');
                            rewardPop();
                        } else {
                            console.log(dbRewardTime);
                            localStorage.setItem('rewardTimer', dbRewardTime);
                            startTimer(dbRewardTime);
                        }
                    });
            } else {
                startTimer(rewardTime);
            }
        } else {
            console.log('did not find local storage');
            fetch(`assets/php/points/checkrewardtimer.php`)
                .then((dbRewardTime) => dbRewardTime.text())
                .then((dbRewardTime) => {
                    if (dbRewardTime == 0) {
                        rewardPop();
                    } else {
                        console.log(dbRewardTime);
                        if (currentTime > dbRewardTime) {
                            rewardPop();
                        } else {
                            localStorage.setItem('rewardTimer', dbRewardTime);
                            startTimer(dbRewardTime);
                        }
                    }
                });
        }
    } else {
        if (localStorage.getItem('ignoreReward') != null) {
            if (!localStorage.getItem('ignoreReward')) {
                rewardPop();
            }
        } else {
            rewardPop();
        }
        console.log('Signup to claim');
        console.log('get rid of unneccessary padding when done with this');
    }
}

//var endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours in the future
var rewardTimerInterval;
function startTimer(endTime) {
    console.log('starting timer...');
    clearInterval(rewardTimerInterval);
    rewardTimerInterval = setInterval(function () {
        var currentTime = Math.floor(Date.now() / 1000);
        var remainingTime = endTime - currentTime;

        if (remainingTime < 0) {
            clearInterval(rewardTimerInterval);
            return;
        }

        var seconds = Math.floor(remainingTime % 60)
            .toString()
            .padStart(2, '0');
        var minutes = Math.floor((remainingTime / 60) % 60)
            .toString()
            .padStart(2, '0');
        var hours = Math.floor((remainingTime / (60 * 60)) % 24)
            .toString()
            .padStart(2, '0');

        //console.log(hours + ':' + minutes + ':' + seconds);
        document.getElementById('rewardTimer').innerHTML =
            hours + ':' + minutes + ':' + seconds;
    }, 1000);
}

var popTimerInterval;
function rewardPop() {
    document.getElementById('dailyRewardPopup').style.display = '';

    clearInterval(rewardTimerInterval);
    document.getElementById('rewardTimer').innerHTML = '00:00:00';

    if (loggedIn) {
        document.getElementById('ignoreReward').style.display = 'none';

        let points = 100;
        //figure out how many points to give with a db call...

        fetch(`assets/php/points/checkrewardday.php`)
            .then((rewardDay) => rewardDay.text())
            .then((rewardDay) => {
                if (rewardDay == 6) {
                    points = 1000;
                }
                document.getElementById('popPoints').innerHTML = points;
                for (let i = 0; i <= rewardDay; i++) {
                    document.getElementsByClassName('popCheck')[i].style =
                        'visibility: visible;';
                }
                for (let i = 6; i > rewardDay; i--) {
                    document.getElementsByClassName('popCheck')[i].style =
                        'visibility: hidden;';
                }
            });
    } else {
        for (let i = 0; i <= 0; i++) {
            document.getElementsByClassName('popCheck')[i].style =
                'visibility: visible;';
        }
        for (let i = 6; i > 6; i--) {
            document.getElementsByClassName('popCheck')[i].style =
                'visibility: hidden;';
        }
        document.getElementById('ignoreReward').style.display = '';
        document.getElementById('claimRewardB').innerText = 'Sign Up To Claim';
        document
            .getElementById('claimRewardB')
            .setAttribute('onclick', "window.location.href='/signup'");
    }

    var endTime = Math.floor(Date.now() / 1000 + 86400); //set end time to 24 hours later even though inaccurate
    popTimerInterval = setInterval(function () {
        var currentTime = Math.floor(Date.now() / 1000);
        var remainingTime = endTime - currentTime;

        var seconds = Math.floor(remainingTime % 60)
            .toString()
            .padStart(2, '0');
        var minutes = Math.floor((remainingTime / 60) % 60)
            .toString()
            .padStart(2, '0');
        var hours = Math.floor((remainingTime / (60 * 60)) % 24)
            .toString()
            .padStart(2, '0');

        document.getElementById('popTimer').innerHTML =
            hours + ':' + minutes + ':' + seconds;
    }, 1000);
}

function ignorePopReward() {
    localStorage.setItem('ignoreReward', true);
    document.getElementById('dailyRewardPopup').style.display = 'none';
}

function claimReward() {
    fetch(`assets/php/points/claimreward.php`)
        .then((response) => response.text())
        .then((response) => {
            if (response == 'Success') {
                resetRewardTimer();
                collectPoints();
                setRewardDayBar('update');
            }
            document.getElementById('dailyRewardPopup').style.display = 'none';
            clearInterval(popTimerInterval);
        });
}

function resetRewardTimer() {
    fetch(`assets/php/points/checkrewardtimer.php`)
        .then((dbRewardTime) => dbRewardTime.text())
        .then((dbRewardTime) => {
            localStorage.setItem('rewardTimer', dbRewardTime);
            startTimer(dbRewardTime);
        });
}

function setRewardDayBar(mode) {
    let day = 0;

    if (loggedIn) {
        if (mode == 'update') {
            fetch(`assets/php/points/checkrewardday.php`)
                .then((rewardDay) => rewardDay.text())
                .then((rewardDay) => {
                    localStorage.setItem('rewardDay', rewardDay);
                    day = parseInt(rewardDay);
                    animateBar(day);
                });
        } else {
            if (localStorage.getItem('rewardDay') != null) {
                day = parseInt(localStorage.getItem('rewardDay'));
                animateBar(day);
            } else {
                fetch(`assets/php/points/checkrewardday.php`)
                    .then((rewardDay) => rewardDay.text())
                    .then((rewardDay) => {
                        localStorage.setItem('rewardDay', rewardDay);
                        day = parseInt(rewardDay);
                        animateBar(day);
                    });
            }
        }
    } else {
        animateBar(0);
    }
}

function animateBar(day) {
    let w = (100 / 7) * (day + 1);

    document.getElementById('rewardDayBar').style.width = `${w}%`;

    if (day == 6) {
        w = 100;
        document.getElementById(
            'rewardDayBar'
        ).style.borderTopRightRadius = `15px`;
        document.getElementById(
            'rewardDayBar'
        ).style.borderBottomRightRadius = `15px`;
    }
}

function collectPoints() {
    fetch(`assets/php/points/checkpoints.php`)
        .then((points) => points.text())
        .then((points) => {
            localStorage.setItem('tspoints', points);
            let currentVal = document.getElementById('pointsDisplay').innerText;
            console.log(currentVal);
            console.log(points);
            counter(
                'pointsDisplay',
                parseInt(currentVal),
                parseInt(points),
                2000
            );
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
