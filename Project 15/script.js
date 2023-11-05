const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = 0;
    const target = +counter.getAttribute('data-target')
    const increment = target / 200

    const updateCounter = () => {
        const current = +counter.innerText
        if (current < target) {
            counter.innerText = Math.ceil(current + increment)
            setTimeout(updateCounter, 2)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})