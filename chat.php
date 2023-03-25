<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <title>Chat - Totally Science - Free Online Unblocked Games</title>

    <link rel='stylesheet' href='assets/styles/chat.css?v25'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="menu">
        <input type="text" placeholder="Room Code">
        <br>
        <button class="button">Join Room</button>
        <br>
        <button class="button">Create Room</button>
        <br>
        <button class="button">Join Public Chatroom</button>
        <p id="error" class="error"></p>
    </div>

    <div id="chat">
        <ul id="messages">
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
            <li><span class="span"></span>
                <span2></span2>
            </li>
        </ul>
        <input style="display: none;" id="messageinput" placeholder="Message..." onclick=""></input>
        <button style="display: none;" id="leavebtn" onclick="location.reload();">Leave</button>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="https://cdn.socket.io/4.5.4/socket.io.min.js"></script>
    <script>
        window.addEventListener('load', () => {
            //document.getElementById('chatnav').classList.add('selected');

            const socket = io();

            // expects that the order/arrangement of children in menu are not altered.
            const messageList = document.getElementById('messages');
            const messageInput = document.getElementById('messageinput');
            const leaveBtn = document.getElementById('leavebtn');
            const menu = document.getElementById('menu');
            const code = menu.children[0];
            const joinBtn = menu.children[2];
            const createBtn = menu.children[4];
            const joinPublicBtn = menu.children[6];
            const error = menu.children[7];

            //display code from localstorage
            code.value = localStorage.getItem('chatRoom') || '';

            // chat requires users to be logged in to access username data
            if (!authToken) {
                // redirect to login page if users are not logged in
                error = 'you must be logged in to access chatrooms';

                location.href = 'login.php';
            }

        });
        /*
        window.addEventListener('load', () => {
            //document.getElementById('chatnav').classList.add('selected');

            const menu = document.getElementById('menu');

            // expects that the order/arrangement of children in menu are not altered.
            const messageList = document.getElementById('messages');
            const messageInput = document.getElementById('messageinput');
            const leaveBtn = document.getElementById('leavebtn');
            const code = menu.children[0];
            const joinBtn = menu.children[2];
            const createBtn = menu.children[4];
            const joinPublicBtn = menu.children[6];
            const error = menu.children[7];

            //display code from localstorage
            code.value = localStorage.getItem('chatRoom') || '';

            // chat requires users to be logged in to access username data
            if (!authToken) {
                // redirect to login page if users are not logged in
                error = 'you must be logged in to access chatrooms';

                location.href = 'login.php';
            }
            
            // settings colors for each user is currently done on the backend so this is unused
            // const randomColor = () =>
            //     Math.floor(Math.random() * 16777215).toString(16);
            
            joinBtn.addEventListener('click', async () => {
                // join chatroom clicked
                joinRoom(code.value, 'join');
            });
            createBtn.addEventListener('click', async () => {
                // create new chatroom clicked
                joinRoom(code.value, 'create');
            });
            joinPublicBtn.addEventListener('click', async () => {
                // join public chatroom clicked
                joinRoom('TotallyScience', 'join');
            });

            messageInput.addEventListener('keyup', async (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();

                    // remove single quote from message (I believe this is becuase it could muddle with json)
                    finalInput = messageInput.value.replace("'", '"');
                    messageInput.value = '';

                    let res = await fetcher(`${activeServer}/chat/send`, { body: { roomCode: code.value, message: finalInput }});

                    if (res.status == 400) {
                        let errorMessage = await res.text();

                        alert(errorMessage);
                    } else if (res.status == 200) {
                        let json = await res.json();

                        if (json.messages) {
                            //reverse order of messages
                            json.messages.reverse();
                        } else {
                            messageList.children[3].children[1].innerHTML = `<span3 style="color: #333">No messages have been sent in this chatroom yet.</span3>`;
                        }

                        for (msg in json.messages) {
                            let curMessage = json.messages[msg];

                            // each user has a unique color in the chatroom
                            let color = json.users[curMessage.name].color;
                            
                            // create js date object to format time sent before displaying
                            let time = new Date(curMessage.time);

                            // add user message to list
                            messageList.children[parseInt(msg) + 1].children[0].textContent = `${time.toDateString()} ${time.toLocaleTimeString()}`;
                            messageList.children[parseInt(msg) + 1].children[1].innerHTML = `<span3 style="color: #${color}">${HTMLReplacements(curMessage.name)}</span3>${HTMLReplacements(': ' + curMessage.message)}`;
                        }
                    }
                }
            });
        });
        async function joinRoom(inputCode, mode) {
            const menu = document.getElementById('menu');

            const messageList = document.getElementById('messages');
            const messageInput = document.getElementById('messageinput');
            const leaveBtn = document.getElementById('leavebtn');
            const error = menu.children[7];

            let res = await fetcher(`${activeServer}/chat/${mode}`, { body: { roomCode: inputCode }});

            // alert user of any errors
            if (res.status == 400) {
                error.innerText = await res.text();

                setTimeout(() => {
                    error.innerText = '';
                }, 1000);
            } else if (res.status == 200) {
                let json = await res.json();

                // set last room entered in localstorage to populate values on page reload
                localStorage.setItem('chatRoom', inputCode);

                // hide menu while loading
                menu.style.display = 'none';

                // set displayed room code to the joined room
                messageList.children[0].children[1].textContent = inputCode;
                messageList.children[0].children[0].textContent = 'Room Code:';

                // hide footer
                document.querySelector('footer').style.display = 'none';

                if (json.messages) {
                    //reverse order of messages
                    json.messages.reverse();
                } else {
                    messageList.children[3].children[1] = `<span3 style="color: #333">No messages have been sent in this chatroom yet.</span3>`;
                }

                for (msg in json.messages) {
                    let curMessage = json.messages[msg];

                    // each user has a unique color in the chatroom
                    let color = json.users[curMessage.name].color;

                    // create js date object to format time sent before displaying
                    let time = new Date(curMessage.time);

                    // add user message to list
                    messageList.children[parseInt(msg) + 1].children[0].textContent = `${time.toDateString()} ${time.toLocaleTimeString()}`;
                    messageList.children[parseInt(msg) + 1].children[1].innerHTML = `<span3 style="color: #${color}">${HTMLReplacements(curMessage.name)}</span3>${HTMLReplacements(': ' + curMessage.message)}`;
                }

                //show the message input box and leave chat button
                messageInput.style.display = 'block';
                leaveBtn.style.display = 'block';
            }

            window.addEventListener('beforeunload', () => {
                const code = document.getElementById('menu').children[0];

                fetcher(`${activeServer}/chat/leave`, { body: { roomCode: code.value }});
            });
        }

        // this is used becuase .innerText is problematic for special chars but neccesary for security
        // pulled from stackoverflow and modified
        function HTMLReplacements(html) {
            let rules = [
                { replacement: '&', expression: /&amp;/g },
                { replacement: '<', expression: /&lt;/g },
                { replacement: '>', expression: /&gt;/g },
                { replacement: '"', expression: /&quot;/g },
            ];

            let result = html;

            for (let i = 0; i < rules.length; i += 1) {
                let rule = rules[i];

                result = result.replace(rule.expression, rule.replacement);
            }

            return result;
        }
        */
    </script>
</body>

</html>