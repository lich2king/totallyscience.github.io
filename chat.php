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
        <input style="display: none;" id="messageInput" placeholder="Message..." onclick=""></input>
        <button style="display: none;" id="leavebtn" onclick="location.reload();">Leave</button>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script>
        window.addEventListener('load', () => {
            //document.getElementById('chatnav').classList.add('selected');

            const menu = document.getElementById('menu');

            // expects that the order/arrangement of children in menu are not altered.
            const messageList = document.getElementById('messages');
            const messageInput = document.getElementById('messageInput');
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
                joinRoom(code, 'join');
            });
            createBtn.addEventListener('click', async () => {
                // create new chatroom clicked
                joinRoom(code, 'create');
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

                    let res = await fetcher(`${activeServer}/chat/send`, { body: JSON.stringify({ roomCode: code, message: finalInput })});

                    if (res.status == 400) {
                        let errorMessage = await res.text();

                        alert(errorMessage);
                    } else if (res.status == 200) {
                        let json = res.json();

                        //reverse order of messages
                        json.reverse();

                        for (msg in json.messages) {
                            let curMessage = json.message[msg];

                            // each user has a unique color in the chatroom
                            let color = json.users[curMessage[0]].color;

                            // add user message to list
                            messageList.children[msg + 1].children[0].textContent = curmsg[0];
                            messageList.children[msg + 1].children[1].innerHTML = `<span3 style="color: #${color}">${HTMLUtils.escape(curmsg[1])}</span3>${HTMLUtils.escape(': ' + curmsg[2])}`;
                        }
                    }
                }
            });
        });
        async function joinRoom(inputCode, mode) {
            const menu = document.getElementById('menu');

            const messageList = document.getElementById('messages');
            const messageInput = document.getElementById('messageInput');
            const leaveBtn = document.getElementById('leavebtn');
            const error = menu.children[7];

            // hide menu while loading
            menu.style.display = 'none';

            let res = await fetcher(`${activeServer}/chat/${mode}`, { body: { roomCode: inputCode }});

            // alert user of any errors
            if (res.status == 400) {
                error.innerText = await res.text();

                setTimeout(() => {
                    error.innerText = '';
                }, 1000);
            } else if (res.status == 200) {
                let json = res.json();

                // set last room entered in localstorage to populate values on page reload
                localStorage.setItem('chatRoom', inputCode);

                // set displayed room code to the joined room
                messageList.children[0].children[1].textContent = inputCode;
                messageList.children[0].children[0].textContent = 'Room Code:';

                // hide footer
                document.querySelector('footer').style.display = 'none';

                //reverse order of messages
                json.reverse();

                for (msg in json.messages) {
                    let curMessage = json.message[msg];

                    // each user has a unique color in the chatroom
                    let color = json.users[curMessage[0]].color;

                    // add user message to list
                    messageList.children[msg + 1].children[0].textContent = curmsg[0];
                    messageList.children[msg + 1].children[1].innerHTML = `<span3 style="color: #${color}">${HTMLUtils.escape(curmsg[1])}</span3>${HTMLUtils.escape(': ' + curmsg[2])}`;
                }

                messageInput.style.display = '';
                leavebtn.style.display = '';
            }

            window.addEventListener('beforeunload', () => {
                fetcher(`${activeServer}/chat/leave`, { body: JSON.stringify({ roomCode: code })});
            });
        }

        let HTMLUtils = new (() => {
            let rules = [
                { replacement: '&', expression: /&amp;/g },
                { replacement: '<', expression: /&lt;/g },
                { replacement: '>', expression: /&gt;/g },
                { replacement: '"', expression: /&quot;/g },
            ];

            this.escape = (html) => {
                let result = html;

                for (let i = 0; i < rules.length; i += 1) {
                    let rule = rules[i];

                    result = result.replace(
                        rule.expression,
                        rule.replacement
                    );
                }
                return result;
            };
        })();
    </script>
</body>

</html>