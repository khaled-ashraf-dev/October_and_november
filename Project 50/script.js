const playBtn = document.getElementById('play-btn');
const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.second-screen');
const thirdScreen = document.querySelector('.third-screen');

const insectBtns = document.querySelectorAll('.insect-btn');
let userChoice;

const playingArea = document.querySelector('.playing-area');
const score = document.getElementById('score');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let time = 0;

firstScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });

playBtn.addEventListener('click', () => {
    secondScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

insectBtns.forEach((insectBtn) => {
    insectBtn.addEventListener('click', () => {
        thirdScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
        userChoice = insectBtn.innerText;
        startGame();
        setInterval(timer, 1000)
    })
})

function startGame() {
    const imgSrc = chooseInsect()
    const img = document.createElement('img')
    img.src = imgSrc
    img.classList.add('game-img')
    img.style.top = getRandomNumberInRange(0, playingArea.clientHeight - 100) + 'px';
    img.style.left = getRandomNumberInRange(0, playingArea.clientWidth - 100) + 'px';
    img.style.transform = `rotate(${getRandomNumberInRange(0,360)}deg)`
    img.addEventListener('click', () => {
        img.remove();
        startGame();
        startGame();
        score.innerText++;
    })

    playingArea.appendChild(img)
}

function chooseInsect() {
    const insectImages = {
        'Fly': 'http://pngimg.com/uploads/fly/fly_PNG3946.png',
        'Mosquito': 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png',
        'Spider': 'http://pngimg.com/uploads/spider/spider_PNG12.png',
        'Roach': 'http://pngimg.com/uploads/roach/roach_PNG12163.png'
    };

    return insectImages[userChoice]; // Provide a default URL if userChoice doesn't match any key
}


function getRandomNumberInRange(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function timer() {
    time++;
    minutes.innerText = String(Math.floor(time/60)).padStart(2, '0');
    seconds.innerText = String(time % 60).padStart(2, '0');
}