const liveServer = 'https://api.megamathstuff.com';
const localServer = 'http://localhost:5001';
const activeServer = location.host.startsWith('localhost') || location.host.startsWith('127.0.0.1') ? localServer : liveServer;

const authToken = localStorage.getItem('authToken');

// util for fetching backend scripts.
function fetcher(endpoint, options) {
    let updatedOptions = {...options };

    updatedOptions.headers = {
        ...(options ? options.headers : null),
        // not sure if this actually works as expected -- hopefully reduces preflight requests?
        'Access-Control-Max-Age': 86400,
        'Content-Type': 'application/json',
    };

    //post needed for body
    updatedOptions.method = 'post';

    if (authToken) {
        updatedOptions.body = JSON.stringify({
            ...(options ? options.body : null),
            auth: JSON.parse(authToken),
        });
    }

    //add active server when using node version
    //return fetch(`${activeServer}${endpoint}`, updatedOptions);

    return fetch(`${endpoint}`, updatedOptions);
}

// init user prefs
if (localStorage.getItem('website') == null) localStorage.setItem('website', 'https://classroom.google.com/');

// update favicon and title with user disguise
if (localStorage.getItem('disguise') == null) {
    localStorage.setItem('disguise', 'none');
} else {
    const favicon = document.querySelector('[rel=icon]');
    const title = document.querySelector('title');

    if (localStorage.getItem('disguise') == 'gc') {
        title.innerHTML = 'Google Classroom';
        favicon.href = './assets/images/disguises/gcicon.png';
    } else if (localStorage.getItem('disguise') == 'gd') {
        title.innerHTML = 'Google Docs';
        favicon.href = './assets/images/disguises/gdicon.png';
    } else if (localStorage.getItem('disguise') == 'canvas') {
        title.innerHTML = 'Dashboard';
        favicon.href = './assets/images/disguises/canvasicon.jpg';
    } else if (localStorage.getItem('disguise') == 'g') {
        title.innerHTML = 'Google';
        favicon.href = './assets/images/disguises/googleicon.png';
    } else if (localStorage.getItem('disguise') == 'calc') {
        title.innerHTML = 'Calculator';
        favicon.href = './assets/images/disguises/calculator.png';
    } else if (localStorage.getItem('disguise') == 'wiki') {
        title.innerHTML = 'Wikipedia';
        favicon.href = './assets/images/disguises/wikipedia.png';
    }
}

// check if mac
var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
if (typeof screen.orientation !== 'undefined' || isMac) {
    //not mobile
} else {
    //mobile
    window.open('/mobile/index', '_self');
}

// panic button
window.addEventListener(
    'keydown',
    (e) => {
        if (e.key == '`') window.open(this.localStorage.getItem('website'), '_blank');
    },
    false
);

// page load init
window.addEventListener('load', () => {
    // register service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js?v2');
    }

    // scroll button
    const scrollButton = document.getElementById('scrollb');

    if (scrollButton) {
        // When the user scrolls down 20px from the top of the document, show the button
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
                scrollButton.style.display = 'block';
            else scrollButton.style.display = 'none';
        });
    }

    setPoints();
});

// update points in navbar
async function setPoints() {
    let res = await fetcher(`${activeServer}/points/check`);
    let points = await res.text();

    if (res.status == 200) document.getElementById('pointsDisplay').innerText = points;
    else document.getElementById('pointsDisplay').innerText = 0;
}

function logout() {
    localStorage.removeItem('authToken');
    location.reload();
}