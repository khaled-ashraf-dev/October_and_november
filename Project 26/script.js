const downBtn = document.querySelector('.down-btn')
const upBtn = document.querySelector('.up-btn')

const description = document.querySelector('.description')
const imgContainer = document.querySelector('.image-container')

const height = window.innerHeight;
description.style.transform = `translateY(-${height * 3}px)`

const img = document.querySelector('.img')
downBtn.addEventListener('click', () => changeSlide('down'))
upBtn.addEventListener('click', () => changeSlide('up'))

let active = 0

function changeSlide(direction) {
    const height = window.innerHeight;
    if (direction === 'down') {
        active++;
        if (active > 3) {
            active = 0
        }
    } else {
        active--;
        if (active < 0) {
            active = 3
        }
    }

    description.style.transform = `translateY(-${(height*3) - (height * active)}px)`
    imgContainer.style.transform = `translateY(-${height * active}px)`
}