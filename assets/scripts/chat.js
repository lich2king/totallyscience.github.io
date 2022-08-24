document.getElementById("chatnav").classList.add("selected");

fetch(`assets/php/getCookie.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
    res = JSON.parse(res);

    let loggedIn = res ? res['isLoggedIn']: 'false';

    if (loggedIn == 'true' || location.host == 'localhost:3000') {
        const errorText = document.getElementById('errorText');
        const joinChat = document.getElementById('joinChat');
        const messageList = document.getElementById('messages');
        const messageinput = document.getElementById('messageinput');
        const leavebtn = document.getElementById('leavebtn');

        let doscroll = true;
        let url;

        joinChat.children[0].value = localStorage.getItem('chatRoom');
        joinChat.children[2].addEventListener('click', () => {
            url = 'join_room';
            joinChatroom();
        });
        joinChat.children[4].addEventListener('click', () => {
            url = 'create_room';
            joinChatroom();
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

        function joinChatroom() {
            const roominput = joinChat.children[0].value;
            joinChat.style.display = 'none';

            try {
                fetch(`assets/php/chat/${url}.php?id=${roominput}`).then((response) => response.text()).then((res1) => {
                    let jsonRes;

                    try {
                        jsonRes = JSON.parse(res1);
                    } catch (error) {
                        if (error) {
                            joinChat.style.display = '';
                            return errorText.innerText = res1;
                        }
                    }
        
                    if (jsonRes) {
                        //display chatroom id
                        messageList.children[0].textContent = localStorage.getItem('chatRoom');
                        messageList.children[0].children[0].textContent = 'Room Code:';
        
                        //display messages
                        jsonRes.reverse();
                        for (msg in jsonRes) {
                            console.log(msg)
                            let curmsg = jsonRes[msg];
        
                            messageList.children[msg + 1].textContent = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                            messageList.children[msg + 1].children[0].textContent = curmsg[0];
                        }
        
                        messageinput.style = ''
                        leavebtn.style = ''
        
                        localStorage.setItem('chatName', res['username']);
                        localStorage.setItem('chatRoom', joinChat.children[0].value);
        
                        if (doscroll) {
                            window.scrollTo(0, document.body.scrollHeight);
                        }
        
                        setInterval(() => {
                            try {
                                fetch(`assets/php/chat/get_chat.php?id=${localStorage.getItem('chatRoom')}`).then((response) => response.text()).then((res) => {
                                    let jsonRes;
                                    try {
                                        jsonRes = JSON.parse(res);
                                    } catch (error) {
                                        if (error) {
                                            return alert(res)
                                        }
                                    }
        
                                    if (jsonRes) {
                                        //display chatroom id
                                        messageList.children[0].textContent = localStorage.getItem('chatRoom');
                                        messageList.children[0].children[0].textContent = 'Room Code:';
        
                                        //display messages
                                        jsonRes.reverse();
                                        for (msg in jsonRes) {
                                            let curmsg = jsonRes[msg];
        
                                            messageList.children[msg + 1].textContent = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                                            messageList.children[msg + 1].children[0].textContent = curmsg[0];
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
                                fetch(`assets/php/chat/leave_room.php?id=${localStorage.getItem('chatRoom')}&name=${localStorage.getItem('chatName')}`).then((response) => response.text());
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

            messageinput.addEventListener("keyup", (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    messageinp = messageinput.value.replace("'", '"');
                    messageinput.value = '';
        
                    try {
                        fetch(`assets/php/send_message.php?id=${localStorage.getItem('chatRoom')}&name=${localStorage.getItem('chatName')}&message=${messageinp}`).then((response) => response.text()).then((res) => {
                            let jsonRes;
                            try {
                                jsonRes = JSON.parse(res);
                            } catch (error) {
                                if (error) {
                                    return alert(res)
                                }
                            }
        
                            if (jsonRes) {
                                //display chatroom id
                                messageList.children[0].textContent = localStorage.getItem('chatRoom');
                                messageList.children[0].children[0].textContent = 'Room Code:';
        
                                //display messages
                                jsonRes.reverse();
                                for (msg in jsonRes) {
                                    let curmsg = jsonRes[msg];
        
                                    messageList.children[msg + 1].textContent = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                                    messageList.children[msg + 1].children[0].textContent = curmsg[0];
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
        }
    } else {
        errorText.innerText = 'You must be logged in to use chat.';
    }
});