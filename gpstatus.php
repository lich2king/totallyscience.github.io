<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/gamepass.css'>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>


    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body id="mainBody">
    <?php include "assets/includes/navbar.php" ?>

    <div class="gamepass-header">
        <h1>GAME <span style="color: var(--accent-color)">PASS</span></h1>
    </div>
    <div class="statusContainer">
        <br>
        <h1>Your membership will automatically renew/end on <span style="color: var(--accent-color)">01/06/2022</span></h1>
        <br>
        <p>Enjoy your list of <span style="color: var(--accent-color)">Private</span> Links:</p>
        <ul>
            <li><a href="https://actuallyhistory.com" target="_blank">ActuallyHistory.com</a></li>
            <li><a href="https://actuallyhistory.com" target="_blank">MathPlace.com</a></li>
            <li><a href="https://actuallyhistory.com" target="_blank">FunnyScience.org</a></li>
            <li><a href="https://actuallyhistory.com" target="_blank">ActuallyHistory.com</a></li>
            <li><a href="https://actuallyhistory.com" target="_blank">MathPlace.com</a></li>
        </ul>
        <a class="unsubscribe" onclick="unsubscribe()">Unsubscribe</a>
    </div>

    <script>
        function unsubscribe()
        {
            swal("Are you sure you want to Unsubscribe?", {buttons: {cancel: "Cancel", unsubscribe: { text: "Unsubscribe", value: "login" }},}).then((value) => {
                if (value == 'login') {
                    window.open('signup.php', '_self');
                }
            });

            fetch(`gamepass/api/unsubscribe.php`);
            window.load("gamepass.php?unsubscribe=1")
        }   
    </script>
</body>


<?php include "assets/includes/footer.php" ?>
<script src="assets/scripts/main.js"></script>

</html>