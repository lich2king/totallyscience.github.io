<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/purchasepass.css'>

    <!--Ctrl + Alt + F (html in PHP formatting)         Ctrl+Alt+arrow (select multiple lines)-->
</head>

<body id="mainBody">
    <?php include "assets/includes/navbar.php" ?>

    <div class="gamepass-header">
        <h1>GAME <span style="color: var(--accent-color)">PASS</span></h1>
    </div>

    <div class="details-container">
        <h2>Payment Plan</h2>
        <select name="paymentplans" id="plans">
            <option value="monthly">Monthly - Paid each month</option>
            <option value="annual">Annual - One payment for the year</option>
        </select>
        <p id="description">
            $4.99/month membership. Cancel Anytime
        </p>
    </div>


    <div id="payment-container">
        <div class="payment" id="monthpaypal">
            <div id="paypal-button-container-P-22399174D2019973RML4B54Q"></div>
            <script
                src="https://www.paypal.com/sdk/js?client-id=AVd4hxcHkYm85fyGxB5Fg7IcrpZ_l1cxb_QSmrVeStRo90-biqKgpaIIfxtcbmfZd2ejFxV7iVEEc1ix&vault=true&intent=subscription"
                data-sdk-integration-source="button-factory"></script>
            <div id="paypal-button-container-P-22399174D2019973RML4B54Q"></div>
            <script
                src="https://www.paypal.com/sdk/js?client-id=AVd4hxcHkYm85fyGxB5Fg7IcrpZ_l1cxb_QSmrVeStRo90-biqKgpaIIfxtcbmfZd2ejFxV7iVEEc1ix&vault=true&intent=subscription"
                data-sdk-integration-source="button-factory"></script>
            <script>
            paypal.Buttons({
                style: {
                    shape: 'pill',
                    color: 'blue',
                    layout: 'vertical',
                    label: 'paypal'
                },
                createSubscription: function(data, actions) {
                    return actions.subscription.create({
                        /* Creates the subscription */
                        plan_id: 'P-22399174D2019973RML4B54Q'
                    });
                },
                onApprove: function(data, actions) {
                    alert(data
                    .subscriptionID); // You can add optional success message for the subscriber here
                }
            }).render('#paypal-button-container-P-22399174D2019973RML4B54Q'); // Renders the PayPal button
            </script>
        </div>
        <div class="payment" id="annualpaypal">
            
        </div>
    </div>

</body>


<?php include "assets/includes/footer.php" ?>
<script src="assets/scripts/purchasepass.js"></script>
<script src="assets/scripts/main.js"></script>

</html>