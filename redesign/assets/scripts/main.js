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

//Code for scroll button
//Get the button
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
