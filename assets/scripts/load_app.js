const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const appName = urlParams.get('app');
const id = urlParams.get('id');

window.addEventListener('load', () => {

    fetch(`./assets/apps.json?date=${new Date().getTime()}`).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(`cannot fetch ./assets/games.json?date=${new Date().getTime()}`);
        }
    }).then((apps) => {
        const appData = apps[appName];
        if (appData == null) window.location.href = '../classes.html';


        document.getElementById('app_frame').src = appData.iframe_url;

    }).catch((err) => {
        if (err) console.log(`cannot fetch ./assets/apps.json?date=${new Date().getTime()}`);
    });

});