
// Declaring letters as variables
 var alphaLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 
// Set initial values
 var guessesLeft = 10;
 var guessesSoFar = [];
 var wins = 0;
 var losses = 0;
 
// Computer chooses a letter
 var computerChoice = alphaLetters[Math.floor(Math.random()*alphaLetters.length)];
 
// Reset function; score
 function reset(){
 	guessesLeft = 10;
 	computerChoice = alphaLetters[Math.floor(Math.random()*alphaLetters.length)];
 	document.querySelector("#guesses").innerHTML = "Guesses Remaining: 10 ";
 	document.querySelector("#user-guesses").innerHTML = "Guessed Letters: ";
 }
 
// The player selects a letter on Keyup
 	document.onkeyup = function(event) {
 
 		var userGuess = event.key.toLowerCase(); 
 
 		if (userGuess === computerChoice){
 			wins;
 			alert("Are you a Psychic?! You guessed the right letter! The letter was: " + computerChoice);
 			reset();
 			document.querySelector("#wins").innerHTML = "Wins: " + wins + ";";
 		}

 		else if(guessesLeft === 0){
 			losses;
 			alert("Game over! You ran out of guesses! The letter was: " + computerChoice);
 			reset();
 			document.querySelector("#losses").innerHTML = "Losses: " + losses;
 		}
 
 		else{
 
 			guessesLeft --;
 			var newSpan = document.createElement("span");
 			newSpan.innerHTML = userGuess + ", ";
 			document.querySelector("#guesses").innerHTML = "Guesses Remaining: " + guessesLeft;
 			document.querySelector("#user-guesses").appendChild(newSpan);

 		}
 	}
 