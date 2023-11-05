const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup(-1)

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click', () => fillCups(idx))
})

function fillCups(idx) {
    smallCups.forEach(cup => {
        cup.classList.remove('full')
    })

    for (let i = 0; i <= idx; i++) {
        smallCups[i].classList.add('full')
    }

    updateBigCup(idx)
}

function updateBigCup(idx) {
    if (idx === -1) {
        percentage.style.visibility = 'hidden'
        liters.innerText = `2L`
    } else {
        percentage.style.visibility = 'visible'
        liters.innerText = `${(2 - ((idx+1) * 0.25))}L`
    }

    percentage.style.height = `${((idx+1)/8) * 100}%`
    percentage.innerText = `${((idx+1) / 8) *100}%`
    

    if (idx > 6) {
        remained.style.display = 'none'
    } else {
        remained.style.display = 'flex'
    }
}