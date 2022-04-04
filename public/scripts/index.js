// DONE

//fancy scrolling code
let numberOfScans = 1

const isVisible = (element) => {
    const elementBox = element.getBoundingClientRect();
    const distanceFromTop = -100;

    if (elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    }
    return false;
}

const scanDocument = () => {
    const sectionList = document.querySelectorAll('.hidden');

    sectionList.forEach((section) => {
        if (isVisible(section)) {
            section.classList.remove('hidden');
            section.classList.add('text-fade');
        }
    })

    numberOfScans += 1;
}

document.addEventListener('scroll', _.throttle(scanDocument, 250));


// featured games slides code
let shouldAutoSwitch = true;
let slideIndex = 1;

const switchSlide = (n) => {
    const slides = document.getElementsByClassName('featuredSlide');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = '';
}
const plusSlides = (n) => {
    shouldAutoSwitch = false;
    switchSlide((slideIndex += n));
}
const autoPlusSlides = (n) => {
    switchSlide((slideIndex += n));
}
const autoSwitch = () => {
    if (shouldAutoSwitch) {
        setTimeout(() => {
            if (shouldAutoSwitch) {
                autoPlusSlides(1);
                autoSwitch();
            }
        }, 2500)
    }
}

switchSlide(slideIndex);
autoSwitch();