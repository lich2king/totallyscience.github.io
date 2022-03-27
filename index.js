const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});