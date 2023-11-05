const hoverboard = document.getElementById('hoverboard')

const colors = []


for (let i = 0; i < 50; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }

for (let i = 1; i < 505; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    

    setTimeout(() => {
        hoverboard.appendChild(square)}, 1 * i)
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    const randomNum = 0.5 + Math.random() * 0.5;
    element.style.transform = `scale(${randomNum}) rotate(${Math.random() * 1000}deg)`
    
}