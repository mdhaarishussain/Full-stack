//<DOM Manipulation>
//<Random Number Generation>
//<Function Declaration>
//<setInterval Method>
//<Event Handling>
//<Conditional Statements>
//<Updating Element Values>
let score = 0;
let gameOver = false;

const gameArea = document.getElementById('gameArea')
function createObject()
{
    const obj=document.createElement('div');
    obj.classList.add('object');
    obj.style.left=Math.random()*(gameArea.clientWidth-20)+'px';
    gameArea.appendChild(obj);
    moveObject(obj);
}
function moveObject(obj){
    let pos=0;
    const interval =setInterval(()=>{
    if(pos>=gameArea.clientHeight|| gameOver){
        clearInterval(interval);
        obj.remove();
        if(!gameOver) score--;
        updateScore();
    }
    else{
        pos+=5;
        obj.style.top=pos+'px';
    }

},200);
}
function updateScore(){
    document.getElementById('score').textContent = `Score : ${score}`;
}

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('object')){
        score++;
        e.target.remove();
        updateScore();
    }
})
setInterval(()=>{
    if (!gameOver)createObject();
},1200);
createObject();


