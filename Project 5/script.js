const bg = document.querySelector('.bg')
const loading = document.querySelector('.loading')

let load = 0
let interval = setInterval(loadBlur, 15)

function loadBlur() {
    if (load == 99) {
        clearInterval(interval)
    }
    load++;
    bg.style.filter = `blur(${100-load}px)`
    loading.style.opacity = `${1-(load/100)}`
    loading.innerText = `${load}%`
    console.log(load)
}