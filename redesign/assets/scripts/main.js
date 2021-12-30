// henrylang's bootleg jquery
const $ = (id) => {
    return document.getElementById(id)
}

const $c = (className) => {
    return document.getElementsByClassName(className)
}

const $qsa = (query) => {
    return document.querySelectorAll(query)
}

const $n = (name) => {
    return document.getElementsByName(name)
}

const mk = (type) => {
    return document.createElement(type)
}

const mkHtml = (code) => { // Unsafe, only use with trusted input.
    document.body.innerHTML += code
}

window.addEventListener(
    'keydown',
    function (e) {
        if (e.key == '`') {
            window.open(
                'https://classroom.google.com/u/0/h',
                '_blank',
                'fullscreen=yes resizable=yes'
            )
        }
    },
    false
)

mkHtml(`
        <svg id="scrollb" onclick='window.scrollTo({top: 0, behavior: "smooth"});' xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="black" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        </svg>`)
const scrollButton = $('scrollb')

if (scrollButton) {
    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollButton.style.display = 'block'
        } else {
            scrollButton.style.display = 'none'
        }
    })
}
