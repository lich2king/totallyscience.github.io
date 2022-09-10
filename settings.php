<!-- // READY -->

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <link rel='stylesheet' href='assets/styles/settings.css'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div id="settingoptions">
        <p>School Website</p>
        <input type="text" id="website" placeholder="Google.com">
    
        <p>Disguise Tab</p>
        <select name="disguise" id="disguise">
            <option value="none">None</option>
            <option value="gc">Google Classroom</option>
            <option value="gd">Google Docs</option>
            <option value="g">Google</option>
            <option value="canvas">Canvas</option>
            <option value="calc">Calculator</option>
            <option value="wiki">Wikipedia</option>
        </select>
        
        <br>
        <button class="button" id="save-button" onclick="submit()">Save</button>
    </div>

    <div class="adsrc" style="text-align:center; margin-bottom:50px;">
            <script async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3486863589051210"
                crossorigin="anonymous"></script>
            <!-- Horizontal Ad -->
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3486863589051210"
                data-ad-slot="5628466741" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>

    <?php include "assets/includes/footer.php" ?>

    <script src="assets/scripts/settings.js?v2"></script>
</body>

</html>