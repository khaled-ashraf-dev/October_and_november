const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn')

    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSongs();
        const audio = document.getElementById(sound);
        audio.volume = 0.02;
        audio.play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const track = document.getElementById(sound);
        track.pause();
        track.currentTime = 0;
    })
}