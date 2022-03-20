const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const appName = urlParams.get('app');
const id = urlParams.get('id');
let tutOpen = false


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
    $('tutText').style = "display: none"
    if ('1' == '1') {
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
            console.log(location.hostname)

            if (location.hostname == 'actuallyhistory.com') {
                document.getElementById('app_frame').src = appData.proxy_url;
            } else {
                document.getElementById('app_frame').src = appData.iframe_url;
            }

            /*if (appData.alt_url != "") {
                fetch(appData.iframe_url).then(res => {
                    if (!res.status) {
                        document.getElementById('app_frame').src = appData.alt_url;
                    }
                    if (!(res.status + "").startsWith("2")) {
                        document.getElementById('app_frame').src = appData.alt_url;
                    }
                }).catch(err => document.getElementById('app_frame').src = appData.alt_url);
            }*/

        }).catch((err) => {
            if (err) console.log(`cannot fetch ./assets/apps.json?date=${new Date().getTime()}`);
        });
    } else {
        console.log("No cookies :(")
        document.getElementsByTagName('body')[0].style = ""
        $('yesCookies').style = "display: none"
    }
});



window.addEventListener(
    'keydown',
    function(e) {
        if (e.key == 'Enter') {
            tutOpen = true
            $('noCookies').style = ""
            $('tutText').style = "display: none"
            $('yesCookies').style = "display: none"
            document.getElementsByTagName('body')[0].style = ""
        }
    },
    false
)

setTimeout(function() {
    if (!tutOpen) {
        $('tutText').style = "z-index: 1;"
    }
}, 6500);



/*console._log_old = console.log
console.log = function(msg) {
    alert(msg);
    console._log_old(msg);
}*/