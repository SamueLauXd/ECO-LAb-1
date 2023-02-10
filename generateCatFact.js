const catFactContainer = document.querySelector('.cat-fact-container');
const catFactButton = document.querySelector('.cat-fact');

catFactButton.addEventListener('click', (e) => {
    getFact();
})

function getFact(){
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(dataFact => {
        console.log(dataFact);
        showFact(dataFact);
    })
}

function showFact(fact){
    const dato = document.createElement('p');
    dato.textContent = fact.fact;

    const div = document.createElement('div');
    div.appendChild(dato);

    catFactContainer.appendChild(div);
}