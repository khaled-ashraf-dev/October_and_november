const img = document.querySelector('.img')
const heartCounter = document.querySelector('.heart-counter')

img.addEventListener('dblclick', (e) => {
    const heart = document.createElement('a')
    heart.classList.add('fa-solid')
    heart.classList.add('fa-heart')
    
    
    const x = e.clientX
    const y = e.clientY

    heart.style.top = y + 'px'
    heart.style.left = x + 'px'

    document.body.appendChild(heart)
    

    setTimeout(() => {
        heart.style.fontSize = '5rem'
        heart.style.opacity = '1'
    }, 30)
    

    setTimeout(() => {
        heart.style.fontSize = '0'
        heart.style.opacity = '0'
    }, 30 + 500)


    setTimeout(() => {
        heart.remove()
    }, 5000)
    heartCounter.innerText++
})