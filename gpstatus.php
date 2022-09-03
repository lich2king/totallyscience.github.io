<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/gamepass.css?v1'>


    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body id="mainBody">
    <?php include "assets/includes/navbar.php" ?>

    <div class="gamepass-header">
        <h1>GAME <span style="color: var(--accent-color)">PASS</span></h1>
    </div>
    <div class="statusContainer">
        <br>
        <h1>Your membership will automatically renew/end on <span style="color: var(--accent-color)" id="dateSpan"></span></h1>
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
            swal("Are you sure you want to Unsubscribe?", {buttons: {cancel: "Cancel", unsubscribe: { text: "Unsubscribe", value: "unsubscribe" }},}).then((value) => {
                if (value == 'unsubscribe') {
                    fetch(`gamepass/api/unsubscribe.php`);
                    window.open("gamepass.php?unsubscribe=1", "_self");
                }
            });
        }   

        fetch(`gamepass/misc/lastpay.php`).then((response) => response.text()).then((res) => {
            document.getElementById("dateSpan").innerHTML = res;
        });

    </script>
</body>


<?php include "assets/includes/footer.php" ?>
<script src="assets/scripts/main.js"></script>

</html>