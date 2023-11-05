const textEl = document.getElementById('text')
const text = textEl.innerText
const speedEl = document.getElementById('speed')
let speed = 300 / speedEl.value
let idx = 1

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++;

    setTimeout(writeText, speed)

    if (idx > text.length) {
        idx = 1;
    }
}

speedEl.addEventListener('input', (e) => {
    speed = 300/ e.target.value 
})

writeText()