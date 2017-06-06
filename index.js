const songForm = document.querySelector('#songForm');

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const songInfo = {
        title: form.songTitle.value, 
        artist: form.songArtist.value,
    };
    addToList(songInfo);
    

}

function addToList(item) {
    const list = document.querySelector('#songList');
    list.innerHTML = `
        <li>${item.title} - ${item.artist}</li>
        ${list.innerHTML} 
    `

}

songForm.addEventListener('submit', handleSubmit);