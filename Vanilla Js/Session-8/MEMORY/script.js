//<Array Methods>
//<DOM Manipulation>
//<Event Handling>
//<Function Declaration>
//<Conditional Statements>
//<setTimeout Method>
//<Data Attributes>
const cardValues=['A','A','B','B','C','C','D','D']
const shuffleCards= cardValues.sort(()=>0.5-Math.random());
const cardContainer = document.getElementById('card-container');
let firstCard , secondCard ,lockBoard=false;

shuffleCards.forEach(value=>{
    const card=document.createElement('div')
    card.className='card';
    card.dataset.value=value;
    card.addEventListener('click', flipcard);
    cardContainer.appendChild(card);
});
function flipcard(){
    if (lockBoard || this===firstCard) return;
    this.classList.add('flipped');
    this.textContent = this.dataset.value;

    if(!firstCard){
        firstCard= this;
    }else{
        secondCard = this;
        lockBoard=true;
        checkMatch();
    }
}
function checkMatch(){
    if(firstCard.dataset.value===secondCard.dataset.value){
        firstCard.removeEventListener('click', flipcard);
        secondCard.removeEventListener('click', flipcard);
        resetBoard();
}
else {
    setTimeout(() => {
        firstCard.textContent = '';
        secondCard.textContent = '';
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}
}
function resetBoard(){
    [firstCard,secondCard,lockBoard]=[null,null,false];
}