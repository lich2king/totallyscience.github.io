require('dotenv').config();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 80;

let liveUsers = 0;

let stats = {};
let users = {};
let highscores = {};

app.use(express.static(path.join(__dirname, 'public'), { redirect: false }));
app.use(cookieParser());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// pages
app.get('/', (req, res) => {
    res.render('index', { index: 'selected', views: getPageViews() });
});

app.get('/classes', (req, res) => {
    res.render('classes', { classes: 'selected' });
});
app.get('/class', (req, res) => {
    if (req.query.class == '') res.redirect('/classes');

    let star = '<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>';

    if (req.cookies['accessToken']) {
        try {
            jwt.verify(req.cookies['accessToken'], process.env.TOKEN_SECRET, (err, decoded) => {
                if (err) throw err;

                if (users[decoded.user].hasOwnProperty('starred_games') && users[decoded.user].starred_games[req.query.class] === true) {
                    star = '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>';
                }

                res.render('class', { classes: 'selected', star: star });
            });
        } catch (error) {
            res.render('class', { classes: 'selected', star: star });
        }
    } else {
        res.render('class', { classes: 'selected', star: star });
    }
});
app.post('/star', bodyParser.json(), (req, res) => {
    if (req.cookies['accessToken']) {
        try {
            jwt.verify(req.cookies['accessToken'], process.env.TOKEN_SECRET, (err, decoded) => {
                if (err) throw err;

                if (!users[decoded.user].hasOwnProperty('starred_games')) {
                    users[decoded.user].starred_games = {};
                }

                if (users[decoded.user].starred_games.hasOwnProperty(req.body.class)) {
                    users[decoded.user].starred_games[req.body.class] = !users[decoded.user].starred_games[req.body.class]
                } else {
                    users[decoded.user].starred_games[req.body.class] = true;
                }

                res.send('success');
            });
        } catch (error) {
            res.send('must be signed in to star games.');
        }
    } else {
        res.send('must be signed in to star games.');
    }
});
app.post('/highscore', bodyParser.json({ limit: '1.1mb' }), (req, res) => {
    if (req.cookies['accessToken']) {
        try {
            jwt.verify(req.cookies['accessToken'], process.env.TOKEN_SECRET, (err, decoded) => {
                if (err) throw err;

                if (req.body.game == null) return res.send('error submitting highscore');
                if (req.body.score == null || isNaN(score) || score == '') return res.send('invalid score');
                if (req.body.image == null || req.body.image == '') return res.send('invalid image');

                if (highscores.active.hasOwnProperty(req.body.game)) {
                    if (highscores.active[req.body.game].score >= req.body.score) return res.send('greater highscore already exists.')
                }

                highscores.pending.push({ score: req.body.score, image: req.body.image, game: req.body.game, user: decoded.user });

                res.send('success');
            });
        } catch (error) {
            res.send('must be signed in to submit highscores');
        }
    } else {
        res.send('must be signed in to submit highscores.');
    }
});

app.get('/leaderboard', (req, res) => {
    res.render('leaderboard', { leaderboard: 'selected' });
});

app.get('/applications', (req, res) => {
    res.render('apps', { apps: 'selected' });
});
app.get('/app', (req, res) => {
    res.render('app', { apps: 'selected' });
});
app.get('/submithighscore', (req, res) => {
    res.render('submithighscore');
});

app.get('/profile', (req, res) => {
    if (req.cookies['accessToken']) {
        try {
            jwt.verify(req.cookies['accessToken'], process.env.TOKEN_SECRET, (err, decoded) => {
                if (err) throw err;

                res.render('profile', { username: decoded.user, starred_games: getStarredGames(decoded.user) });
            });
        } catch (error) {
            res.render('login');
        }
    } else {
        res.render('login');
    }
});

app.get('/preferences', (req, res) => {
    res.render('preferences');
});

app.get('/partners', (req, res) => {
    res.render('partners');
});

//legal
app.get('/termsofuse', (req, res) => {
    res.render('legal/termsofuse');
});

app.get('/privacypolicy', (req, res) => {
    res.render('legal/privacypolicy');
});

// ---------------------------------------------------
// json files ----------------------------------------
// ---------------------------------------------------
app.get('/leaderboardjson', (req, res) => {
    res.sendFile(path.join(__dirname, 'leaderboard.json'));
});

app.get('/appsjson', (req, res) => {
    res.sendFile(path.join(__dirname, 'apps.json'));
});

app.get('/gamesjson', (req, res) => {
    res.sendFile(path.join(__dirname, 'games.json'));
});


// ---------------------------------------------------
// view counter --------------------------------------
// ---------------------------------------------------
io.on('connection', (socket) => {
    liveUsers += 1;

    let page = socket.request.rawHeaders[17];
    if (!stats.page_views.hasOwnProperty(page)) {
        stats.page_views[page] = 1;
    } else {
        stats.page_views[page] += 1;
    }

    socket.on('disconnect', () => {
        liveUsers -= 1;
    });
});

// save live users every hour
function updateLiveViews() {
    const d = new Date();

    stats.live_views[`${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:00`] = liveUsers;

    setTimeout(updateLiveViews, 1000 * 60 * 60);
}

// total home page views
function getPageViews() {
    let totalViews = 0;

    for (key in stats.page_views) {
        if (key.endsWith('/')) {
            totalViews += stats.page_views[key];
        }
    }

    return addSuffix(totalViews.toString());
}

const addSuffix = (num) => {
    if (num.endsWith('1')) {
        return num + 'st'
    } else if (num.endsWith('2')) {
        return num + 'nd'
    } else if (num.endsWith('3')) {
        return num + 'rd'
    }
    return num + 'th'
}

// ---------------------------------------------------
// authentication ------------------------------------
// ---------------------------------------------------
app.post('/signup', bodyParser.json(), (req, res) => {
    const { username, password, confirmPassword, email } = req.body;

    if (!username || !password || !confirmPassword || !email) return res.send('all fields are required');
    if (confirmPassword != password) return res.send('passwords must be the same');

    const d = new Date();

    if (!users.hasOwnProperty(username)) {
        hash(password).then((pass) => {
            users[username] = {
                password: pass,
                email: email,
                verified: false,
                created: `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
            };

            res.cookie('accessToken', generateAccessToken(username));
            res.send('success');
        });
    } else {
        res.send('username is taken');
    }
});

app.post('/login', bodyParser.json(), (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.send('all fields are required');


    if (users.hasOwnProperty(username)) {
        hash(password).then((hashedPass) => {
            if (bcrypt.compare(users[username].password, hashedPass)) {
                res.cookie('accessToken', generateAccessToken(username));
                res.send('success');
            } else {
                res.send('invalid username or password');
            }
        });
    } else {
        res.send('invalid username or password');
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('accessToken');
    res.send('success');
});

function generateAccessToken(username) {
    return jwt.sign({ user: username }, process.env.TOKEN_SECRET, {});
}
async function hash(string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(string, salt);
}

// ---------------------------------------------------
// helper functions ----------------------------------
// ---------------------------------------------------
function getStarredGames(user) {
    // get starred games from user data
    let starredGames = '';
    for (game in users[user].starred_games) {
        if (users[user].starred_games[game]) {
            starredGames += `<a href="/class?class=${game}">${game}</a><br>`;
        }
    }

    return starredGames;
}

// ---------------------------------------------------
// server functions ----------------------------------
// ---------------------------------------------------
http.listen(port, () => {
    // start server
    console.log(`Example app listening on port ${port}`);

    // read date from files
    fs.readFile('stats.json', (err, data) => {
        if (err) return console.log(err);

        stats = JSON.parse(data);
    });

    fs.readFile('users.json', (err, data) => {
        if (err) return console.log(err);

        users = JSON.parse(data);
    });

    fs.readFile('highscores.json', (err, data) => {
        if (err) return console.log(err);

        highscores = JSON.parse(data);
    });

    // start saving live viewers every hour
    const d = new Date();
    const h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, 0, 0, 0);
    const e = h - d;

    setTimeout(updateLiveViews, e);
});

// saving data when node process ends

// application quit using ctrl c
process.on('SIGINT', saveAndStop);

// quit b/c or error 
process.on('uncaughtException', saveAndStop);

// quit b/c kill pid
process.on('SIGUSR1', saveAndStop);
process.on('SIGUSR2', saveAndStop);

function saveAndStop() {
    console.log('saving and stopping...');

    fs.writeFile('stats.json', JSON.stringify(stats), (err) => {
        if (err) console.log(err);

        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) console.log(err);

            fs.writeFile('highscores.json', JSON.stringify(highscores), (err) => {
                if (err) console.log(err);

                process.exit();
            });
        });
    });
}