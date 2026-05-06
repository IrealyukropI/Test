'use strict'

/*****************************
 * 
 *  SMOOTH SCROLL TO ANCHOR
 * 
 */

 document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.top-offset').offsetHeight;
        const topOffset = 0; // нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


const slider = document.querySelector(`.slider`)
const slides = document.querySelectorAll(`.slide`)

let currentSlide = 0
const totalSlides = slides.length

function autoSwitch(){
    currentSlide = (currentSlide + 1) % totalSlides
    slider.style.transform = `translateX(-${currentSlide * 100}%)`
}
 
setInterval(autoSwitch,3000)

const popUp = document.getElementById(`popUp`)            
const pop = document.getElementById("formButton")

pop.onclick = (e) =>{
    e.preventDefault();
    popUp.style.display = `flex`
}

popUp.onclick = (e) =>{
    e.preventDefault();
    popUp.style.display = `none`
}