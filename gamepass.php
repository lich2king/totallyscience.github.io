<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/gamepass.css'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body id="mainBody">
    <?php include "assets/includes/navbar.php" ?>

    <div class="gamepass-header">
        <h1>GAME PASS</h1>
    </div>

    <div class="product-container">

        <div class="p-view">
            <div class="c-item">
                <h1>FREE</h1>
                <h3>$0 / Month</h3>
                <p>Upgrade whenever you want Free access to all our base features</p>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center; margin-top:0;">
                    <button class="btn">Join</button>
                </div>
            </div>
        </div>

        <div class="p-view">
        <div class="c-item">
                <h1>PREMIUM</h1>
                <h3>$4.99 / Month <p style="font-weight:lighter; padding:0; margin-top:0;">(or pay 49.99 / Year)</p> </h3>
                <p>Upgrade whenever you want Free access to all our base features</p>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button class="btn">Subscribe</button>
                </div>
            </div>
        </div>

    </div>

    <div class="whygoprem-container">
        <h1>Why Go Premium?</h1>
        <div class="why-rows">
            <div class="reason">
                <img class="img-label" src="assets/images/icons/lock_2.png" alt="">
            </div>

            <div class="reason">

            </div>

            <div class="reason">

            </div>
        </div>

    </div>

</body>

</html>