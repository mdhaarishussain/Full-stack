//WE WILL LEARN:
//Event Handling with addEventListener:
//DOM Manipulation:
//Asynchronous Programming with Timers:
//Enabling/Disabling Buttons Dynamically
//String Interpolation (Template Literals)
//Event Loop and Callbacks:
//going to handle 2 events the first click and second click.
//enabling and disabling buttons dynamically
//string interpolation - how do you neatly show to the user 
//evencallbacks explicitly


//create global variables
let clickCount = 0;
let Timer;


//Get the DOMs/Node for all the things we need 
const clickBtn=document.querySelector("#click-btn");
console.log(clickBtn);
//const clickBtnAgain=document.getElementById("click-btn");
//console.log(clickBtnAgain);

const startBtn = document.querySelector("#start-btn");
console.log(startBtn);
const clickCountDisplay=document.querySelector("#click-count");
const resultDisplay=document.querySelector("#result");
clickBtn.disabled=true;

clickBtn.addEventListener('click',() => {
    clickCount++;
    clickCountDisplay.textContent=clickCount;
})

function endTest(){
    clickBtn.disabled=true;
    startBtn.disabled=false;
    resultDisplay.textContent=`You clicked" ${clickCount} times in 5 seconds`;
}
startBtn.addEventListener('click',() =>{
    resultDisplay.textContent = '';
    clickCount = 0;
    clickCountDisplay.textContent = clickCount;
    clickBtn.disabled=false;
    startBtn.disabled=true;
    timer=setTimeout(endTest,5000);
});
