// Game Configuration
const GAME_CONFIG = {
    maxAttempts: 6,
    minWordLength: 4,
    status: {
        playing: 'playing',
        won: 'won',
        lost: 'lost'
    }
};

// Word List
const WORDS = [
    "REACT",
    "JAVASCRIPT",
    "PROGRAMMING",
    "COMPUTER",
    "DEVELOPER",
    "CODING",
    "SOFTWARE",
    "INTERFACE",
    "WEB",
    "APPLICATION"
];

// Game State
class GameState {
    constructor() {
        this.reset();
    }

    reset() {
        this.word = this.getRandomWord();
        this.guessedLetters = new Set();
        this.incorrectLetters = new Set();
        this.remainingAttempts = GAME_CONFIG.maxAttempts;
        this.gameStatus = GAME_CONFIG.status.playing;
    }

    getRandomWord() {
        return WORDS[Math.floor(Math.random() * WORDS.length)];
    }

    makeGuess(letter) {
        if (!this.isValidGuess(letter)) return false;

        this.guessedLetters.add(letter);

        if (!this.word.includes(letter)) {
            this.incorrectLetters.add(letter);
            this.remainingAttempts--;
            this.checkLoss();
        }

        this.checkWin();
        return true;
    }

    isValidGuess(letter) {
        return (
            this.gameStatus === GAME_CONFIG.status.playing &&
            letter.match(/[A-Z]/) &&
            !this.guessedLetters.has(letter)
        );
    }

    checkWin() {
        const isWin = [...this.word].every(letter => this.guessedLetters.has(letter));
        if (isWin) {
            this.gameStatus = GAME_CONFIG.status.won;
        }
    }

    checkLoss() {
        if (this.remainingAttempts === 0) {
            this.gameStatus = GAME_CONFIG.status.lost;
        }
    }

    getDisplayWord() {
        return [...this.word]
            .map(letter => this.guessedLetters.has(letter) ? letter : "_")
            .join(" ");
    }
}

// UI Controller
class UIController {
    constructor(gameState) {
        this.gameState = gameState;
        this.initializeElements();
        this.bindEvents();
        this.updateDisplay();
    }

    initializeElements() {
        this.elements = {
            wordDisplay: document.getElementById("wordDisplay"),
            letterInput: document.getElementById("letterInput"),
            guessButton: document.getElementById("guessButton"),
            resetButton: document.getElementById("resetButton"),
            incorrectLetters: document.getElementById("incorrectLetters"),
            remainingAttempts: document.getElementById("remainingAttempts"),
            gameMessage: document.getElementById("gameMessage")
        };
    }

    bindEvents() {
        this.elements.guessButton.addEventListener("click", () => this.handleGuess());
        this.elements.letterInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") this.handleGuess();
        });
        this.elements.resetButton.addEventListener("click", () => this.resetGame());
    }

    handleGuess() {
        const guess = this.elements.letterInput.value.toUpperCase();
        this.elements.letterInput.value = "";
        
        if (this.gameState.makeGuess(guess)) {
            this.updateDisplay();
        }
    }

    resetGame() {
        this.gameState.reset();
        this.elements.letterInput.value = "";
        this.elements.letterInput.disabled = false;
        this.elements.guessButton.disabled = false;
        this.updateDisplay();
        this.clearGameMessage();
    }

    updateDisplay() {
        this.elements.wordDisplay.textContent = this.gameState.getDisplayWord();
        this.elements.incorrectLetters.textContent = [...this.gameState.incorrectLetters].join(", ");
        this.elements.remainingAttempts.textContent = this.gameState.remainingAttempts;
        this.updateGameStatus();
    }

    updateGameStatus() {
        if (this.gameState.gameStatus === GAME_CONFIG.status.won) {
            this.showGameMessage("Congratulations! You won!", "win-message");
            this.disableInput();
        } else if (this.gameState.gameStatus === GAME_CONFIG.status.lost) {
            this.showGameMessage(`Game Over! The word was: ${this.gameState.word}`, "lose-message");
            this.disableInput();
        }
    }

    showGameMessage(message, className) {
        this.elements.gameMessage.textContent = message;
        this.elements.gameMessage.className = `game-message ${className}`;
    }

    clearGameMessage() {
        this.elements.gameMessage.textContent = "";
        this.elements.gameMessage.className = "game-message";
    }

    disableInput() {
        this.elements.letterInput.disabled = true;
        this.elements.guessButton.disabled = true;
    }
}

// Initialize Game
document.addEventListener("DOMContentLoaded", () => {
    const gameState = new GameState();
    new UIController(gameState);
});
