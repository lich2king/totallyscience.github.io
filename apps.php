<!DOCTYPE html>
<html lang="en">

<head>
    <title>Proxy - Definitely Science - Free Online Unblocked Games</title>
    <?php include "assets/includes/head.php" ?>



    <style>
    .tn_banner {
        text-align: center;
        font-size: 15pt;
        position: relative;
        left: 15%;
        width: 70%;
        display: block;
        right: 15%;
        top: 80px;
    }

    #apps {
        margin: auto;
        margin-top: 140px;
    }

    body,
    html {
        width: 100%;
        height: 100%;
        padding: 0px;
        margin: 0px;
        border: none;
        font-family: 'Rubik', sans-serif;
        overflow-x: hidden;
    }

    * {
        box-sizing: border-box;
    }

    div.card {
        width: 300px;
        height: 100px;
        margin-bottom: 10px;
        border-radius: 5px;
        background-color: var(--dark-accent);
        position: relative;
        padding: 20px;
        transition: 0.2s all;
    }

    div.card>h1 {
        font-family: Rubik, sans-serif;
        font-size: 20px;
        margin: 0px;
        margin-left: 30px;
        margin-bottom: 5px;
        text-align: left;
        color: var(--light-color);
    }

    div.card>h2 {
        font-family: Rubik, sans-serif;
        font-size: 16px;
        margin: 10px;
        padding-left: 50px;
        text-align: right;
        color: var(--light-color);
    }

    button.launch {
        width: 150px;
        height: 35px;
        cursor: pointer;
        border-radius: 5px;
        transition: 0.2s all;
        border: none;
        margin: 0px;
        padding: 0px;
        margin-top: 10px;
        color: var(--light-color);
        font-family: Rubik, sans-serif;
        font-size: 18px;
        background: var(--accent-color);
        float: right;
    }

    div.card.game {
        height: 96px;
        padding: 10px;
        position: relative;
        padding-left: 85px;
        cursor: default;
    }

    div.card.game>img {
        position: absolute;
        top: 0px;
        left: 0px;
        transition: 0.2s all;
        transform: translate(-20px, -20px);
        padding: 10px;
        border-radius: 15px;
        border: 5px solid var(--dark-accent);
        background: var(--light-color);
        width: 100px;
        height: 100px;
    }

    div.card>h1 {
        margin-left: 0px;
    }

    div.card.game:hover {
        transform: scale(1.05);
    }

    div.card.game>button:hover {
        transform: scale(1.05);
    }

    div.card.game>img:hover {
        transform: translate(-20px, -20px) scale(1.05);
    }

    * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
        -khtml-user-drag: none;
        -moz-user-drag: none;
        -o-user-drag: none;
        user-drag: none;
    }

    div#apps {
        max-width: 1100px;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        grid-template-columns: auto auto auto;
    }

    div.card.game {
        margin-bottom: 60px;
    }

    @media (max-width: 1200px) {
        div#apps {
            max-width: 800px;
            grid-template-columns: auto auto;
        }
    }

    @media (max-width: 900px) {
        div#apps {
            max-width: 400px;
            grid-template-columns: auto;
        }
    }
    </style>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>

     <!--<a class="tn_banner" target="_blank" href="https://tnvpn.com/">Click here to check out Titanium Network's VPN and
        browse the internet without censorship.</a>-->
	<a class="tn_banner" target="_blank" href="https://discord.com/invite/6kTskTSTFM">Join us on Definitely Science Discord server.</a>

    <div id="apps"></div>
	
	
	<div id="disqus_thread" style="margin-left: 100px; margin-right: 100px;"></div>
	<script>
		/**
		*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
		*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
		/*
		var disqus_config = function () {
		this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
		this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
		*/
		(function() { // DON'T EDIT BELOW THIS LINE
		var d = document, s = d.createElement('script');
		s.src = 'https://definitely-science.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
		})();
	</script>

	<script id="dsq-count-scr" src="//definitely-science.disqus.com/count.js" async></script>
	

    <?php include "assets/includes/footer.php" ?>

    <script>
        document.getElementById('appsnav').classList.add('selected');

        window.addEventListener('load', async () => {
            let response = await fetcher(`/auth/check`);
            if (response.status == 200) {
                // display points count in navbar
                let json = await response.json();
                setPointsDisplay(json.points || 0, json.username || "");
            }

            const appContainer = document.getElementById('apps');

            let appsRes = await fetcher(`/apps`);
            let apps = await appsRes.json();

            for (let app in apps) {
                const appDiv = `
                        <div onclick="window.open('app.php?app=${apps[app].name}', '_self')" class="card game">
                            <img src="${apps[app].image}" style="background-color: #ffffff;">
                            <h1>${apps[app].name}</h1>
                            <button class="launch">Launch</button>
                        </div>
                    `;

                appContainer.innerHTML += appDiv;
            }
        });
    </script>
</body>

</html>