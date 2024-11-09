// Things Learnt
// <DOM Manipulation>
// <Function Declaration>
// <Array Methods>
// <Event Handling>
// <Conditional Statements>
// <Random Number Generation>
// <Updating Element Values>

const array = [1, 2, 3, 4, 5];
let foundElement;

function findMe(element) {
    return element > 3;
}

foundElement = array.find(findMe);
console.log(foundElement);

foundElement = array.find(function(element) {
    return element > 3;
});
console.log(foundElement);

foundElement = array.find(element => element > 3);
console.log(foundElement);

// Tic-Tac-Toe Game Variables
let boardValues = Array(9).fill('');  
let cellValues = [];
let currentPlayer = 'X';

const boardElement = document.getElementById('board');
for (let i = 0; i < 9; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell';
    cell.addEventListener('click', () => playerMove(i));
    boardElement.appendChild(cell);
    cellValues.push(cell);
}
updateBoard();

// Updates the board display
function updateBoard() {
    for (let i = 0; i < cellValues.length; i++) {
        cellValues[i].textContent = boardValues[i];
    }
}

// Handles computer's move
function computerMove() {
    const move = findBestMove();
    if (move !== undefined) { // Ensure move is valid
        boardValues[move] = 'O';
        updateBoard();

        if (checkWinner('O')) {
            endGame('Computer wins!');
        } else if (isDraw()) {
            endGame('Draw');
        }
    }
}

// Handles player's move
function playerMove(index) {
    if (boardValues[index] === '') { // Only play if cell is empty
        boardValues[index] = 'X';
        updateBoard();

        if (checkWinner('X')) {
            endGame('You win!');
        } else if (isDraw()) {
            endGame('Draw');
        } else {
            computerMove(); // Let the computer play next
        }
    }
}

// Ends the game and displays message
function endGame(message) {
    document.getElementById('message').textContent = message;
    setTimeout(resetGame, 2000); // Reset game after 2 seconds
}

// Resets the game
function resetGame() {
    boardValues.fill('');
    document.getElementById('message').textContent = '';
    updateBoard();
}

// Checks for a draw
function isDraw() {
    return boardValues.every(cell => cell !== ''); // All cells filled
}

// Finds the best move for the computer
function findBestMove() {
    for (let i = 0; i < 9; i++) {
        if (boardValues[i] === '' && canWin(i, 'O')) return i;
    }
    for (let i = 0; i < 9; i++) {
        if (boardValues[i] === '' && canWin(i, 'X')) return i;
    }
    if (boardValues[4] === '') return 4; // Center position strategy
    return [0, 2, 6, 8].find(i => boardValues[i] === '') || boardValues.findIndex(c => c === '');
}

// Helper function to check if a move can lead to a win
function canWin(index, player) {
    boardValues[index] = player;
    const win = checkWinner(player);
    boardValues[index] = ''; // Reset the cell after checking
    return win;
}

// Checks if a player has won
function checkWinner(player) {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return wins.some(combo => combo.every(index => boardValues[index] === player));
}
