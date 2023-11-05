const body = document.body
const slides = document.querySelectorAll('.slide')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let currentSlide = 0

setBodyBg()
setActive()

function setBodyBg() {
    body.style.backgroundImage = slides[currentSlide].style.backgroundImage
}

function setActive() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[currentSlide].classList.add('active')
}

rightBtn.addEventListener('click', () => {
    currentSlide++

    if (currentSlide > slides.length - 1) {
        currentSlide = 0
    }

    setBodyBg()
    setActive()
})

leftBtn.addEventListener('click', () => {
    currentSlide--

    if (currentSlide < 0) {
        currentSlide = slides.length - 1
    }
    setBodyBg()
    setActive()
})

