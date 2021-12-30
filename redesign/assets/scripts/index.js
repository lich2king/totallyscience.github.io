let numberOfScans = 1

//console.log(firstHeading.getBoundingClientRect());

function isVisible(element) {
    let elementBox = element.getBoundingClientRect()
    let distanceFromTop = -100

    if (elementBox.top - window.innerHeight < distanceFromTop) {
        return true
    } else {
        return false
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden')
    sectionList.forEach(function (section) {
        if (isVisible(section)) {
            section.classList.remove('hidden')
            section.classList.add('text-fade')
        }
    })

    //console.log(numberOfScans)
    numberOfScans++
}

document.addEventListener('scroll', _.throttle(scanDocument, 250))

// function throttle(fn, wait) {
//     var time = Date.now();
//     return function() {
//       if ((time + wait - Date.now()) < 0) {
//         fn();
//         time = Date.now();
//       }
//     }
//   }


// When the user scrolls down 20px from the top of the document, show the scroll button
var mybutton = document.getElementById('scrollb')

window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = 'block'
    } else {
        mybutton.style.display = 'none'
    }
}

// featured games slideshow
var shouldAutoSwitch = true;
var slideIndex = 1;
switchSlide(slideIndex);
autoSwitch();

function plusSlides(n) {
    shouldAutoSwitch = false;
    switchSlide(slideIndex += n);
}

function autoPlusSlides(n) {
    switchSlide(slideIndex += n);
}

function switchSlide(n) {
    var slides = document.getElementsByClassName("featuredSlide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "";
}

function autoSwitch() {
    if (shouldAutoSwitch) {
        setTimeout(function() {
            if (shouldAutoSwitch) {
                autoPlusSlides(1)
                autoSwitch()
            }
        }, 2500);
    }
}