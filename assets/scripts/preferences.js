const websiteInput = $('website')
const themeInput = $('theme')
const saveBtn = $('save-button')
const disguiseInput = $('disguise')

websiteInput.value = localStorage.getItem('website')
themeInput.value = localStorage.getItem('theme')
disguiseInput.value = localStorage.getItem('disguise')

$('survey').addEventListener('submit', (e) => {
    e.preventDefault();

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
})