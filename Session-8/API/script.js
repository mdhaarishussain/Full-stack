//what are promises
//how are they handled
//in memory game , randomness, event handling nodes,
const jokeButton = document.getElementById('joke-button')
const bitcoinButton = document.getElementById('bitcoin-button')
const outputDiv=document.getElementById('output');
jokeButton.addEventListener('click',getJoke);
bitcoinButton.addEventListener('click',getBitcoin);
function getJoke(){
    const url = 'https://api.chucknorris.io/jokes/random'
    fetch(url)
        .then(response => response.json())
        .then(data=>outputDiv.innerText=data.value)
        .catch(error=>console.error(error));
}
function getBitcoin(){
    const url='https://api.coindesk.com/v1/bpi/currentprice.json';
    fetch(url)
        .then(response => response.json())
        .then(data=>outputDiv.innerText=data.bpi.USD.rate)
        .catch(error=>console.error(error));

    }