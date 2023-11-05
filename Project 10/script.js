const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

displayJoke()

jokeBtn.addEventListener('click', () => {
    displayJoke()
})

function displayJoke() {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://icanhazdadjoke.com/", requestOptions)
        .then(response => response.json())
        .then(data => {
            jokeEl.innerText = data.joke
        })
}