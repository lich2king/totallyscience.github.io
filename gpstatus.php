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
        <h1>Your membership will automatically <span id="renewSpan">renew</span> on <span style="color: var(--accent-color)" id="dateSpan"></span></h1>
        <p id="renew" style="display:none;">Would you like it to automatically <span style="color: var(--accent-color); cursor: pointer;" onclick="renew()">renew</span>?</p>
        <br>
        <p>Enjoy your list of Private Links:</p>
        <ul>
            <li><a href="https://actuallyhistory.com" target="_blank">ActuallyHistory.com</a></li>
            <li><a href="https://actuallyhistory.com" target="_blank">MathPlace.com</a></li>
            <li><a href="https://actuallyhistory.com" target="_blank">FunnyScience.org</a></li>
            <li><a href="https://actuallyhistory.com" target="_blank">ActuallyHistory.com</a></li>
            <li><a href="https://actuallyhistory.com" target="_blank">MathPlace.com</a></li>
        </ul>
        <a class="unsubscribe" onclick="unsubscribe()" id="unsubscribe">Unsubscribe</a>
    </div>

    <script>
        function unsubscribe()
        {
            swal("Are you sure you want to Unsubscribe?", {buttons: {cancel: "Cancel", unsubscribe: { text: "Unsubscribe", value: "unsubscribe" }},}).then((value) => {
                if (value == 'unsubscribe') {
                    fetch(`gamepass/api/unsubscribe.php`).then((response) => response.text()).then((res) => {
                        window.open("gpstatus.php", "_self");
                    });   
                }
            });
        }   

        fetch(`gamepass/misc/lastpay.php`).then((response) => response.text()).then((res) => {
            console.log(res);
            document.getElementById("dateSpan").innerHTML = res;
        });

        fetch(`gamepass/misc/renewtrue.php`).then((response) => response.text()).then((res) => {
            if(res == '0')
            {
                document.getElementById("renewSpan").innerHTML = 'end';
                document.getElementById("unsubscribe").setAttribute('style', 'display:none;');
                document.getElementById("renew").setAttribute('style', 'display:;');
            }
        });

        function renew()
        {
            swal("Are you sure you want to Renew your subscription?", {buttons: {cancel: "Cancel", renew: { text: "Renew", value: "renew" }},}).then((value) => {
                if (value == 'renew') {
                    fetch(`gamepass/api/renew.php`).then((response) => response.text()).then((res) => {
                        window.open("gpstatus.php", "_self");
                    });                    
                }
            });
        }  

    </script>
</body>


<?php include "assets/includes/footer.php" ?>
<script src="assets/scripts/main.js"></script>

</html>