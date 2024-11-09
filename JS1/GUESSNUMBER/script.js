const randomNuber = Math.floor(Math.random() * 100) + 1;
console.log(randomNuber);
document.querySelector("#guessBtn").addEventListener('click', () => {
    const userEntered = Number(document.querySelector("#userGuess").value);
    const resultMessage = document.querySelector("#resultMessage");
    // resultMessage.textContent ="This is going to be the result message";
    if (userEntered < 1 || userEntered > 100) {
        resultMessage.textContent = "Please enter a valid number between 1 to 100";
    } else if (userEntered === randomNuber) {
        resultMessage.textContent="Congratulations, you have guessed the correct number";
        resultMessage.style.color = 'green';
    } else if (userEntered > randomNuber) {
        resultMessage.textContent="You Have entered too high!";
        resultMessage.style.color = 'red';
    }else if (userEntered<randomNuber){
        resultMessage.textContent="You have guessed too low!";
        resultMessage.style.color='red';
    }
    });