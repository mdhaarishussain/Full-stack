const text = "The quick brown fox jumps over the lazy dog.";
document.getElementById('textToType').textContent = text;
const userInput = document.getElementById('userInput');

let startTime; // Define startTime in a scope accessible to onInput

// Main startTest function
function startTest() {
    startTime = new Date().getTime();
    userInput.value = ''; // Clear any previous input
    document.getElementById('result').textContent = ''; // Clear previous result
    userInput.addEventListener('input', onInput);
}

// Separate listener function
function onInput() {
    const currentTime = new Date().getTime();
    const timeTaken = (currentTime - startTime) / 1000; // Time in seconds
    if (userInput.value === text) { // Check if input matches target text
        const wpm = Math.round((text.split(' ').length / timeTaken) * 60); // Calculate WPM
        document.getElementById('result').textContent = `You typed at a speed of ${wpm} WPM!`;
        userInput.removeEventListener('input', onInput); // Remove listener after completion
    }
}
