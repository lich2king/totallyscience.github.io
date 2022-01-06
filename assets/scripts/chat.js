let doscroll = true;

function joinRoom(isNewRoom) {
    const createButton = document.getElementById('createbtn');
    const joinButton = document.getElementById('joinbtn');
    const roominput = document.getElementById('roominput');
    const nameinput = document.getElementById('username');
    const messageList = document.getElementById('messages');
    const messageinput = document.getElementById('messageinput');
    const leavebtn = document.getElementById('leavebtn');
    const scrollb = document.getElementById('scrollb');

    if (isNewRoom && isNum(messageinput.value)) {
        alert("Please include a letter in your code")
    } else {
        alert("LEtter")
        messageinput.addEventListener("keyup", function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                messageinp = messageinput.value;
                messageinput.value = ''

                try {
                    fetch(`https://moovally.com/totallyscience-backend/send_message.php?id=${localStorage.getItem('chatRoom')}&name=${localStorage.getItem('chatName')}&message=${messageinp}`).then((response) => response.text()).then((res) => {
                        if (res.startsWith('success')) {
                            const messages = res.split(',');

                            messageList.innerHTML = '';

                            for (msg in messages) {
                                if (messages[msg] == 'success') continue;

                                const msgf = messages[msg].split('/');

                                let ele = document.createElement('li');
                                ele.innerText = msgf[0];

                                let span = document.createElement('span');
                                span.innerText = msgf[1];
                                ele.append(span);

                                messageList.appendChild(ele);
                            }

                            if (doscroll) {
                                window.scrollTo(0, document.body.scrollHeight);
                            }

                        } else {
                            //alert(res);
                        }
                    });
                } catch (err) {
                    console.log(err);
                }
            }
        });

        createButton.style = 'display: none';
        joinButton.style = 'display: none';
        roominput.style = 'display: none';
        nameinput.style = 'display: none';

        let url;
        // change urls when moved
        if (isNewRoom) {
            url = 'https://moovally.com/totallyscience-backend/create_room.php';
        } else {
            url = 'https://moovally.com/totallyscience-backend/join_room.php';
        }

        try {
            fetch(`${url}?id=${roominput.value}&name=${nameinput.value}`).then((response) => response.text()).then((res) => {
                if (res.startsWith('success')) {
                    const messages = res.split(',');

                    for (msg in messages) {
                        if (messages[msg] == 'success') continue;

                        const msgf = messages[msg].split('/');

                        let ele = document.createElement('li');
                        ele.innerText = msgf[0];

                        let span = document.createElement('span');
                        span.innerText = msgf[1];
                        ele.append(span);

                        messageList.appendChild(ele);
                    }

                    messageinput.style = ''
                    leavebtn.style = ''
                    scrollb.style.display = 'block'
                    if (doscroll) {
                        window.scrollTo(0, document.body.scrollHeight);
                    }

                    localStorage.setItem('chatName', nameinput.value);
                    localStorage.setItem('chatRoom', roominput.value);

                    setInterval(() => {
                        try {
                            fetch(`https://moovally.com/totallyscience-backend/get_chat.php?id=${localStorage.getItem('chatRoom')}`).then((response) => response.text()).then((res) => {
                                if (res.startsWith('success')) {
                                    const messages = res.split(',');

                                    messageList.innerHTML = '';

                                    for (msg in messages) {
                                        if (messages[msg] == 'success') continue;

                                        const msgf = messages[msg].split('/');

                                        let ele = document.createElement('li');
                                        ele.innerText = msgf[0];

                                        let span = document.createElement('span');
                                        span.innerText = msgf[1];
                                        ele.append(span);

                                        messageList.appendChild(ele);
                                    }

                                    if (doscroll) {
                                        window.scrollTo(0, document.body.scrollHeight);
                                    }
                                } else {
                                    alert(res);
                                }
                            });
                        } catch (err) {
                            console.log(err);
                        }
                    }, 2000);
                } else {
                    alert(res);

                    createButton.style = '';
                    joinButton.style = '';
                    roominput.style = '';
                    nameinput.style = '';
                }
            });
        } catch (err) {
            console.log(err)

            createButton.style = '';
            joinButton.style = '';
            roominput.style = '';
            nameinput.style = '';
        }
    }



}

window.addEventListener('load', function() {
    const nameinput = document.getElementById('username');
    const roominput = document.getElementById('roominput');

    nameinput.value = localStorage.getItem('chatName');
    roominput.value = localStorage.getItem('chatRoom');
});
/*
FIX FIX FIX
window.addEventListener('beforeunload', function() {
    try {
        fetch(`https://moovally.com/totallyscience-backend/leave_room.php?id=${localStorage.getItem('chatRoom')}&name=${localStorage.getItem('chatName')}`).then((response) => response.text());
    } catch(err) {
        console.log(err);
    }
});*/
window.addEventListener('scroll', () => {
    const scrollb = document.getElementById('scrollb');
    let _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;

    if (document.body.scrollTop > (_docHeight - 1500) || document.documentElement.scrollTop > (_docHeight - 1500)) {
        scrollb.style.display = 'none';
        doscroll = true;
    } else {
        scrollb.style.display = 'block';
        doscroll = false;
    }
});
window.addEventListener(
    'keydown',
    function(e) {
        if (e.key == '`') {
            window.open(
                this.localStorage.getItem("website"),
                '_blank',
                'fullscreen=yes resizable=yes'
            )
        }
    },
    false
)

if (localStorage.getItem("website") == null) {
    localStorage.setItem("website", "https://classroom.google.com/")
}

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light")
}

document.body.setAttribute("theme", localStorage.getItem("theme"))
document.getElementById('settings').children[0].src = `./assets/images/settings-${localStorage.getItem("theme")}.svg`