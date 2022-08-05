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
                <p>Upgrade whenever you want <br>Free access to all our base features</p>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center; margin-top:0;">
                    <button class="btn">Join</button>
                </div>
            </div>
        </div>

        <div class="p-view">
            <div class="c-item">
                <h1>PREMIUM</h1>
                <h3>$4.99 / Month <p style="font-weight:lighter; padding:0; margin-top:0;">(or pay 49.99 / Year)</p>
                </h3>
                <p>Unlock exclusive games <br>Access a list of private Totally Science links</p>
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
                <img class="img-label" src="assets/images/icons/lock.png" alt="">
                <h1>MORE GAMES</h1>
                <p>Unlock many games that are exclusive to premium members</p>
            </div>

            <div class="reason">
                <img class="img-label" src="assets/images/icons/eye.png" alt="">
                <h1>PRIVATE LINKS</h1>
                <p>Access a list of private links only premium members can use so if Totally Science gets blocked you
                    can always use a new link</p>
            </div>

            <div class="reason">
                <img class="img-label" src="assets/images/icons/block-ads.png" alt="">
                <h1>CAPTCHA-FREE</h1>
                <p>Your experience will no longer be interrupted by captchas</p>
            </div>
        </div>
    </div>

    <div class="whygoprem-container">
        <h1>Frequently Asked Questions</h1>
        <div class="question-container">
            <div class="question">
                <p>What’s included with a Premium Game Pass?</p>
                <input type="image" id="image" src="/assets/images/icons/down_arrow.png" onclick="dropDownFaq('included')">
            </div>
            <div class="answer" style="display: none" id="included">
                <div>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
            <div class="question">
                <p>Why would I want access to Private Links?</p>
                <input type="image" id="image" src="/assets/images/icons/down_arrow.png" onclick="dropDownFaq('private')">
            </div>
            <div class="answer" style="display: none" id="private">
                <div>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
            <div class="question">
                <p>How do I cancel my Premium Game Pass Subscription?</p>
                <input type="image" id="image" src="/assets/images/icons/down_arrow.png" onclick="dropDownFaq('cancel')">
            </div>
            <div class="answer" style="display: none" id="cancel">
                <div>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
            <div class="question">
                <p>Could I pay for the full year and not monthly?</p>
                <input type="image" id="image" src="/assets/images/icons/down_arrow.png" onclick="dropDownFaq('year')">
            </div>
            <div class="answer" style="display: none" id="year">
                <div>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="product-container">

        <div class="p-view">
            <div class="c-item">
                <h1>FREE</h1>
                <h3>$0 / Month</h3>
                <p>Upgrade whenever you want <br>Free access to all our base features</p>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center; margin-top:0;">
                    <button class="btn">Join</button>
                </div>
            </div>
        </div>

        <div class="p-view">
            <div class="c-item">
                <h1>PREMIUM</h1>
                <h3>$4.99 / Month <p style="font-weight:lighter; padding:0; margin-top:0;">(or pay 49.99 / Year)</p>
                </h3>
                <p>Unlock exclusive games <br>Access a list of private Totally Science links</p>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button class="btn">Subscribe</button>
                </div>
            </div>
        </div>

    </div>

</body>


<?php include "assets/includes/footer.php" ?>
<script src="assets/scripts/gamepass.js"></script>
<script src="assets/scripts/main.js"></script>

</html>