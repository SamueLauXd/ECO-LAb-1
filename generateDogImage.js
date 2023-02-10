const dogImageContainer = document.querySelector('.dog-image-container');
const dogButton = document.querySelector('.dog-image');

dogButton.addEventListener('click', (e) => {
    getDog();
})

function getDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(respose => respose.json())
    .then(data => {
        console.log(data);
        showDog(data);
    })
}

function showDog(dog){
    const dogImg = document.createElement('img');
    dogImg.src = dog.message;

    const div = document.createElement('div');
    div.appendChild(dogImg);

    dogImageContainer.appendChild(div);
}