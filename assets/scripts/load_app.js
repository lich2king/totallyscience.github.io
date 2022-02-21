const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const appName = urlParams.get('app');
const id = urlParams.get('id');

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

window.addEventListener('load', () => {
    if (getCookie('fifthCookie') == '1') {
        $('noCookies').style = "display: none"
        document.getElementsByTagName('body')[0].style = "overflow: hidden"
        fetch(`./assets/apps.json?date=${new Date().getTime()}`).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(`cannot fetch ./assets/apps.json?date=${new Date().getTime()}`);
            }
        }).then((apps) => {
            const appData = apps[appName];
            if (appData == null) window.location.href = '../apps.html';


            document.getElementById('app_frame').src = appData.iframe_url;

        }).catch((err) => {
            if (err) console.log(`cannot fetch ./assets/apps.json?date=${new Date().getTime()}`);
        });
    } else {
        console.log("No cookies :(")
        document.getElementsByTagName('body')[0].style = ""
        $('yesCookies').style = "display: none"
    }
});