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
        <h1>GAME <span style="color: var(--accent-color)">PASS</span></h1>
    </div>

    <div class="product-container">
        <div class="p-view">
            <div class="c-item">
                <h1>Monthly</h1>
                <h3>$4.99 <span>/ month</span>
                    <p style="font-weight:lighter; padding:0; margin-top:0;">Paid each month</p>
                </h3>
                <form action="gamepass/api/create-checkout-session.php" method="POST" id="monthlyForm">
                    <!-- Add a hidden field with the lookup_key of your Price -->
                    <input type="hidden" name="lookup_key" value="gpmonthly" />
                </form>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button type="" onclick="subscribe('monthlyForm')" class="btn">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="p-view">
            <div class="c-item">
                <h1>Annual</h1>
                <h3>$3.99 <span>/ month</span>
                    <p style="font-weight:lighter; padding:0; margin-top:0;">Billed yearly as $47.88</p>
                </h3>
                <form action="gamepass/api/create-checkout-session.php" method="POST" id="annualForm">
                    <!-- Add a hidden field with the lookup_key of your Price -->
                    <input type="hidden" name="lookup_key" value="gpannual" />
                </form>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button type="" onclick="subscribe('annualForm')" class="btn">Subscribe</button>
                </div>
                <button id="pin"><img src="assets/images/icons/Discount.png"></button>
            </div>
        </div>

    </div>

    <div class="whygoprem-container">
        <h1>Why Get Game Pass?</h1>
        <div class="why-rows">
            <div class="reason">
                <img class="img-label" src="assets/images/icons/lock.png" alt="">
                <h1>MORE GAMES</h1>
                <p>Unlock many games that are exclusive to premium members</p>
            </div>

            <div class="reason">
                <img class="img-label" src="assets/images/icons/eye.png" alt="">
                <h1>PRIVATE LINKS</h1>
                <p>Access a list of private links only premium members can use</p>
            </div>

            <div class="reason">
                <img class="img-label" src="assets/images/icons/block-ads.png" alt="">
                <h1>AD-FREE</h1>
                <p>Your experience will no longer be interrupted by ads</p>
            </div>
        </div>
    </div>

    <div class="whygoprem-container" style="padding-bottom: 5%">
        <h1>Frequently Asked Questions</h1>
        <div class="question-container">
            <div class="question">
                <p>What’s included with Game Pass?</p>
                <input type="image" id="image" src="/assets/images/icons/down_arrow.png"
                    onclick="dropDownFaq('included')">
            </div>
            <div class="answer" style="display: none" id="included">
                <div>
                    <ul>
                        <li>You have access to games locked for free pass users</li>
                        <br>
                        <li>A list of private links only accessible to users with game pass</li>
                        <br>
                        <li>You will not have the annoyance of ads</li>
                        <br>
                        <li>You have the ability to save progress in games while playing them from different links or on
                            different computers</li>
                    </ul>
                </div>
            </div>
            <div class="question">
                <p>Why would I want access to Private Links?</p>
                <input type="image" id="image" src="/assets/images/icons/down_arrow.png"
                    onclick="dropDownFaq('private')">
            </div>
            <div class="answer" style="display: none" id="private">
                <div>
                    <ul>
                        <li>Private links are only accessible to premium users, so it is much more unlikely for a
                            private link to get caught and blocked in your school</li>
                    </ul>
                </div>
            </div>
            <div class="question">
                <p>How do I cancel my Premium Game Pass Subscription?</p>
                <input type="image" id="image" src="/assets/images/icons/down_arrow.png"
                    onclick="dropDownFaq('cancel')">
            </div>
            <div class="answer" style="display: none" id="cancel">
                <div>
                    <ul>
                        <li>You can cancel your subscription on the <a href="profile.php">account page</a></li>
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
                        <li>Yes, you can choose to pay annually instead of monthly</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="product-container">
        <div class="p-view">
            <div class="c-item">
                <h1>Monthly</h1>
                <h3>$4.99 <span>/ month</span>
                    <p style="font-weight:lighter; padding:0; margin-top:0;">Paid each month</p>
                </h3>
                <form action="gamepass/api/create-checkout-session.php" method="POST" id="monthlyForm">
                    <!-- Add a hidden field with the lookup_key of your Price -->
                    <input type="hidden" name="lookup_key" value="gpmonthly" />
                </form>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button type="" onclick="subscribe('monthlyForm')" class="btn">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="p-view">
            <div class="c-item">
                <h1>Annual</h1>
                <h3>$3.99 <span>/ month</span>
                    <p style="font-weight:lighter; padding:0; margin-top:0;">Billed yearly as $47.88</p>
                </h3>
                <form action="gamepass/api/create-checkout-session.php" method="POST" id="annualForm">
                    <!-- Add a hidden field with the lookup_key of your Price -->
                    <input type="hidden" name="lookup_key" value="gpannual" />
                </form>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button type="" onclick="subscribe('annualForm')" class="btn">Subscribe</button>
                </div>
                <button id="pin"><img src="assets/images/icons/Discount.png"></button>
            </div>
        </div>

    </div>

</body>


<?php include "assets/includes/footer.php" ?>
<script src="assets/scripts/gamepass.js?v4"></script>
<script src="assets/scripts/main.js"></script>

</html>