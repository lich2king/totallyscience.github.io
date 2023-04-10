<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

	<script src="assets/scripts/uv/uv.bundle.js" type="text/javascript"></script>
	<script src="assets/scripts/uv/uv.config.js" type="text/javascript"></script>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

    <div style="display: flex;">
        <div style="margin-top: 55px; overflow: hidden; height: 90vh; width: 100vw;">
            <iframe class="iframeloader" id="app_frame" style="border: none; position: relative; z-index: 2; overflow: hidden;" width=100% height=100% src=""></iframe>
        </div>
    </div>

    <p style="text-align: center; color: whitesmoke; font-size: 15pt;">powered by <a target="_blank" href="https://github.com/titaniumnetwork-dev/Ultraviolet">Ultraviolet,</a> a Titanium Network proxy</p>

    <script src="assets/scripts/main.js?v45"></script>
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

            try {
                if ('serviceWorker' in navigator) {
                    navigator.serviceWorker.register('uv-sw.js', {
                        scope: __uv$config.prefix
                    }).then(() => {
                        if (appData.type == 'proxy') appFrame.src = (__uv$config.prefix + __uv$config.encodeUrl(appData.iframe_url));
                        else appFrame.src = appData.iframe_url;
                    });
                } else {
                    document.querySelector('.lds-dual-ring').remove();
                    document.querySelector('.info').textContent = 'Your browser appears to be in private browsing mode or is not compatabile. Try swapping or updating your browser.';
                };
            } catch (error) {
                console.log(error);

                appFrame.src = `https://a.megamathstuff.com/index.html#${btoa(appData.iframe_url)}`;
            }
        });
    </script>
</body>

</html>