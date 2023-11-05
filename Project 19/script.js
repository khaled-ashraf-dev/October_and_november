const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')

const toggle = document.querySelector('.toggle')
const root = document.getElementsByTagName( 'html' )[0];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', () => {
    root.classList.toggle('dark')
    if (root.classList.contains('dark')) {
        toggle.innerHTML = 'Light Mode'
    } else {
        toggle.innerHTML = 'Dark Mode'
    }
})

setInterval(setTime, 1000)

function setTime() {
    const time = new Date();
    const day = time.getDay()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const month = time.getMonth()
    const date = time.getDate()
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${360*((hour%12)/12)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${360*(minute/60)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${360*(second/60)}deg)`

    timeEl.innerHTML = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}
