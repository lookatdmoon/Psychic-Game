
// Declaring letters as variables; array
 var alphaLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 
// Set initial values
 var guessesLeft;
 var guessesSoFar; // Empty array; declares an array as a data type
 var wins = 0;
 var losses = 0;
 
// Computer chooses a letter  first part = object/library  . = dot notation  the vaule that follows the dot is the attribute, method or function owned by the object/library the precedes the dot that we are interested in pulling out of the object of the library and executing.
// Math is a prototype. Class is a reusable defintion. 
 var computerChoice;
 
// Reset function; score
 // function reset(){
 // 	guessesLeft = 10;
 // 	computerChoice = alphaLetters[Math.floor(Math.random()*alphaLetters.length)];
 // 	document.querySelector("#guesses").innerHTML = "Guesses Remaining: 10 ";   // # = id selector
 // 	document.querySelector("#user-guesses").innerHTML = "Guessed Letters: ";
 // }
// Start Re-Start
function startRestart(){
	guessesLeft = 10;
	computerChoice = alphaLetters[Math.floor(Math.random()*alphaLetters.length)];
	guessesSoFar = [];
	document.querySelector("#wins").innerHTML = "Wins: "; + wins;
	document.querySelector("#losses").innerHTML = "Losses: " + losses;
	document.querySelector("#guesses").innerHTML = "Guesses Remaining: " + guessesLeft; 
 	document.querySelector("#user-guesses").innerHTML = "Guessed Letters: ";
}

// Call
 startRestart()

// The player selects a letter on Keyup
 	document.onkeyup = function(event) {
 
 		var userGuess = event.key.toLowerCase(); 
 
 		// If they win
 		if (userGuess === computerChoice){
 			wins = wins + 1;  // Other ways: wins++  / wins+=1
 			alert("Are you a Psychic?! You guessed the right letter! The letter was: " + computerChoice);
 			startRestart();
 			document.querySelector("#wins").innerHTML = "Wins: " + wins;
 		}

 		// If they lose
 		else if(guessesLeft === 0){
 			losses = losses + 1;
 			alert("Game over! You ran out of guesses! The letter was: " + computerChoice);
 			startRestart();
 			document.querySelector("#losses").innerHTML = "Losses: " + losses;
 		}
 		
 		// Guess incorrectly, but did not lose yet
 		else{
 
 			guessesLeft --;
 			var newSpan = document.createElement("span");
 			newSpan.innerHTML = userGuess + ", ";
 			document.querySelector("#guesses").innerHTML = "Guesses Remaining: " + guessesLeft;
 			document.querySelector("#user-guesses").appendChild(newSpan);

 		}
 	}

 	// Next challeneg!!  Write some kind of logic maybe if else that will not allow me to be penalized for guessing the same letter multiple times.


 