<!DOCTYPE html>
<html lang="en">

<head>
    <title>Profile - Totally Science - Free Online Unblocked Games</title>
    <?php include "assets/includes/head.php" ?>



    <link rel='stylesheet' href='assets/styles/profile.css?v12'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="accountoptions">
        <div class="accountoption" tooltip="Disabled for maintenence" flow="left">
            <p style="color: rgba(255, 255, 255, 0.5) !important;">Username: <span class="span"
                    id="usernameSpan">loading...</span></p>
            <input type="image" src="assets/images/icons/edit.avif">
        </div>

        <div class="accountoption">
            <p>Email: <span class="span" id="emailSpan">loading...</span></p>
            <input type="image" src="assets/images/icons/edit.avif" onclick="location.assign('/change_email.php')">
        </div>

        <div class="accountoption">
            <p>Password: <span class="span">*********</span></p>
            <input type="image" src="assets/images/icons/edit.avif" onclick="location.assign('/change_password.php')">
        </div>

        <div class="accountoption">
            <a class="logout" onclick="logout();">Logout</a>
        </div>
    </div>

    <div id="games"></div>

    <div id="highscores">
        <h1 class="label">Your Highscores</h1>
        <div class="highcontainer" id="highscorecontainer">
            <p style="display: none" id="noscores">You do not hold any highscores currently.</p>
        </div>
    </div>


    <div id="miniSelectPopup" style="display: none;">
        <div class="popup">
            <div class='topbar'>
                <button style="visibility: hidden;"></button>
                <p>Your Minis</p>
                <button onclick="closeMiniSelectPopup()"><img src='assets/images/icons/close.avif'></button>
            </div>
            <div class='content'>
                <div>
                    <p name="commonLab">Common</p>
                    <div class="minis" name="common">
                        <img name="comwatermellon" src="\assets\minis\JPGs\comwatermellon.jpg" style="display:none;">
                        <img name="comtomato" src="\assets\minis\JPGs\comtomato.jpg" style="display:none;">
                        <img name="comstrawberrymale" src="\assets\minis\JPGs\comstrawberrymale.jpg"
                            style="display:none;">
                        <img name="comstrawberry" src="\assets\minis\JPGs\comstrawberry.jpg" style="display:none;">
                        <img name="comprickle" src="\assets\minis\JPGs\comprickle.jpg" style="display:none;">
                        <img name="compizza" src="\assets\minis\JPGs\compizza.jpg" style="display:none;">
                        <img name="compineapple" src="\assets\minis\JPGs\compineapple.jpg" style="display:none;">
                        <img name="comavocado" src="\assets\minis\JPGs\comavocado.jpg" style="display:none;">
                        <img name="compear" src="\assets\minis\JPGs\compear.jpg" class="selected">
                        <img name="compeach" src="\assets\minis\JPGs\compeach.jpg" style="display:none;">
                        <img name="commilk" src="\assets\minis\JPGs\commilk.jpg" style="display:none;">
                        <img name="comlemon" src="\assets\minis\JPGs\comlemon.jpg" style="display:none;">
                        <img name="comegg" src="\assets\minis\JPGs\comegg.jpg" style="display:none;">
                        <img name="comdragonfruit" src="\assets\minis\JPGs\comdragonfruit.jpg" style="display:none;">
                        <img name="comcarrot" src="\assets\minis\JPGs\comcarrot.jpg" style="display:none;">
                        <img name="combread" src="\assets\minis\JPGs\combread.jpg" style="display:none;">
                        <img name="comberry" src="\assets\minis\JPGs\comberry.jpg" style="display:none;">
                        <img name="comapple" src="\assets\minis\JPGs\comapple.jpg" style="display:none;">
                    </div>
                    <p name="rareLab">Rare</p>
                    <div class="minis" name="rare">
                        <img name="rarestormcloud" src="\assets\minis\JPGs\rarestormcloud.jpg" style="display:none;">
                        <img name="raresoccer" src="\assets\minis\JPGs\raresoccer.jpg" style="display:none;">
                        <img name="rarepopsicle" src="\assets\minis\JPGs\rarepopsicle.jpg" style="display:none;">
                        <img name="raremushroom" src="\assets\minis\JPGs\raremushroom.jpg" style="display:none;">
                        <img name="rareketchup" src="\assets\minis\JPGs\rareketchup.jpg" style="display:none;">
                        <img name="rareheart" src="\assets\minis\JPGs\rareheart.jpg" style="display:none;">
                        <img name="rareflower" src="\assets\minis\JPGs\rareflower.jpg" style="display:none;">
                        <img name="rarefire" src="\assets\minis\JPGs\rarefire.jpg" style="display:none;">
                        <img name="raredonut" src="\assets\minis\JPGs\raredonut.jpg" style="display:none;">
                        <img name="rarecup" src="\assets\minis\JPGs\rarecup.jpg" style="display:none;">
                        <img name="rarecoffee" src="\assets\minis\JPGs\rarecoffee.jpg" style="display:none;">
                        <img name="rarebooze" src="\assets\minis\JPGs\rarebooze.jpg" style="display:none;">
                    </div>
                    <p name="epicLab">Epic</p>
                    <div class="minis" name="epic">
                        <img name="epicworld" src="\assets\minis\JPGs\epicworld.jpg" style="display:none;">
                        <img name="epicpc" src="\assets\minis\JPGs\epicpc.jpg" style="display:none;">
                        <img name="epicmovie" src="\assets\minis\JPGs\epicmovie.jpg" style="display:none;">
                        <img name="epichotdog" src="\assets\minis\JPGs\epichotdog.jpg" style="display:none;">
                        <img name="epicdrink" src="\assets\minis\JPGs\epicdrink.jpg" style="display:none;">
                        <img name="epicdisco" src="\assets\minis\JPGs\epicdisco.jpg" style="display:none;">
                        <img name="epicboombox" src="\assets\minis\JPGs\epicboombox.jpg" style="display:none;">
                        <img name="epicbomb" src="\assets\minis\JPGs\epicbomb.jpg" style="display:none;">
                    </div>
                    <p name="legendaryLab">Legendary</p>
                    <div class="minis" name="legendary">
                        <img name="legdollar" src="\assets\minis\JPGs\legdollar.jpg" style="display:none;">
                        <img name="leglemonade" src="\assets\minis\JPGs\leglemonade.jpg" style="display:none;">
                        <img name="legsuitcase" src="\assets\minis\JPGs\legsuitcase.jpg" style="display:none;">
                        <img name="legsun" src="\assets\minis\JPGs\legsun.jpg" style="display:none;">
                        <img name="legvr" src="\assets\minis\JPGs\legvr.jpg" style="display:none;">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/profile.js?v97"></script>
</body>

</html>