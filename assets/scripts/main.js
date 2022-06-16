// deprecate github domain
//if (location.host.includes('github')) location.replace('https://tsmain.co'); 

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
        navigator.serviceWorker.register('sw.js');
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