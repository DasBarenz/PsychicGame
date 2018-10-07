//variables
var wins = 0;
var losses = 0;
var guessesRemain = 8;
var secretLetter = "";
var guesses = "";
var userGuess = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//computer selects random letter at the start of every game
var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(secretLetter);

//This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;
// console.log(userGuess);
userGuess.html("");

if (userGuess === secretLetter) {
    wins++;
    guessesRemain = 8;
    guesses = "";
    var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
} else {
    guessesRemain--;
} 

if (guessesRemain === 0) {
    losses++;
    guessesRemain = 8;
    guesses = "";
    var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

guesses.append("userGuess" + ", ");
// Randomly chooses a choice from the options array. This is the Computer's guess.
// var secretLetter = alphabet[Math.random(Math.floor * alphabet.length)];
// console.log(secretLetter);

};
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
    //     // Alerts the key the user pressed (userGuess).
    //     alert("User guess: " + userGuess);
  
    //     // Alerts the Computer's guess.
    //     alert("Computer guess: " + computerGuess);


//computer generates secretLetter from var alphabet-->


// wins start at zero and increment up 1 with each win-->


//losses start at zero and increment up 1 with each loss -->


//guessesRemain start at 8 and count down with each letter guessed, when it reaches zero, the loss count increases by one -->


//this is a list (ARRAY?) of letters that the player has guessed, separated by commas -->
