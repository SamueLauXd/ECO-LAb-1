const bitcoinPriceContainer = document.querySelector('.bitcoin-price-container');
const bitcoinButton = document.querySelector('.bitcoin-price');

bitcoinButton.addEventListener('click', (e) => {
    getPrice();
})

function getPrice(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showPrice(data);
    })
}

function showPrice(coin){
    const price = document.createElement('p');
    price.textContent = `$${coin.bpi.USD.rate} American Dollars since ${coin.time.updated}`;

    const div = document.createElement('div');
    div.appendChild(price);

    bitcoinPriceContainer.appendChild(div);
}