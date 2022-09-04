document.getElementById("chatnav").classList.add("selected");

fetch(`assets/php/getCookie.php`).then((response) => response.text()).then((res) => {
    res = JSON.parse(res);

    let loggedIn = res ? res['isLoggedIn'] : 'false';

    if (loggedIn == 'true' || location.host == 'localhost:3000') {
        const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
        const errorText = document.getElementById('errorText');
        const joinChat = document.getElementById('joinChat');
        const messageList = document.getElementById('messages');
        const messageinput = document.getElementById('messageinput');
        const leavebtn = document.getElementById('leavebtn');

        let users = [];
        let colors = [];
        let url;
        let lastMessage;

        joinChat.children[0].value = localStorage.getItem('chatRoom');
        joinChat.children[2].addEventListener('click', () => {
            url = 'join_room';
            joinChatroom();
        });
        joinChat.children[4].addEventListener('click', () => {
            url = 'create_room';
            joinChatroom();
        });
        joinChat.children[6].addEventListener('click', () => {
            url = 'join_room';
            joinChatroom('Totally Science');
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

        function joinChatroom(code) {
            let roominput;

            if (code) {
                roominput = code;
            } else {
                roominput = joinChat.children[0].value;
            }

            joinChat.style.display = 'none';

            try {
                fetch(`assets/php/chat/${url}.php?id=${roominput}`).then((response) => response.text()).then((res1) => {
                    let jsonRes;

                    try {
                        jsonRes = JSON.parse(res1);
                    } catch (error) {
                        if (error) {
                            joinChat.style.display = '';

                            if (res1 == 'you must verify your email to join chat.') {
                                swal('You must verify your email to join the chat', { buttons: { cancel: 'Cancel', login: { text: 'Verify', value: "verify" } }, }).then((value) => {
                                    if (value == 'verify') {
                                        window.open('verify.php', '_self');
                                    }
                                });

                                return;
                            }
                            return errorText.innerText = res1;
                        }
                    }

                    if (jsonRes) {
                        localStorage.setItem('chatRoom', roominput);

                        //display chatroom id
                        messageList.children[0].children[1].textContent = localStorage.getItem('chatRoom');
                        messageList.children[0].children[0].textContent = 'Room Code:';

                        document.querySelector('footer').style.display = 'none';
                        document.querySelector('#gamePassAd').style.display = 'none';

                        //display messages
                        jsonRes.reverse();
                        for (msg in jsonRes) {
                            let curmsg = jsonRes[msg];

                            if (curmsg[1] == 'Server') {
                                let foundUser = users.find(user => curmsg[2].startsWith(user));

                                if (foundUser) {
                                    curmsg[2] = `<span3 style="color: #${colors[users.indexOf(foundUser)]}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                    messageList.children[parseInt(msg) + 1].children[1].innerHTML = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                                } else {
                                    users.push(curmsg[2].split(" ")[0]);
                                    colors.push(randomColor());

                                    curmsg[2] = `<span3 style="color: #${colors[colors.length - 1]}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                    messageList.children[parseInt(msg) + 1].children[1].innerHTML = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                                }
                            } else if (users.includes(curmsg[1].trim())) {
                                curmsg[1] = `<span3 style="color: #${colors[users.indexOf(curmsg[1].trim())]}">${HTMLUtils.escape(curmsg[1])}</span3>`;
                                messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
                            } else {
                                users.push(curmsg[1].trim());
                                colors.push(randomColor());

                                curmsg[1] = `<span3 style="color: #${colors[colors.length - 1]}">${HTMLUtils.escape(curmsg[1].trim())}</span3>`;
                                messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
                            }

                            messageList.children[parseInt(msg) + 1].children[0].textContent = curmsg[0];
                        }

                        messageinput.style = '';
                        leavebtn.style = '';

                        setInterval(() => {
                            try {
                                fetch(`assets/php/chat/get_chat.php?id=${localStorage.getItem('chatRoom')}`).then((response) => response.text()).then((res3) => {
                                    let jsonRes;
                                    try {
                                        jsonRes = JSON.parse(res3);
                                    } catch (error) {
                                        if (error) {
                                            return alert(res3);
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

                                            if (curmsg[1] == 'Server') {
                                                let foundUser = users.find(user => curmsg[2].startsWith(user));

                                                if (foundUser) {
                                                    curmsg[2] = `<span3 style="color: #${colors[users.indexOf(foundUser)]}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                                    messageList.children[parseInt(msg) + 1].children[1].innerHTML = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                                                } else {
                                                    users.push(curmsg[2].split(" ")[0]);
                                                    colors.push(randomColor());

                                                    curmsg[2] = `<span3 style="color: #${colors[colors.length - 1]}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                                    messageList.children[parseInt(msg) + 1].children[1].innerHTML = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                                                }
                                            } else if (users.includes(curmsg[1].trim())) {
                                                curmsg[1] = `<span3 style="color: #${colors[users.indexOf(curmsg[1].trim())]}">${HTMLUtils.escape(curmsg[1])}</span3>`;
                                                messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
                                            } else {
                                                users.push(curmsg[1].trim());
                                                colors.push(randomColor());

                                                curmsg[1] = `<span3 style="color: #${colors[colors.length - 1]}">${HTMLUtils.escape(curmsg[1].trim())}</span3>`;
                                                messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
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
                console.log(err);

                joinChat.style.display = '';
            }

            function getSecondsDiff(startDate, endDate) {
                const msInSecond = 1000;
                
                return Math.round(
                    Math.abs(endDate.getTime() - startDate.getTime()) / msInSecond,
                );
            }

            messageinput.addEventListener("keyup", (event) => {
                if (event.key === 'Enter') {
                    console.log(getSecondsDiff(lastMessage, Date.now()))
                    if (getSecondsDiff(lastMessage, Date.now()) < 2) {
                        return swal('You cannot send a message more than once every 2 seconds. To remove this delay you need GamePass', { buttons: { cancel: 'Cancel', login: { text: 'Get Gamepass', value: "gamepass" } }, }).then((value) => {
                            if (value == 'gamepass') {
                                window.open('gamepass', '_self');
                            }
                        });
                    }

                    event.preventDefault();
                    messageinp = messageinput.value.replace("'", '"');
                    messageinput.value = '';

                    window.scrollTo(0, document.body.scrollHeight);

                    lastMessage = Date.now();

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

                                    if (curmsg[1] == 'Server') {
                                        let foundUser = users.find(user => curmsg[2].startsWith(user));

                                        if (foundUser) {
                                            curmsg[2] = `<span3 style="color: #${colors[users.indexOf(foundUser)]}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                            messageList.children[parseInt(msg) + 1].children[1].innerHTML = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                                        } else {
                                            users.push(curmsg[2].split(" ")[0]);
                                            colors.push(randomColor());

                                            curmsg[2] = `<span3 style="color: #${colors[colors.length - 1]}">${HTMLUtils.escape(curmsg[2])}</span3>`;
                                            messageList.children[parseInt(msg) + 1].children[1].innerHTML = HTMLUtils.escape(curmsg[1] + ': ') + curmsg[2];
                                        }
                                    } else if (users.includes(curmsg[1].trim())) {
                                        curmsg[1] = `<span3 style="color: #${colors[users.indexOf(curmsg[1].trim())]}">${HTMLUtils.escape(curmsg[1])}</span3>`;
                                        messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
                                    } else {
                                        users.push(curmsg[1].trim());
                                        colors.push(randomColor());

                                        curmsg[1] = `<span3 style="color: #${colors[colors.length - 1]}">${HTMLUtils.escape(curmsg[1].trim())}</span3>`;
                                        messageList.children[parseInt(msg) + 1].children[1].innerHTML = curmsg[1] + HTMLUtils.escape(': ' + curmsg[2]);
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