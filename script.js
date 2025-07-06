const items = ["Rock", "Paper", "Scissors"];

var humanScore,
  computerScore = 0;

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

function playRound(humanSelection, computerSelection) {
  switch (humanSelection) {
    case "Rock":
      if (computerSelection === "Paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock!");
      } else if (computerSelection === "Scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors!");
      }
      break;
    case "Paper":
      if (computerSelection === "Scissors") {
        computerScore++;
        console.log("You lose! Scissors beats Paper!");
      } else if (computerSelection === "Rock") {
        humanScore++;
        console.log("You win! Paper beats Rock!");
      }
      break;
    case "Scissors":
      if (computerSelection === "Rock") {
        computerScore++;
        console.log("You lose! Rock beats Scissors!");
      } else if (computerSelection === "Paper") {
        humanScore++;
        console.log("You win! Scissors beats Paper!");
      }
      break;
  }
}

// Declare buttons

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

// Add event listeners here

rockBtn.addEventListener('click', playRound("Rock", getComputerChoice()));
paperBtn.addEventListener('click', playRound("Paper", getComputerChoice()));
scissorsBtn.addEventListener('click', playRound("Scissors", getComputerChoice()));


// game();