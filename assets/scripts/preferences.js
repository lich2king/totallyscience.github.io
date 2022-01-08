const websiteInput = $('website')
const themeInput = $('theme')
const saveBtn = $('save-button')

websiteInput.value = localStorage.getItem('website')
themeInput.value = localStorage.getItem('theme')

$('survey').addEventListener('submit', (e) => {
    e.preventDefault();

    let websiteEntered = websiteInput.value
    const themeEntered = themeInput.value

    localStorage.setItem("website", websiteEntered)
    localStorage.setItem("theme", themeEntered)

    saveBtn.innerHTML = "Saved."
    setTimeout(() => {
        saveBtn.innerHTML = "Save"
    }, 500)
})
