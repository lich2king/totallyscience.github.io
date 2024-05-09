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
    <div style="height: 35vh"></div>
    <?php include "assets/includes/footer.php" ?>
    
    <script>
        
		// Function to fetch the HTML content of the page
async function fetchPage(url) {
    try {
        const response = await fetch(url);
        return await response.text();
    } catch (error) {
        console.error("Failed to fetch page: ", error);
    }
}

// Function to extract URLs containing 'roblox'
function extractRobloxLinks(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = Array.from(doc.querySelectorAll('a')).map(link => link.href);
    const robloxLinks = links.filter(link => link.includes('roblox'));
    return robloxLinks;
}

// Main function to run the crawler
async function crawlPage(url) {
    const html = await fetchPage(url);
    if (html) {
        const robloxLinks = extractRobloxLinks(html);
        console.log("Found Roblox links: ", robloxLinks);
    }
}

// URL to crawl
const targetUrl = "https://geometryspot.com/roblox/";

// Start crawling
crawlPage(targetUrl);
		
    </script>
</body>

</html>
