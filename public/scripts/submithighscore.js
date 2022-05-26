let select = document.getElementById('gamesSelect');

fetch(`/gamesjson`).then((response) => response.json()).then((retrievedGames) => {
    for (game in retrievedGames) {
        select.innerHTML += `<option value="${game}">${game}</option>`;
    }
});


function handleFiles() {
    let upload = document.getElementById('fileUpload');

    if (upload.files && upload.files[0]) {
        const file = upload.files[0]
        const fileType = file['type'];
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/jpg'];

        if (!validImageTypes.includes(fileType)) {
            alert('invalid image');
            document.querySelector('input[type="file"]').value = null;
            imageFile = '';
        } else if (file.size > 1000000) {
            alert('image must be under 1mb');
            document.querySelector('input[type="file"]').value = null;
            imageFile = '';
        } else {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                imageFile = reader.result
            };
            reader.onerror = function(error) {
                console.log('Error: ', error);
            };
        }
    }
}

function SubmitHighscore() {
    //todo
}