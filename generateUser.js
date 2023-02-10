const userContainer = document.querySelector('.user-container');
const userButton = document.querySelector('.usuario');

userButton.addEventListener('click', (e) => {
    getUser();
})

function getUser(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        showUser(data);
        console.log(data);
    })
}

function showUser(user){
    const img = document.createElement('img');
    img.src = user.results[0].picture.large;

    const name = document.createElement('p');
    name.textContent = user.results[0].name.first + " " + user.results[0].name.last;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(name);

    userContainer.appendChild(div);
}