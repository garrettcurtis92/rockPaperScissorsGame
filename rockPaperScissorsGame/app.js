document.addEventListener("DOMContentLoaded", function () {
	// Your code let userInput = ""; // define userInput variable outside of function

	let userInput = "";

	const getUserChoice = (userInput) => {
		userInput = userInput.toLowerCase();
		if (
			userInput === "rock" ||
			userInput === "paper" ||
			userInput === "scissors" ||
			userInput === "bomb"
		) {
			return userInput;
		} else {
			console.log("Error!");
		}
	};

	function getComputerChoice() {
		const randomNumber = Math.floor(Math.random() * 3);
		switch (randomNumber) {
			case 0:
				return "rock";
				break;
			case 1:
				return "paper";
				break;
			case 2:
				return "scissors";
				break;
		}
	}

	function determineWinner(userChoice, computerChoice) {
		if (userChoice === computerChoice) {
			return "The game was a tie";
		}

		if (userChoice === "rock") {
			if (computerChoice === "paper") {
				return "The computer won.";
			} else {
				return "You won!";
			}
		}
		if (userChoice === "paper") {
			if (computerChoice === "scissors") {
				return "The computer won.";
			} else {
				return "You won!";
			}
		}
		if (userChoice === "scissors") {
			if (computerChoice === "rock") {
				return "The computer won.";
			} else {
				return "You won!";
			}
		}
		if (userChoice === "bomb") {
			if (computerChoice === "rock" || "scissors" || "paper") {
				return "You won!";
			}
		}
	}

	function playGame() {
		const userChoice = getUserChoice(userInput); // use userInput variable here
		const computerChoice = getComputerChoice();
		console.log("You threw:" + userChoice); // log userChoice instead of userInput
		console.log("The computer threw:" + computerChoice);
		console.log(determineWinner(userChoice, computerChoice));
		const result = determineWinner(userChoice, computerChoice);
		document.getElementById("gameResult").textContent = result; // set the textContent of the gameResult element to the result of the game
	}

	// add event listeners to buttons to change userInput variable
	document.getElementById("rockBtn").addEventListener("click", function () {
		userInput = "rock";
		playGame();
	});

	document.getElementById("paperBtn").addEventListener("click", function () {
		userInput = "paper";
		playGame();
	});

	document.getElementById("scissorsBtn").addEventListener("click", function () {
		userInput = "scissors";
		playGame();
	});
});
