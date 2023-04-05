<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div style="display: flex;">
        <div style="margin-top: 55px; overflow: hidden; height: 90vh; width: 100vw;">
            <iframe class="iframeloader" id="app_frame" style="border: none; position: relative; z-index: 2; overflow: hidden;" width=100% height=100% src=""></iframe>
        </div>
    </div>

    <p style="text-align: center; color: whitesmoke; font-size: 15pt;">powered by <a target="_blank" href="https://github.com/titaniumnetwork-dev/Ultraviolet">Ultraviolet,</a> a Titanium Network proxy</p>

    <script src="assets/scripts/main.js?v43"></script>
    <script>
        document.getElementById("appsnav").classList.add("selected");

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const appName = urlParams.get('app');

        document.getElementsByTagName('title')[0].innerHTML = `Totally Science - ${appName} Unblocked`;

        window.addEventListener('load', async () => {
            document.getElementsByTagName('body')[0].style = 'overflow: hidden';

            let res = await fetch(`./assets/apps.json?date=${new Date().getTime()}`);
            let apps = await res.json();
            
            const appData = apps[appName];
            const appFrame = document.getElementById('app_frame');

            if (appData == null) window.location.href = '../apps.php';

            if (appData.type == 'proxy') appFrame.src = 'https://a.' + 'megamathstuff.com' + '#' + btoa(appData.iframe_url);
            else appFrame.src = appData.iframe_url;
            
            if (err) console.log(`cannot fetch ./assets/apps.json?date=${new Date().getTime()}`);
        });
    </script>
</body>

</html>