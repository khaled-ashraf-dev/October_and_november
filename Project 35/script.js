const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('img')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }
    changeImage();
}

function changeImage() {
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000)
}


rightBtn.addEventListener('click', () => {
    if (idx < img.length - 1) {
        idx++;
        changeImage();
        resetInterval();
    } else {
        idx = 0;
        changeImage();
        resetInterval();
    }
})

leftBtn.addEventListener('click', () => {
    if (idx > 0) {
        idx--;
        changeImage();
        resetInterval();
    } else {
        idx = img.length - 1;
        changeImage();
        resetInterval();
    }
})