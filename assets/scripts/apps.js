const appContainer = document.getElementById('apps')

fetch(`./assets/apps.json?${new Date().getTime()}`)
    .then((response) => response.json())
    .then((apps) => {
        for (const [name, data] of Object.entries(apps)) {

            const appDiv = document.createElement('div')
            appDiv.classList = "card game"
            appDiv.addEventListener('click', () => {
                window.location.href = `./app.html?app=${name}`
            })

            const appImage = document.createElement('img')
            appImage.draggable = "false"
            appImage.ondragstart = "return false;"
            appImage.src = data.image

            const appName = document.createElement('h1')
            appName.innerText = name

            const appButton = document.createElement('button')
            appButton.classList = "launch"
            appButton.innerText = "Launch"
            appButton.addEventListener('click', () => {
                window.location.href = `./app.html?app=${name}`
            })

            appDiv.appendChild(appImage)
            appDiv.appendChild(appName)
            appDiv.appendChild(appButton)

            appContainer.appendChild(appDiv)

        }
    })