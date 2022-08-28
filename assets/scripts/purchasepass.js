// READY
var payplan = document.getElementById("plans");

payplan.addEventListener("change", function() {
    if (payplan.value == "monthly") {
        document.getElementById("description").innerText = "$4.99/month membership. Cancel Anytime";

        document.getElementById("monthpaypal").style.display = '';
        document.getElementById("annualpaypal").style.display = 'none';
    } else if (payplan.value == "annual") {
        document.getElementById("description").innerText = "$47.88 billed once. GamePass for one year";

        document.getElementById("monthpaypal").style.display = 'none';
        document.getElementById("annualpaypal").style.display = '';
    }
});