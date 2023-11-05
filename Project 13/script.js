const textArea = document.getElementById('textarea')
const choices = document.querySelector('.choices')

textArea.addEventListener('keyup', (e) => {
    choices.innerHTML = ''
    const text = e.target.value
    const choicesArr = text.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    choicesArr.forEach(choice => {
        const choiceEl = document.createElement('div')
        choiceEl.classList.add('choice')
        choiceEl.innerText = choice
        choices.appendChild(choiceEl)
    });

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomSelect()
    }
})

function randomSelect() {
    const times = 30
    let count = 0

    const interval = setInterval(() => {
        const randomChoice = pickRandomChoice()
        highlight(randomChoice)
        setTimeout(() => {
            unhighlight(randomChoice)
        }, 100);
        count++;
        if (count === times) {
            clearInterval(interval)
            setTimeout(() => {
                highlight(randomChoice)
            }, 100)
        }
    }, 100)
}


function pickRandomChoice() {
    const choices = document.querySelectorAll('.choice')
    return choices[Math.floor(Math.random() * choices.length)]
}

function highlight(tag) {
    tag.classList.add('highlight')
}

function unhighlight(tag) {
    tag.classList.remove('highlight')
}