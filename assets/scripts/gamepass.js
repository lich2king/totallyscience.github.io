// READY

function dropDownFaq(id) {
    //first set all answers to display none
    //then set the element with the id of 'id' to display show
    const answers = document.getElementsByClassName("answer");

    let displaying = true;

    if (document.getElementById(id).getAttribute('style') == 'display: none') {
        displaying = false;
    }

    for (let i = 0; i < answers.length; i++) {
        answers[i].setAttribute("style", "display: none");
    }

    if (!displaying) {
        document.getElementById(id).setAttribute("style", "display:");
    }
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const unsubscribed = urlParams.get('unsubscribe');
const gpdomain = urlParams.get('gpdomain');

if (unsubscribed == 1) {
    swal('You have successfully unsubscribed.');
}
if (gpdomain == 1) {
    swal("This link is only accessible if you have Game Pass", { buttons: { login: { text: "Login", value: "login" }, gp: { text: "Game Pass", value: "gp" } }, }).then((value) => {
        if (value == 'login') {
            window.open('login', '_self');
        }
    });
}

let loggedIn = false;

fetch(`../assets/php/getCookie.php`).then((response) => response.text()).then((res) => {
    res = JSON.parse(res);
    if (res != null) {
        const isLoggedIn = res['isLoggedIn'];

        if (isLoggedIn == 'true') {
            loggedIn = true;
        }
    }
});

function subscribe(form) {
    if (loggedIn) {
        document.forms[form].submit();
    } else {
        swal("You must sign up before purchasing Game Pass", { buttons: { cancel: "Cancel", signup: { text: "Signup", value: "signup" } }, }).then((value) => {
            if (value == 'signup') {
                window.open('signup', '_self');
            }
        });
    }
}