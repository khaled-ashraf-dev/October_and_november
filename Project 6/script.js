const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', showBoxes)

function showBoxes() {
    const distance = window.scrollY + 50
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log(distance)
        if (boxTop < distance) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}