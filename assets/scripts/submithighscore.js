let imageFile = '';
let username = '';
let uid = '';

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {

            const file = this.files[0]
            const fileType = file['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];
            if (!validImageTypes.includes(fileType)) {
                document.getElementById('errorText').innerText = "*You can only upload an image"
                document.querySelector('input[type="file"]').value = null;
                imageFile = "";
            } else if (file.size > 1000000) {
                document.getElementById('errorText').innerText = "*The file must be smaller than 10mb"
                document.querySelector('input[type="file"]').value = null;
                imageFile = "";
            } else {
                document.getElementById('errorText').innerText = ""
                let imageBlob = URL.createObjectURL(file);
                //imageFile = imageBlob;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function() {
                    imageFile = reader.result
                    console.log(imageFile);
                };
                reader.onerror = function(error) {
                    console.log('Error: ', error);
                };

            }

        }
    });
});


async function SubmitHighscore() {
    const gameName = document.getElementById('gamesSelect').value
    const score = document.getElementById('scoreText').value
    document.getElementById('errorText').style.color = "red";

    if (username == '') {
        document.getElementById('errorText').innerHTML = "*You must <a href='./signup'>sign up</a> to submit a highscore"
    } else if (gameName == '') {
        document.getElementById('errorText').innerText = "*You must choose the game"
    } else if (score == '') {
        document.getElementById('errorText').innerText = "*You must state your score"
    } else if (imageFile == '' || document.getElementById("fileUpload").files.length < 1) {
        document.getElementById('errorText').innerText = "*You must upload a screen shot of your score"
    } else if (isNaN(score)) {
        document.getElementById('errorText').innerText = "*The score must be a number"
    } else {
        document.getElementById('errorText').innerText = ""
            /*fetch(`./assets/php/submithighscore.php?username=${username}&game=${gameName}&score=${score}&imageFile=${imageFile}`).then((response) => response.text()).then((res) => {
                if (res.toLowerCase().includes('success')) {
                    document.getElementById('errorText').style.color = "green";
                }
                console.log(res);
                document.getElementById('errorText').innerHTML = res
            });*/

        let data = {
            username,
            gameName,
            score,
            imageFile,
            uid
        }
        data = JSON.stringify(data)

        result = await fetch('./assets/php/submithighscore.php', {
            method: 'POST',
            body: data
        }).then((response) => response.text()).then((res) => {
            if (res.toLowerCase().includes('success')) {
                document.getElementById('errorText').style.color = "green";
            }
            console.log(res);
            document.getElementById('errorText').innerHTML = res;
        });
    }
}

async function GetUser() {
    await fetch(`./assets/php/getCookie.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
        if (res != "null") {
            res = JSON.parse(res);
            username = res["username"]
            uid = res["id"]
        } else {
            username = ""
        }
    });
}


async function GetGames() {
    await fetch(`assets/games.json?${new Date().getTime()}`)
        .then((response) => response.json())
        .then((games) => {
            const gamesSelect = document.getElementById('gamesSelect')
            for (const [name] of Object.entries(games)) {
                const gameOp = document.createElement('option')
                gameOp.value = name
                gameOp.innerHTML = name

                gamesSelect.appendChild(gameOp)
            }
        })
}


GetGames();
GetUser();