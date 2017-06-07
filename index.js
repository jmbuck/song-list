const songForm = document.querySelector('#songForm');
let id = 0;
let songList = [];

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const songInfo = {
        title: form.songTitle.value, 
        artist: form.songArtist.value,
    };
    addToList(songInfo);
}

function like(event) {
    console.log('Like');
    const button = event.target;
    if(button.textContent == 'Like') {
        button.parentElement.parentElement.style.backgroundColor = 'yellow';
        button.textContent = 'Unlike';
    } else {
        button.parentElement.parentElement.style.backgroundColor = 'white';
        button.textContent = 'Like';
    }
}

function showDetails(event) {
    if(event.target == event.currentTarget) {
        console.log('Show Details');
        const listItem = event.target;
    }
}

function deleteItem(event) {
    console.log('Delete!');
    const listItem = event.target.parentElement.parentElement;
    for(let i = 0; i < songList.length; i++) {
        if(songList[i].id == listItem.id[1]) {
            console.log(`Removed ${songList[i].title}`);
            songList.splice(i, 1);
        }
    }
    listItem.parentElement.removeChild(listItem);
}

function addEventListeners() {
     for(let i = 0; i <= id; i++) {
        if(document.querySelector('#l'+i) != null) {
            document.querySelector('#l'+i).addEventListener('click', like);
            document.querySelector('#i'+i).addEventListener('click', showDetails);
            document.querySelector('#d'+i).addEventListener('click', deleteItem);
        }
    }
}

function addToList(item) {
    const list = document.querySelector('#songList');
    list.innerHTML = `
        <li id="${'i'+id}"> 
            ${item.title} - ${item.artist}
            <div class="buttons">  
                <button type="button" id="${'l'+id}" class="like">Like</button>
                <button type="button" id="${'d'+id}" class="delete">Delete</button>
            </div>
        </li>
        ${list.innerHTML} 
    `;
    addEventListeners(); 
    item.id = id;
    songList.push(item);
    id++;
}

songForm.addEventListener('submit', handleSubmit);