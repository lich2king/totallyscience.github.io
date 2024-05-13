<!DOCTYPE html>
<html lang="en">

<head>
    <title>Proxy - Definitely Science</title>
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
	<a class="tn_banner" target="_blank" href="https://discord.com/invite/6kTskTSTFM">Join us on Definitely Science Discord server.</a><br>
	<a class="tn_banner" target="_blank" href="https://random-proxy.com">More apps on alternative domains: Random-Proxy.com</a><br>
	<a class="tn_banner" target="_blank" href="https://classroomcommunity.com/">Classroom.Community</a><br>
	

    <div id="apps"></div>
	
	<!--<div style="width: 100vw; display: flex; align-items: center; justify-content: center; color: white;">
    <h1>Looking for links</h1>
</div>-->
<div id="results" style="color: white; margin: 100px;"></div>

	
	
	

    <?php include "assets/includes/footer.php" ?>

    <script>
        document.getElementById('appsnav').classList.add('selected');

        window.addEventListener('load', async () => {
            // let response = await fetcher(`/auth/check`);
            // if (response.status == 200) {
                // // display points count in navbar
                // let json = await response.json();
                // setPointsDisplay(json.points || 0, json.username || "");
            // }

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
	
	 <script>
	
	function getBaseUrl() {
    // Returns the base URL in the format 'http://api.example.com'
    //return `${window.location.protocol}//${window.location.hostname}`;
	return 'https://definitelyscience.com';
}
	
function crawl() {
    const url = 'https://geometryspot.com/roblox/';
	let serverCallURL = `${getBaseUrl()}/api2/crawl`;
	console.log("Crawl: " + serverCallURL);
     fetch(serverCallURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url })
    })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<h2>Roblox Links Found:</h2>';
        data.links.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link; // Set the URL as the href attribute of the anchor tag
            anchor.textContent = link; // Use the link itself as the text
            anchor.target = '_blank'; // Optional: Open links in a new tab/window
            const div = document.createElement('div'); // You can still wrap the anchor in a div if needed
            div.appendChild(anchor);
            resultsDiv.appendChild(div);
        });
    })
    .catch(error => console.error('Error:', error));
}

window.addEventListener('load', function() {
    crawl(); // This will call crawl() when the page is fully loaded.
});

</script>

</body>

</html>