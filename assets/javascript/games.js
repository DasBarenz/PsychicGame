//variables
var wins = 0;
console.log(wins);
var losses = 0;
console.log(losses);
var guessesRemain = 8;
var secretLetter = "";
var guesses = [];
var userGuess = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//computer selects random letter at the start of every game
var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(secretLetter);

//This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);

// adds the user guess to an array (for later display)
    guesses.push(" " + userGuess);
    console.log(guesses);

//if correct guess, you win and everything resets...if you don't get the correct guess, the remaining guesses go down by one
    if (userGuess === secretLetter) {
        wins++;
        guessesRemain = 8;
        guesses = [];
        var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    } else {
        guessesRemain--;
    } 

//if you reach 0 guesses remaining, the losses increase by one and the the game resets
    if (guessesRemain === 0) {
        losses++;
        guessesRemain = 8;
        guesses = [];
        var secretLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

//update wins, losses, guesses, guesses remaining onto the html
    document.getElementById("winScore").textContent = "Wins: " + wins;
    document.getElementById("lossScore").textContent= "Losses: " + losses;
    document.getElementById("guessRemain").textContent= "Guesses Remaining: " + guessesRemain;
    document.getElementById("guesses").textContent= "Your Guesses So Far: " + guesses;

};