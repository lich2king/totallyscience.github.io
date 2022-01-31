const websiteInput = $('website')
const themeInput = $('theme')
const saveBtn = $('save-button')
const disguiseInput = $('disguise')

var getUrl = window.location;
var baseUrl = getUrl.host;
if (baseUrl.includes("github")) {
    baseUrl = 'totallyscience.co'
}

websiteInput.value = localStorage.getItem('website')
themeInput.value = localStorage.getItem('theme')
disguiseInput.value = localStorage.getItem('disguise')

$('survey').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("here")
    fetch(`https://${baseUrl}/assets/php/cookiedata.php?cookiename=logintoken`).then((response) => response.text()).then((res) => {
        res = JSON.parse(res)
        console.log(res["isLoggedIn"])
        let loggedIn = false
        console.log(res)
        if (res != null) {
            console.log("into the void")
            console.log(res["isLoggedIn"])
            loggedIn = res["isLoggedIn"]
            console.log("outta the void")
        }
        console.log(loggedIn)
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