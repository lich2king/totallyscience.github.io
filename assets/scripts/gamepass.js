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
if (unsubscribed == 1) {
    swal('You have successfully unsubscribed.');
}

let loggedIn = false;

fetch(`../assets/php/getCookie.php`).then((response) => response.text()).then((res) => {
    console.log("her");
    res = JSON.parse(res);
    if (res != null) {
        const isLoggedIn = res['isLoggedIn'];

        if (isLoggedIn == 'true') {
            loggedIn = true;
        }
    }
});

function subscribe() {
    if (loggedIn) {
        document.forms["monthlyForm"].submit();
    } else {
        swal("You must sign up before purchasing Game Pass", { buttons: { cancel: "Cancel", signup: { text: "Signup", value: "signup" } }, }).then((value) => {
            if (value == 'signup') {
                window.open('signup.php', '_self');
            }
        });
    }
}