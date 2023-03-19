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
        <p id="errorText" class="error"></p>
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
            let menu = document.getElementById('menu');
            let socket = io.connect(activeServer);

            // expects that the order/arrangement of children in menu are not altered.
            let code = menu.children[0];
            let joinBtn = menu.children[2];
            let createBtn = menu.children[4];
            let joinPublicBtn = menu.children[6];
            let error = menu.children[7];

            // chat requires users to be logged in to access username data
            if (!authToken) {
                // redirect to login page if users are not logged in
                error = 'you must be logged in to access chatrooms';

                location.href = 'login.php';
            }

            joinBtn.addEventListener('click', () => {
                // join chatroom clicked

                socket.emit('join', { "username": authToken.username, "code": code });
            });
            createBtn.addEventListener('click', () => {
                // create new chatroom clicked

                socket.emit('create', { "username": authToken.username });
            });
            joinPublicBtn.addEventListener('click', () => {
                // join public chatroom clicked

                socket.emit('join', { "username": authToken.username, "code": 'TotallyScience' });
            });
            
            //handle socket events
            socket.on('error', (data) => {
                error.innerText = data.message;

                setTimeout(() => {
                    error.innerText = '';
                }, 1000);
            })
        });
    </script>
    <!--<script src="assets/scripts/chat.js?v52"></script>-->
</body>

</html>