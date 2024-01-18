<!DOCTYPE html>
<html lang="en">

<head>
    <title>Settings - Totally Science - Free Online Unblocked Games</title>
    <?php include "assets/includes/head.php" ?>


    <style>
    #settingoptions {
        margin-top: 120px;
        width: 100vw;
        text-align: center;
        margin-bottom: 20vh;
    }

    #settingoptions p {
        color: var(--light-color);
        font-size: 1.25vw;
        font-family: 'Rubik';
    }

    #save-button {
        padding: 15px;
        font-size: 1.25vw;
    }
    </style>
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

    <?php include "assets/includes/footer.php" ?>

    <script>
        const websiteInput = document.getElementById('website');
        const saveBtn = document.getElementById('save-button');
        const disguiseInput = document.getElementById('disguise');

        websiteInput.value = localStorage.getItem('website');
        disguiseInput.value = localStorage.getItem('disguise');

        function submit() {
            let websiteEntered = websiteInput.value;
            let disguiseEntered = disguiseInput.value;

            if (!(websiteEntered.includes('http'))) websiteEntered = `https://${websiteEntered}`;

            localStorage.setItem("website", websiteEntered);
            localStorage.setItem("disguise", disguiseEntered);

            saveBtn.innerHTML = "Saved.";

            setTimeout(() => {
                saveBtn.innerHTML = "Save";
            }, 500);
        }
        
        window.addEventListener('load', async () => {
            let response = await fetcher(`/auth/check`);

            if (response.status == 200) {
                // display points count in navbar
                let json = await response.json();
                setPointsDisplay(json.points || 0, json.username || "");
            }
        });
    </script>
</body>

</html>