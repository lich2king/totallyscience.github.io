var vid = document.getElementById("dispenserVid");


function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}

document.getElementById('dispenserVid').addEventListener('ended', myHandler, false);

function myHandler(e) {
    if (rollingDie) {
        document.getElementById('prizeWon').innerHTML += `<img id='prizeWonImg' src='/assets/minis/JPGs/!Avatar31.jpg'>`;
        document.getElementById('prizeWon').classList.add('active');
    }
}

var rollingDie = false;

function dispenseCharacter() {
    rollingDie = true;
    playVid();
}