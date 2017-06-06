const songForm = document.querySelector('#songForm');
let id = 0;
let songList = [];

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const songInfo = {
        title: form.songTitle.value, 
        artist: form.songArtist.value,
        id: '',
    };
    addToList(songInfo);
}

function like(event) {
    const button = event.target;
    console.log('Like');
    if(button.textContent == 'Like') {
        button.parentElement.style.backgroundColor = 'yellow';
        button.textContent = 'Unlike';
    } else {
        button.parentElement.style.backgroundColor = 'white';
        button.textContent = 'Like';
    }
}

function showDetails(event) {
    console.log('Show Details');
    const listItem = event.target;
}

function addToList(item) {
    const list = document.querySelector('#songList');
    list.innerHTML = `
        <li> 
            ${item.title} - ${item.artist}  
            <button type="button" id="${'l'+id}">Like</button>
        </li>
        ${list.innerHTML} 
    `;
    const button = document.querySelector('#l'+id);
    const listItem = document.querySelector('#l'+id).parentElement;
    button.addEventListener('click', like);
    listItem.addEventListener('click', showDetails)
    item.id = 'l'+id;
    songList.push(item);
    id++;
}


songForm.addEventListener('submit', handleSubmit);