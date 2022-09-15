// READY

if (location.host.includes('github')) location.replace('https://tsmain.co');

// init user prefs
if (localStorage.getItem('website') == null) localStorage.setItem('website', 'https://classroom.google.com/');
if (localStorage.getItem('theme') == null) localStorage.setItem('theme', 'light');

document.body.setAttribute('theme', localStorage.getItem('theme'));
document.getElementById('settings').children[0].src = `/assets/images/settings-${localStorage.getItem('theme')}.svg`;

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
    window.open('/mobile/index', '_self')
}

// panic button
window.addEventListener('keydown', (e) => {
    if (e.key == '`') window.open(this.localStorage.getItem('website'), '_blank', );
}, false);

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
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                scrollButton.style.display = 'block';
            } else {
                scrollButton.style.display = 'none';
            }
        })
    }
});



document.addEventListener("DOMContentLoaded", function() {
    let gamepass = false;
    //if user has gamepass, hide gamePassAd element
    fetch(`assets/php/hasGamePass.php`).then((response) => response.text()).then((res) => {
        if (res == 'true') {
            gamepass = true;
            document.getElementById('gamePassAd').style = "display: none";
        } else {
            console.log('hi')
            showAds();
            //if domain is not totallyscience.co, make sure user has game pass
            if (location.hostname != "totallyscience.co" && location.hostname != "localhost" && !(this.location.href.includes("gamepass")) && !(this.location.href.includes("signup")) && !(this.location.href.includes("login")) && !(this.location.href.includes("profile"))) {
                //this.location.href = "gamepass?gpdomain=1"
            }
        }
    });

});



function showAds() {
    document.getElementById('gamePassAd').setAttribute('style', 'display:');

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
        callFunctionFromScript();
    }
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.setAttribute('data-ad-client', 'ca-pub-3486863589051210');
    script.async = true;

    head.appendChild(script);
}