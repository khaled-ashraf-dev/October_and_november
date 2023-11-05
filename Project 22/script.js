const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const sizeSpan = document.getElementById('size');
const colorInput = document.getElementById('color');
const clear = document.getElementById('clear')

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let size = 20;
let isPressed = false
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        x2 = e.offsetX;
        y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }

    
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle
    ctx.fillStyle = colorInput.value;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = colorInput.value;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increase.addEventListener('click', () => {
    sizeSpan.innerText++;
    size++;
})

decrease.addEventListener('click', () => {
    sizeSpan.innerText--;
    size--;
})

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})