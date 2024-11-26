//WE WILL LEARN:
//Arrays and Basic Operations
//Array sorting
//String Manipulation
//Conditional Logic

// let numbers = [100,50,10,20];
// console.log(numbers);
// numbers.sort((a,b) => {
//     const diff = a-b;
//     return diff;
// });
// console.log(numbers);

const words = ['javascript', 'python', 'coding', 'function', 'haaris'];
const ind = Math.floor(Math.random() * words.length);
const word = words[ind];
console.log(word);

const scrambleWord = word.split('').sort((a, b) => {
    const randomValue = Math.random();
    const diff = 0.5 - randomValue;
    return diff;
}).join('');
console.log(scrambleWord);
document.querySelector("#scrambled-word").textContent = scrambleWord;
document.querySelector("#check-btn").addEventListener('click', () => {
    const userAnswer = document.querySelector("#user-input").value;
    console.log(userAnswer);
    if (userAnswer === word) {
        document.querySelector("#result").textContent = "Correct!";
    } else {
        document.querySelector("#result").textContent = "Incorrect!";
    }
});