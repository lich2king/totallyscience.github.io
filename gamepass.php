<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/gamepass.css'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body id="mainBody">
    <?php include "assets/includes/navbar.php" ?>

    <!-- <div class="gamepass-header">
        <h1>GAME <span style="color: var(--accent-color)">PASS</span></h1>
        <h1>BACK TO SCHOOL DISCOUNT <span style="color: var(--accent-color)">40% OFF</span></h1>
    </div> -->
    <svg id="backgroundsvg" viewBox="0 0 825 718" fill="none" xmlns="http://www.w3.org/2000/svg" class="dweb"><path fill-rule="evenodd" clip-rule="evenodd" d="M460.508-669.213c83.164-65.049 218-65.049 301.163 0 83.164 65.048 83.164 170.512 0 235.561L611.738-316.378c54.283.128 108.516 16.39 149.933 48.785 83.164 65.049 83.164 170.513 0 235.561L626.549 73.658c49.238 2.786 97.475 18.902 135.122 48.349 83.164 65.049 83.164 170.513 0 235.561l-398.134 311.41c-83.164 65.049-218 65.049-301.164 0-83.163-65.048-83.163-170.512 0-235.561l135.123-105.689c-49.238-2.786-97.475-18.903-135.123-48.35-83.163-65.048-83.163-170.512 0-235.56L212.307-73.458c-54.284-.128-108.516-16.39-149.934-48.785-83.163-65.049-83.163-170.513 0-235.562l398.135-311.409z" fill="url(#paint0_linear_1584_43528)"></path><defs><linearGradient id="paint0_linear_1584_43528" x1="412.022" y1="-718" x2="412.022" y2="717.765" gradientUnits="userSpaceOnUse"><stop stop-color="#f75dfc"></stop><stop offset="1" stop-color="#f75dfc" stop-opacity="0"></stop></linearGradient></defs></svg>

    <div id="toptext">
        <h1 class="title">GamePass</h1>
        <h1>Get 3 extra months free</h1>
        <p>Limited one-time offer: Upgrade to an annual Game Pass subscription and get 3 extra months free!</p>
    </div>
    
    

    <div class="product-container">
        <div class="p-view">
            <div class="c-item">
                <h1>Pay annually</h1>
                <h3><span style="text-decoration: line-through">$4.99</span> $2.99 <span>/ month</span>
                    <p style="font-weight:lighter; padding:0; margin-top:0;">Get 3 extra months free.</p>
                </h3>
                <form action="assets/gamepass/api/create-checkout-session.php" method="POST" id="monthlyForm">
                    <!-- Add a hidden field with the lookup_key of your Price -->
                    <input type="hidden" name="lookup_key" value="price_1LfXmcBRp1VXv1Xh29txlJJR" />
                </form>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button type="" onclick="subscribe('monthlyForm')" class="btn">Get Game Pass</button>
                </div>
            </div>
            <button id="pin"><img src="assets/images/icons/Discount.png"></button>
        </div>

        <div class="p-view">
            <div class="c-item">
                <h1>Pay monthly</h1>
                <h3><span style="text-decoration: line-through">$3.99</span> $1.99 <span>/ month</span>
                    <p style="font-weight:lighter; padding:0; margin-top:0;">Billed monthly. Cancel anytime.</p>
                </h3>
                <form action="assets/gamepass/api/create-checkout-session.php" method="POST" id="annualForm">
                    <!-- Add a hidden field with the lookup_key of your Price -->
                    <input type="hidden" name="lookup_key" value="price_1LfXp3BRp1VXv1XhdE3glCIW" />
                </form>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button type="" onclick="subscribe('annualForm')" class="btn">Get Game Pass</button>
                </div>
                
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
                <h3><span style="text-decoration: line-through">$4.99</span> $2.99 <span>/ month</span>
                    <p style="font-weight:lighter; padding:0; margin-top:0;">Paid each month</p>
                </h3>
                <form action="assets/gamepass/api/create-checkout-session.php" method="POST" id="monthlyForm">
                    <!-- Add a hidden field with the lookup_key of your Price -->
                    <input type="hidden" name="lookup_key" value="price_1LfXmcBRp1VXv1Xh29txlJJR" />
                </form>
                <div style="display: flex; flex: 1; align-content: center; justify-content:center;margin-top:0;">
                    <button type="" onclick="subscribe('monthlyForm')" class="btn">Subscribe</button>
                </div>
            </div>
        </div>

        <div class="p-view">
            <div class="c-item">
                <h1>Annual</h1>
                <h3><span style="text-decoration: line-through">$3.99</span> $1.99 <span>/ month</span>
                    <p style="font-weight:lighter; padding:0; margin-top:0;">Billed yearly as $28.69</p>
                </h3>
                <form action="assets/gamepass/api/create-checkout-session.php" method="POST" id="annualForm">
                    <!-- Add a hidden field with the lookup_key of your Price -->
                    <input type="hidden" name="lookup_key" value="price_1LfXp3BRp1VXv1XhdE3glCIW" />
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
<script src="assets/scripts/gamepass.js?v8"></script>

</html>