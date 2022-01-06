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

    messageinput.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            messageinp = messageinput.value.replace("'", '"');;
            messageinput.value = ''

            try {
                fetch(`https://moovally.com/totallyscience-backend/send_message.php?id=${localStorage.getItem('chatRoom')}&name=${localStorage.getItem('chatName')}&message=${messageinp}&v=1`).then((response) => response.text()).then((res) => {
                    const jsonRes = JSON.parse(res);
                    
                    if (jsonRes) {
                        messageList.innerHTML = '';

                        //display chatroom id
                        let ele = document.createElement('li');
                        ele.innerText = 'Room Code: ' + localStorage.getItem('chatRoom');
                        messageList.appendChild(ele);

                        //display messages
                        for (msg in jsonRes) {
                            let curmsg = jsonRes[msg];
                            
                            let ele = document.createElement('li');
                            ele.innerText = curmsg[0];
        
                            let span = document.createElement('span');
                            span.innerText = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                            ele.append(span);
        
                            messageList.appendChild(ele);
                        }

                        if (doscroll) {
                            window.scrollTo(0, document.body.scrollHeight);
                        }
                    } else {
                        console.log(res)
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
    if (isNewRoom) {
        url = 'https://moovally.com/totallyscience-backend/create_room.php';
    } else {
        url = 'https://moovally.com/totallyscience-backend/join_room.php';
    }

    try {
        fetch(`${url}?id=${roominput.value}&name=${nameinput.value}&v=1`).then((response) => response.text()).then((res) => {
            const jsonRes = JSON.parse(res);
                    
            if (jsonRes) {
                messageList.innerHTML = '';

                //display chatroom id
                let ele = document.createElement('li');
                ele.innerText = 'Room Code: ' + localStorage.getItem('chatRoom');
                messageList.appendChild(ele);

                //display messages
                for (msg in jsonRes) {
                    let curmsg = jsonRes[msg];
                    
                    let ele = document.createElement('li');
                    ele.innerText = curmsg[0];

                    let span = document.createElement('span');
                    span.innerText = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                    ele.append(span);

                    messageList.appendChild(ele);
                }

                messageinput.style = ''
                leavebtn.style = ''
                scrollb.style.display = 'block'

                localStorage.setItem('chatName', nameinput.value);
                localStorage.setItem('chatRoom', roominput.value);

                if (doscroll) {
                    window.scrollTo(0, document.body.scrollHeight);
                }

                setInterval(() => {
                    try {
                        fetch(`https://moovally.com/totallyscience-backend/get_chat.php?id=${localStorage.getItem('chatRoom')}&v=1`).then((response) => response.text()).then((res) => {
                            const jsonRes = JSON.parse(res);
                    
                            if (jsonRes) {
                                messageList.innerHTML = '';

                                //display chatroom id
                                let ele = document.createElement('li');
                                ele.innerText = 'Room Code: ' + localStorage.getItem('chatRoom');
                                messageList.appendChild(ele);

                                //display messages
                                for (msg in jsonRes) {
                                    let curmsg = jsonRes[msg];
                                    
                                    let ele = document.createElement('li');
                                    ele.innerText = curmsg[0];
                
                                    let span = document.createElement('span');
                                    span.innerText = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                                    ele.append(span);
                
                                    messageList.appendChild(ele);
                                }

                                if (doscroll) {
                                    window.scrollTo(0, document.body.scrollHeight);
                                }
                            } else {
                                console.log(res)
                            }
                        });
                    } catch (err) {
                        console.log(err);
                    }
                }, 2000);

                window.addEventListener('beforeunload', function() {
                    try {
                        fetch(`https://moovally.com/totallyscience-backend/leave_room.php?id=${localStorage.getItem('chatRoom')}&name=${localStorage.getItem('chatName')}&v=1`).then((response) => response.text());
                    } catch(err) {
                        console.log(err);
                    }
                });
            } else {
                console.log(res)

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

var HTMLUtils = new function() {
    var rules = [
        { replacement: '&', expression: /&amp;/g  },
        { replacement: '<', expression: /&lt;/g   },
        { replacement: '>', expression: /&gt;/g   },
        { replacement: '"', expression: /&quot;/g },
    ];
    this.escape = function(html) {
        var result = html;
        for (var i = 0; i < rules.length; ++i) {
            var rule = rules[i];
            result = result.replace(rule.expression, rule.replacement);
        }
        return result;
    }
};

window.addEventListener('load', function() {
    const nameinput = document.getElementById('username');
    const roominput = document.getElementById('roominput');

    nameinput.value = localStorage.getItem('chatName');
    roominput.value = localStorage.getItem('chatRoom');
});
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
window.addEventListener('keydown', (e) => {
    if (e.key == '`') {
        window.open(this.localStorage.getItem("website"), '_blank', 'fullscreen=yes resizable=yes')
    }
});

if (localStorage.getItem("website") == null) {
    localStorage.setItem("website", "https://classroom.google.com/")
}

if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light")
}

document.body.setAttribute("theme", localStorage.getItem("theme"))
document.getElementById('settings').children[0].src = `./assets/images/settings-${localStorage.getItem("theme")}.svg`