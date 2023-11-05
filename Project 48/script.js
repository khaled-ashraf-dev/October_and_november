const container = document.getElementById('container')
const imagesCount = 27



function getRandomSize() {
    const random = () => Math.floor(Math.random() * 10) + 300
    return `${random()}x${random()}`
}

for (let i = 0; i < imagesCount; i++) {
    const img = document.createElement('img')
    const imgUrl = `https://source.unsplash.com/random/${getRandomSize()}`
    img.src = imgUrl
    img.classList.add('img')
    container.appendChild(img)
}