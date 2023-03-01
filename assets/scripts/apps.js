// READY

document.getElementById('appsnav').classList.add('selected');

fetch(`assets/apps.json?v12`)
    .then((response) => response.json())
    .then((apps) => {
        const appContainer = document.getElementById('apps');

        for (const [name, data] of Object.entries(apps)) {
            const appDiv = `
            <div onclick="window.open('app?app=${name}', '_self')" class="card game">
                <img src="${data.image}" style="background-color: #ffffff;">
                <h1>${name}</h1>
                <button class="launch">Launch</button>
            </div>
        `;

            appContainer.innerHTML += appDiv;
        }
    });