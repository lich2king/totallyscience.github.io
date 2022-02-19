const appContainer = $('apps')

fetch(`./assets/apps.json?${new Date().getTime()}`)
    .then((response) => response.json())
    .then((apps) => {
        for (const [name, data] of Object.entries(apps)) {

            const appDiv = mk('div')
            appDiv.classList = "card game"
            appDiv.addEventListener('click', () => {
                window.location.href = `./app.html?app=${name}`
            })

            const appImage = mk('img')
            appImage.draggable = "false"
            appImage.ondragstart = "return false;"
            appImage.src = data.image

            const appName = mk('h1')
            appName.innerText = name

            const appButton = mk('button')
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