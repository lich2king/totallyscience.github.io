const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

let liveUsers = 0;
let totalPageViews = 0;

app.use(express.static(path.join(__dirname, 'public'), { redirect: false }));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// pages
app.get('/', (req, res) => {
    res.render('index', { index: 'selected'});
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
app.get('/pageloads', (req, res) => {
    res.send(JSON.stringify({"total": totalPageViews}));
});

io.on('connection', (socket) => {
    liveUsers += 1;
    increaseStats(socket.request.rawHeaders[17])
 
    socket.on('disconnect', () => {
        liveUsers -= 1;
    });
});

function increaseStats(page) {
    fs.readFile('stats.json', (err, data) => {
        if (err) return console.log(err);

        oldStats = JSON.parse(data);
        
        if (!oldStats.page_views.hasOwnProperty(page)) {
            oldStats.page_views[page] = 1;
        } else {
            oldStats.page_views[page] += 1;
        }

        if (page.endsWith('/')) totalPageViews += 1;
    
        fs.writeFile('stats.json', JSON.stringify(oldStats), (err) => {
            if (err) console.log(err);
        });
    });
}
function updateLiveViews() {
    fs.readFile('stats.json', (err, data) => {
        if (err) return console.log(err);
        
        oldStats = JSON.parse(data);

        const d = new Date();
        
        oldStats.live_views[`${d.getMonth}/${d.getDate}/${d.getFullYear} ${d.getHours}:00`] = liveUsers;

        setTimeout(updateLiveViews, 1000 * 60 * 60);
    
        fs.writeFile('stats.json', JSON.stringify(oldStats), (err) => {
            if (err) console.log(err);
        });
    });
}


http.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

    // start saving live viewers every hour
    const d = new Date();
    const h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours() + 1, 0, 0, 0);
    const e = h - d;

    setTimeout(updateLiveViews, e);

    // get previous total page views
    fs.readFile('stats.json', (err, data) => {
        if (err) return console.log(err);

        oldStats = JSON.parse(data);

        let keys = Object.keys(oldStats.page_views);
        let sortedKeys = keys.filter(key => key.endsWith('/'));
        let pageViews = 0;

        for (let x in sortedKeys) {
            pageViews += oldStats.page_views[sortedKeys[x]];
        }

        totalPageViews = pageViews;
    });
});