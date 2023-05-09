const words = ["apple", "pears", "fruit", "court", "check", "alert", "press", "sweet", "salty"];
let answer = words[Math.floor(Math.random() * words.length)];
let guesses = 0;
let maxGuesses = 6;

function checkGuess(){
	let guessInput = document.getElementById("guess-input");
	let guess = guessInput.value.toLowerCase();
	
	if(guess.length !== 5){
		alert("Your guess must be 5 letters long.");
		return;
	}

	if(guess === answer){
		showMessage("Correct!");
		disableInput();
	} 

    else{
		guesses++;
		showMessage(`Incorrect. You have ${maxGuesses - guesses} guesses remaining.`);
		
		if(guesses === maxGuesses){
			showMessage(`You're out of guesses. The word was "${answer}".`);
			disableInput();
		}
	}
	updateLetters(guess);
	guessInput.value = "";
}

function updateLetters(guess){
	let letters = answer.split("");
	let guessLetters = guess.split("");
	
	for(let i = 0; i < letters.length; i++){
		let letterDiv = document.getElementById(`letter${i+1}`);

		if(guessLetters.includes(letters[i])){
			letterDiv.style.backgroundColor = "#4CAF50";
			letterDiv.innerHTML = letters[i].toUpperCase();
		} 
        else{
			letterDiv.style.backgroundColor = "#ccc";
			letterDiv.innerHTML = "";
		}
	}
}

function showMessage(message){
	let messageDiv = document.getElementById("message");
	messageDiv.innerHTML = message;
}

function disableInput(){
	let guessInput = document.getElementById("guess-input");
	let guessButton = document.querySelector(".guess-container button");
	
	guessInput.disabled = true;
	guessButton.disabled = true;
	guessButton.style.backgroundColor = "#ccc";
}
