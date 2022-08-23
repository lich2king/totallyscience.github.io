<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/chat.css?v2'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="joinChat">
        <input type="text" placeholder="Room Code...">
        <br>
        <button class="button" onclick="">Join Room</button>
        <br>
        <button class="button" onclick="">Create Room</button>
        <p id="errorText" class="error"></p>
    </div>

    <div id="chat">
        <ul id="messages"></ul>
        <input style="display: none;" id="messageinput" placeholder="message" onclick=""></input>
        <button style="display: none;" id="leavebtn" onclick="location.reload();">Leave</button>
    </div>

    <svg id="scrollb" style="transform: rotate(180deg);" onclick="window.scrollTo(0, document.body.scrollHeight);" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#f75dfc" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
    </svg>


    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/chat.js?v7"></script>
</body>

</html>