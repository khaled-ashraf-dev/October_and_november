const next = document.getElementById('next');
const line = document.querySelector('.line');
const circles = document.querySelectorAll('.circle')
let activeCount = 1;

let width = 0;
let current = 0;
next.addEventListener('click', () => {
    width = width + 33;
    current++;
    line.style.width = `${width}%`;
    circles[current].classList.add('active')
})