// READY
document.getElementById("appsnav").classList.add("selected");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const appName = urlParams.get('app');

window.addEventListener('load', () => {
    document.getElementsByTagName('body')[0].style = 'overflow: hidden';

    fetch(`./assets/apps.json?date=${new Date().getTime()}`).then((response) => {
        if (response.ok) return response.json();
        else console.log(`cannot fetch ./assets/apps.json?date=${new Date().getTime()}`);
    }).then((apps) => {
        const appData = apps[appName];
        const appFrame = document.getElementById('app_frame');

        if (appData == null) window.location.href = '../apps';

        if (appData.type == 'proxy') appFrame.src = 'https://p.' + window.location.host + '/index#' + btoa(appData.iframe_url);
        else appFrame.src = appData.iframe_url;
    }).catch((err) => {
        if (err) console.log(`cannot fetch ./assets/apps.json?date=${new Date().getTime()}`);
    });
});