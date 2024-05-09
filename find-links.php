<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "assets/includes/head.php" ?>

    <title>Find Links - Definitely Science</title>
	<link rel="canonical" href="/" />

    <link rel='stylesheet' href='./assets/styles/account.css?v1'>
</head>

<body>
    <?php include "assets/includes/navbar.php" ?>


    <div style="height: 20vh"></div>
    <div style="width: 100vw; display: flex; align-items: center; justify-content: center;">
        <h1>Looking for links</h1>
    </div>
	<div id="results"></div>
	
    <div style="height: 35vh"></div>
    <?php include "assets/includes/footer.php" ?>
    
    <script>
function crawl() {
    const url = 'https://geometryspot.com/roblox/';
    fetch('http://localhost:3000/crawl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url })
    })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<h2>Links Found:</h2>';
        data.links.forEach(link => {
            const elem = document.createElement('div');
            elem.textContent = link;
            resultsDiv.appendChild(elem);
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
