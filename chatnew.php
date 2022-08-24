<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/chat.css?v12'>
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
        <ul id="messages">
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
            <li><span class="span"></span><span2></span2></li>
        </ul>
        <input style="display: none;" id="messageinput" placeholder="message" onclick=""></input>
        <button style="display: none;" id="leavebtn" onclick="location.reload();">Leave</button>
    </div>


    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/main.js"></script>
    <script src="assets/scripts/chat.js?v25"></script>
</body>

</html>