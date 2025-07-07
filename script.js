const items = ["Rock", "Paper", "Scissors"];

let humanScore = 0, computerScore = 0, rounds = 0;
let gameOver = false;

const humanScoreDisplay = document.querySelector('#human-score')
const computerScoreDisplay = document.querySelector('#computer-score')

function getComputerChoice() {
  idx = Math.floor(Math.random() * 3);
  return items[idx];
}

function cleanString(str) {
  if (typeof str !== "string") {
    console.log("The input must be a STRING");
    return null;
  } else {
    return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
  }
}

function getUserChoice() {
  var userChoice = cleanString(prompt("Enter your choice"));
  while (items.indexOf(userChoice) === -1) {
    console.log("Invalid choice - please try again");
    userChoice = cleanString(prompt("Enter your choice"));
  }
  console.log(userChoice);
}

function updateScores()
{
	humanScoreDisplay.textContent = humanScore; 
	computerScoreDisplay.textContent = computerScore; 
}

/*
function game(rounds = 5) {
  for (let i = 0; i < rounds; i++) {
    const humanSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}
*/

const resultOutput = document.querySelector(".result");

function displayWinner() {
	const winnerText = document.createElement("p");
	winnerText.setAttribute("class", "finalWinner");
	if (!gameOver)
	{
		if (humanScore === 5) {
			winnerText.textContent = "Winner: Player!";
		} else if (computerScore === 5) {
			winnerText.textContent = "Winner: Computer!";
		}
		resultOutput.appendChild(winnerText);
		gameOver = true;
	}
}

function playRound(humanSelection, computerSelection, winningPoints=5) {
	// console.log(humanScore);
	// console.log(computerScore);
	if (humanScore < winningPoints && computerScore < winningPoints)
	{
		// resultOutput.textContent = "";
		const msg = document.createElement("p");
		switch (humanSelection) {
			case "Rock":
				if (computerSelection === "Paper") {
					computerScore++;
					msg.textContent = "You lose! Paper beats Rock!\n"
					msg.setAttribute("class", "loserText");
				} else if (computerSelection === "Scissors") {
					humanScore++;
					msg.textContent = "You win! Rock beats Scissors!"
					msg.setAttribute("class", "winnerText");
				} else {
					msg.textContent = "Draw!"
				}
				break;
			case "Paper":
				if (computerSelection === "Scissors") {
					computerScore++;
					msg.textContent = "You lose! Scissors beats Paper!";
					msg.setAttribute("class", "loserText");
				} else if (computerSelection === "Rock") {
					humanScore++;
					msg.textContent = "You win! Paper beats Rock!";
					msg.setAttribute("class", "winnerText");
				} else {
					msg.textContent = "Draw!";
				}
				break;
			case "Scissors":
				if (computerSelection === "Rock") {
					computerScore++;
					msg.textContent = "You lose! Rock beats Scissors!";
					msg.setAttribute("class", "loserText");
				} else if (computerSelection === "Paper") {
					humanScore++;
					msg.textContent = "You win! Scissors beats Paper!";
					msg.setAttribute("class", "winnerText");
				} else {
					msg.textContent = "Draw!";
				}
				break;
		}
		// console.log(msg);
		// resultOutput.textContent += msg + '\n';
		resultOutput.appendChild(msg);
		// rounds++;
		// gameOver = true;
		if (humanScore === 5 || computerScore === 5)
			displayWinner();
	}
	updateScores();
}

function restartGame()
{
	gameOver = false;
	humanScore = 0;
	computerScore = 0;
	updateScores();
	resultOutput.innerHTML = "";
}

// Declare buttons

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

// Add event listeners here

rockBtn.addEventListener('click',() => playRound("Rock", getComputerChoice()));
paperBtn.addEventListener('click', () => playRound("Paper", getComputerChoice()));
scissorsBtn.addEventListener('click', () =>  playRound("Scissors", getComputerChoice()));

const restartBtn = document.querySelector('#restartBtn');
restartBtn.addEventListener('click', restartGame);

// game();