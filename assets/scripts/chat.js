document.getElementById("chatnav").classList.add("selected");

fetch(`assets/php/getCookie.php`).then((response) => response.text()).then((res) => {
    res = JSON.parse(res);

    let loggedIn = res ? res['isLoggedIn']: 'false';

    if (loggedIn == 'true' || location.host == 'localhost:3000') {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const errorText = document.getElementById('errorText');
        const joinChat = document.getElementById('joinChat');
        const messageList = document.getElementById('messages');
        const messageinput = document.getElementById('messageinput');
        const leavebtn = document.getElementById('leavebtn');

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
                        messageList.children[0].children[1].textContent = localStorage.getItem('chatRoom');
                        messageList.children[0].children[0].textContent = 'Room Code:';
        
                        //display messages
                        jsonRes.reverse();
                        for (msg in jsonRes) {
                            let curmsg = jsonRes[msg];

                            if (curmsg[1].startsWith(res['username'])) {
                                curmsg[1] = `<span3 style="color: #${randomColor}">${HTMLUtils.escape(curmsg[1])}</span3>`;
                                messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
                            } else if(curmsg[1].startsWith('Server') && curmsg[2].startsWith(res['username'])) {
                                curmsg[2] = `<span3 style="color: #${randomColor}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                messageList.children[parseInt(msg) + 1].children[1].textContent = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                            } else {
                                messageList.children[parseInt(msg) + 1].children[1].textContent = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                            }
        
                            messageList.children[parseInt(msg) + 1].children[0].textContent = curmsg[0];
                        }
        
                        messageinput.style = ''
                        leavebtn.style = ''
    
                        localStorage.setItem('chatRoom', joinChat.children[0].value);
        
                        setInterval(() => {
                            try {
                                fetch(`assets/php/chat/get_chat.php?id=${localStorage.getItem('chatRoom')}`).then((response) => response.text()).then((res3) => {
                                    let jsonRes;
                                    try {
                                        jsonRes = JSON.parse(res3);
                                    } catch (error) {
                                        if (error) {
                                            return alert(res3)
                                        }
                                    }
        
                                    if (jsonRes) {
                                        //display chatroom id
                                        messageList.children[0].children[1].textContent = localStorage.getItem('chatRoom');
                                        messageList.children[0].children[0].textContent = 'Room Code:';
        
                                        //display messages
                                        jsonRes.reverse();
                                        for (msg in jsonRes) {
                                            let curmsg = jsonRes[msg];

                                            if (curmsg[1].startsWith(res['username'])) {
                                                curmsg[1] = `<span3 style="color: #${randomColor}">${HTMLUtils.escape(curmsg[1])}</span3>`;
                                                messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
                                            } else if(curmsg[1].startsWith('Server') && curmsg[2].startsWith(res['username'])) {
                                                curmsg[2] = `<span3 style="color: #${randomColor}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                                messageList.children[parseInt(msg) + 1].children[1].textContent = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                                            } else {
                                                messageList.children[parseInt(msg) + 1].children[1].textContent = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                                            }

                                            messageList.children[parseInt(msg) + 1].children[0].textContent = curmsg[0];
                                        }
                                    }
                                });
                            } catch (err) {
                                console.log(err);
                            }
                        }, 2000);
        
                        window.addEventListener('beforeunload', function() {
                            try {
                                fetch(`assets/php/chat/leave_room.php?id=${localStorage.getItem('chatRoom')}`).then((response) => response.text());
                            } catch (err) {
                                console.log(err);
                            }
                        });
                    } else {
                        alert(res1)
        
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
                        fetch(`assets/php/chat/send_message.php?id=${localStorage.getItem('chatRoom')}&message=${messageinp}`).then((response) => response.text()).then((res2) => {
                            let jsonRes;
                            try {
                                jsonRes = JSON.parse(res2);
                            } catch (error) {
                                if (error) {
                                    return alert(res2)
                                }
                            }
        
                            if (jsonRes) {
                                //display chatroom id
                                messageList.children[0].children[1].textContent = localStorage.getItem('chatRoom');
                                messageList.children[0].children[0].textContent = 'Room Code:';
        
                                //display messages
                                jsonRes.reverse();
                                for (msg in jsonRes) {
                                    let curmsg = jsonRes[msg];

                                    if (curmsg[1].startsWith(res['username'])) {
                                        curmsg[1] = `<span3 style="color: #${randomColor}">${HTMLUtils.escape(curmsg[1])}</span3>`;
                                        messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
                                    } else if(curmsg[1].startsWith('Server') && curmsg[2].startsWith(res['username'])) {
                                        curmsg[2] = `<span3 style="color: #${randomColor}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                        messageList.children[parseInt(msg) + 1].children[1].textContent = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                                    } else {
                                        messageList.children[parseInt(msg) + 1].children[1].textContent = HTMLUtils.escape(curmsg[1] + ': ' + curmsg[2]);
                                    }
        
                                    messageList.children[parseInt(msg) + 1].children[0].textContent = curmsg[0];
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