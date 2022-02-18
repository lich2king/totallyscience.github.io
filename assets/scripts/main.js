const $ = (id) => {
    return document.getElementById(id)
}

const $c = (className) => {
    return document.getElementsByClassName(className)
}

const $qsa = (query) => {
    return document.querySelectorAll(query)
}

const $n = (name) => {
    return document.getElementsByName(name)
}

const mk = (type) => {
    return document.createElement(type)
}

const mkHtml = (code) => { // Unsafe, only use with trusted input.
    document.body.innerHTML += code
}

var getUrl = window.location;
var baseUrl = getUrl.host;
if (baseUrl.includes("github")) {
    document.getElementById('login').style = "display: none;"
} else if (baseUrl.includes('localhost')) {
    baseUrl = 'totallyscience.co'
}


window.addEventListener(
    'keydown',
    function(e) {
        if (e.key == '`') {
            window.open(
                this.localStorage.getItem("website"),
                '_blank',
            )
        }
    },
    false
)

mkHtml(`
        <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        </svg>`)
const scrollButton = $('scrollb')

if (scrollButton) {
    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollButton.style.display = 'block'
        } else {
            scrollButton.style.display = 'none'
        }
    })
}

if (localStorage.getItem("website") == null) {
    localStorage.setItem("website", "https://classroom.google.com/")
}

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light")
}

if (localStorage.getItem("disguise") == null) {
    localStorage.setItem("disguise", "none")
} else {
    const favicon = document.querySelector('[rel=icon]')
    const title = document.querySelector('title')
    if (localStorage.getItem("disguise") == "gc") {
        title.innerHTML = "Google Classroom"
        favicon.href = "./assets/images/disguises/gcicon.png"
    } else if (localStorage.getItem("disguise") == "gd") {
        title.innerHTML = "Google Docs"
        favicon.href = "./assets/images/disguises/gdicon.png"
    } else if (localStorage.getItem("disguise") == "canvas") {
        title.innerHTML = "Dashboard"
        favicon.href = "./assets/images/disguises/canvasicon.jpg"
    }
}

document.body.setAttribute("theme", localStorage.getItem("theme"))
document.getElementById('settings').children[0].src = `./assets/images/settings-${localStorage.getItem("theme")}.svg`




/*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //they are mobile redirect to mobile site
    window.open("/mobile/index.html", "_self")
} else {
    //they are not mobile
}*/
if (typeof screen.orientation !== 'undefined') {
    //not mobile
} else {
    //mobile
    window.open("/mobile/index.html", "_self")
}




function canAccessLink() {
    var image = new Image();

    image.onerror = function() {
        console.log("can't access tsmain.co")
    };
    image.onload = function() {
        const prevLink = document.referrer
        if (localStorage.getItem("mainsiteshown") == null && !prevLink.includes("tsmain")) {
            localStorage.setItem("mainsiteshown", "true")
                //window.open("https://tsmain.co/", "_self")
        } else {
            localStorage.setItem("mainsiteshown", "true")
        }
    };
    image.src = `https://tsmain.co/assets/logo.png`;
}


if (document.referrer.includes("tsmain")) {
    localStorage.setItem("mainsiteshown", "true")
}
canAccessLink()