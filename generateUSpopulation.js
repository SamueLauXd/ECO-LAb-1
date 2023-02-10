const USpopulationContainer = document.querySelector('.US-population-container')
const populationButton = document.querySelector('.US-population');

populationButton.addEventListener('click', (e) => {
    getPopulation();
})

function getPopulation(){
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showPopulation(data);
    })
}

function showPopulation(pop){
    const pob = document.createElement('p');
    pob.textContent = `in ${pop.data[0]["ID Year"]} the US population was ${pop.data[0].Population} people`;

    const div = document.createElement('div');
    div.append(pob);

    USpopulationContainer.appendChild(div);
}