const password = document.getElementById('password')
const background = document.getElementById('background')
let initialBlur = 20 

password.addEventListener('input', (e) => {
    const passwordValue = e.target.value
    blur = initialBlur - (passwordValue.length * 2) ;
    background.style.filter = `blur(${blur}px)`
})