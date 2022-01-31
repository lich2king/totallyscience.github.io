const websiteInput = $('website')
const themeInput = $('theme')
const saveBtn = $('save-button')
const disguiseInput = $('disguise')

websiteInput.value = localStorage.getItem('website')
themeInput.value = localStorage.getItem('theme')
disguiseInput.value = localStorage.getItem('disguise')

$('survey').addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`https://${baseUrl}/assets/php/cookiedata.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
        res = JSON.parse(res)
        const loggedIn = 'false'
        if (res != null) {
            const loggedIn = res["isLoggedIn"]
        }
        if (loggedIn == "true") {
            let websiteEntered = websiteInput.value
            let themeEntered = themeInput.value
            let disguiseEntered = disguiseInput.value

            localStorage.setItem("website", websiteEntered)
            localStorage.setItem("theme", themeEntered)
            localStorage.setItem("disguise", disguiseEntered)

            saveBtn.innerHTML = "Saved."
            setTimeout(() => {
                saveBtn.innerHTML = "Save"
            }, 500)
        } else {
            document.getElementById('errorText').innerHTML = "You must have an account to save. <a href='profile.html'>Click here</a>"
        }
        console.log(loggedIn)
    });

})