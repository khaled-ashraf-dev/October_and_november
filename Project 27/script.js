const button = document.getElementById('button')
const toastContainer = document.getElementById('toast-container')

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notification = document.createElement('div')
    notification.classList.add('toast')
    notification.innerText = 'Lorem ipsum dolor sit amet.'
    toastContainer.appendChild(notification)

}