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
const port = 3000;

let liveUsers = 0;

let stats = {}
let users = {}

app.use(express.static(path.join(__dirname, 'public'), { redirect: false }));
app.use(cookieParser());
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// pages
app.get('/', (req, res) => {
    res.render('index', { index: 'selected', views: getPageViews() });
});

app.get('/classes', (req, res) => {
    res.render('classes', { classes: 'selected'});
});
app.get('/class', (req, res) => {
    res.render('class', { classes: 'selected'});
});

app.get('/leaderboard', (req, res) => {
    res.render('leaderboard', { leaderboard: 'selected'});
});

app.get('/applications', (req, res) => {
    res.render('apps', { apps: 'selected'});
});
app.get('/app', (req, res) => {
    res.render('app', { apps: 'selected'});
});

app.get('/profile', (req, res) => {
    if (req.cookies['accessToken']) {
        try {
            jwt.verify(req.cookies['accessToken'], process.env.TOKEN_SECRET, (err, decoded) => {
                if (err) throw err;
    
                res.render('profile', { username: decoded.user });
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


// json files
app.get('/leaderboardjson', (req, res) => {
    res.sendFile(path.join(__dirname, 'leaderboard.json'));
});

app.get('/appsjson', (req, res) => {
    res.sendFile(path.join(__dirname, 'apps.json'));
});

app.get('/gamesjson', (req, res) => {
    res.sendFile(path.join(__dirname, 'games.json'));
});


// views
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

// auth
app.post('/signup', bodyParser.json(), (req, res) => {
    const { username, password, confirmPassword, email } = req.body;
    
    if (!username || !password || !confirmPassword || !email) return res.send('all fields are required');
    if (confirmPassword != password) return res.send('passwords must be the same');

    fs.readFile('users.json', (err, data) => {
        if (err) return console.log(err);

        const d = new Date();
        let users = JSON.parse(data);

        if (!users.hasOwnProperty(username)) {
            hash(password).then((pass) => {
                users[username] = {
                    password: pass,
                    email: email,
                    verified: false,
                    created: `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`
                };

                fs.writeFile('users.json', JSON.stringify(users), (err) => {
                    if (err) console.log(err);
                });
    
                res.cookie('accessToken', generateAccessToken(username));
                res.send('success');
            });
        } else {
            res.send('username is taken');
        }
    });
});

app.post('/login', bodyParser.json(), (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) return res.send('all fields are required');

    fs.readFile('users.json', (err, data) => {
        if (err) return console.log(err);

        let users = JSON.parse(data);

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

// update live users every hour
function updateLiveViews() {
    const d = new Date();
    
    stats.live_views[`${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:00`] = liveUsers;

    setTimeout(updateLiveViews, 1000 * 60 * 60);
}

// start server
http.listen(port, () => {
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

    // start saving live viewers every hour
    const d = new Date();
    const h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, 0, 0, 0);
    const e = h - d;

    setTimeout(updateLiveViews, e);
});


// application exited
process.on('exit', saveAndStop);

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

            process.exit();
        });
    });
}