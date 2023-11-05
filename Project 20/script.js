const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonLeft = e.target.offsetLeft
        const buttonTop = e.target.offsetTop

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        circle.style.backgroundColor = getRandomHexColor();

        this.appendChild(circle)
        setTimeout(() => circle.remove(), 500)

    })
})

function getRandomHexColor() {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
  
    const hexColor = `#${randomR.toString(16)}${randomG.toString(16)}${randomB.toString(16)}`;
  
    return hexColor;
  }
  