
const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]


let wordToGuess, maskedWord, guessesLeft;

function newGame() {
  
  wordToGuess = words[Math.floor(Math.random() * words.length)];
 
  maskedWord = "*".repeat(wordToGuess.length);
  
  guessesLeft = wordToGuess.length + 3;

 
  updateUI();
}

function updateUI() {
  document.getElementById("maskedWord").innerText = maskedWord;
  document.getElementById("guessesLeft").innerText = guessesLeft;
}

document.getElementById("guessInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

function checkGuess() {
  const guess = document.getElementById("guessInput").value.toLowerCase();

  if (guess.length === 1) {
    checkLetter(guess);
  } else {
    checkWord(guess);
  }


  document.getElementById("guessInput").value = "";
}

function checkLetter(letter) {
  let found = false;
  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === letter) {
      
      maskedWord = maskedWord.substring(0, i) + letter + maskedWord.substring(i + 1);
      found = true;
    }
  }
  if (!found) {
    guessesLeft--;
  }

  updateUI();
  checkWin();
}

function checkWord(word) {
  if (word === wordToGuess) {

    alert("You have guessed right");
    newGame();
  } else {

    alert("You guessed wrong.");
    guessesLeft--;
    updateUI();
    checkWin();
  }
}

function checkWin() {
  if (wordToGuess === maskedWord) {
    alert("You have guessed right.");
    newGame();
  } else if (guessesLeft === 0) {
    alert("Game over, correct word was " + wordToGuess);
    newGame();
  }
}


window.onload = newGame;
