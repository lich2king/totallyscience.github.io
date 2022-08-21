fetch(`assets/php/getCookie.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
    res = JSON.parse(res);

    let loggedIn = res ? res['isLoggedIn']: 'false';

    if (loggedIn == 'true' || location.host == 'localhost:3000') {
        const errorText = document.getElementById('errorText');
        const joinChat = document.getElementById('joinChat');
        const messageList = document.getElementById('messages');
        const messageinput = document.getElementById('messageinput');
        const leavebtn = document.getElementById('leavebtn');
        const scrollb = document.getElementById('scrollb');

        let doscroll = true;

        joinChat.children[4].addEventListener('click', () => {
            const roominput = joinChat.children[0].value;

            joinChat.style.display = 'none';

            try {
                fetch(`assets/php/chat/create_room.php?id=${roominput.value}`).then((response) => response.text()).then((res) => {
                    let jsonRes;

                    try {
                        jsonRes = JSON.parse(res);
                    } catch (error) {
                        if (error) {
                            joinChat.style.display = '';
                            return errorText.innerText = res;
                        }
                    }
        
                    if (jsonRes) {
                        messageList.innerHTML = '';
        
                        //display chatroom id
                        let ele = document.createElement('li');
                        let span = document.createElement('span');
                        span.innerText = 'Room Code:'
                        ele.innerText = localStorage.getItem('chatRoom');
                        ele.append(span);
                        messageList.appendChild(ele);
        
                        //display messages
                        for (msg in jsonRes) {
                            let curmsg = jsonRes[msg];
        
                            let ele = document.createElement('li');
                            let span = document.createElement('span');
                            ele.innerText = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                            span.innerText = curmsg[0];
        
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
                                fetch(`https://${baseUrl}/assets/php/get_chat.php?id=${localStorage.getItem('chatRoom')}`).then((response) => response.text()).then((res) => {
                                    let jsonRes;
                                    try {
                                        jsonRes = JSON.parse(res);
                                    } catch (error) {
                                        if (error) {
                                            return alert(res)
                                        }
                                    }
        
                                    if (jsonRes) {
                                        messageList.innerHTML = '';
        
                                        //display chatroom id
                                        let ele = document.createElement('li');
                                        let span = document.createElement('span');
                                        span.innerText = 'Room Code:'
                                        ele.innerText = localStorage.getItem('chatRoom');
                                        ele.append(span);
                                        messageList.appendChild(ele);
        
                                        //display messages
                                        for (msg in jsonRes) {
                                            let curmsg = jsonRes[msg];
        
                                            let ele = document.createElement('li');
                                            let span = document.createElement('span');
                                            ele.innerText = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                                            span.innerText = curmsg[0];
        
                                            ele.append(span);
        
                                            messageList.appendChild(ele);
                                        }
        
                                        if (doscroll) {
                                            window.scrollTo(0, document.body.scrollHeight);
                                        }
                                    }
                                });
                            } catch (err) {
                                console.log(err);
                            }
                        }, 2000);
        
                        window.addEventListener('beforeunload', function() {
                            try {
                                fetch(`https://${baseUrl}/assets/php/leave_room.php?id=${localStorage.getItem('chatRoom')}&name=${localStorage.getItem('chatName')}`).then((response) => response.text());
                            } catch (err) {
                                console.log(err);
                            }
                        });
                    } else {
                        alert(res)
        
                        joinChat.style.display = '';
                    }
                });
            } catch (err) {
                console.log(err)
        
                joinChat.style.display = '';
            }

            messageinput.addEventListener("keyup", function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    messageinp = messageinput.value.replace("'", '"');
                    messageinput.value = '';
        
                    try {
                        fetch(`https://${baseUrl}/assets/php/send_message.php?id=${localStorage.getItem('chatRoom')}&name=${localStorage.getItem('chatName')}&message=${messageinp}`).then((response) => response.text()).then((res) => {
                            let jsonRes;
                            try {
                                jsonRes = JSON.parse(res);
                            } catch (error) {
                                if (error) {
                                    return alert(res)
                                }
                            }
        
                            if (jsonRes) {
                                messageList.innerHTML = '';
        
                                //display chatroom id
                                let ele = document.createElement('li');
                                let span = document.createElement('span');
                                span.innerText = 'Room Code:'
                                ele.innerText = localStorage.getItem('chatRoom');
                                ele.append(span);
                                messageList.appendChild(ele);
        
                                //display messages
                                for (msg in jsonRes) {
                                    let curmsg = jsonRes[msg];
        
                                    let ele = document.createElement('li');
                                    let span = document.createElement('span');
                                    ele.innerText = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                                    span.innerText = curmsg[0];
        
                                    ele.append(span);
        
                                    messageList.appendChild(ele);
                                }
        
                                if (doscroll) {
                                    window.scrollTo(0, document.body.scrollHeight);
                                }
                            } else {
                                alert(res)
                            }
                        });
                    } catch (err) {
                        console.log(err);
                    }
                }
            });
        });
        joinChat.children[2].addEventListener('click', () => {
            const roominput = joinChat.children[0].value;

        });

        var HTMLUtils = new function() {
            var rules = [
                { replacement: '&', expression: /&amp;/g },
                { replacement: '<', expression: /&lt;/g },
                { replacement: '>', expression: /&gt;/g },
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
    } else {
        errorText.innerText = 'You must be logged in to use chat.';
    }
});