let playerScore = 0;
let computerScore = 0;

let scoreTitle = document.querySelector("#score-title");

buttons = document.querySelectorAll(".buttons > img");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

let scores = document.querySelector("#scores");
function updateScore() {
  scores.innerText = `${playerScore} : ${computerScore}`;
}

function playRound(event) {
  let computerSelection = getComputerChoice();
  let playerSelection = event.currentTarget.dataset.selection;

  if (playerSelection === computerSelection) {
    scoreTitle.innerText = `You Drew This Round.`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    scoreTitle.innerText = `You Win This Round! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    scoreTitle.innerText = `You Lost This Round... ${computerSelection} beats ${playerSelection}`;
  }
  updateScore();
  if (playerScore >= 5 || computerScore >= 5) {
    removeButtons();
    endGame();
  }
}

function removeButtons() {
  buttons.forEach((button) => {
    button.removeEventListener("click", playRound);
  });
}

function getComputerChoice() {
  let computerChoice;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}

function endGame() {
  title = document.querySelector("#title");
  if (playerScore > computerScore) {
    title.innerText = `You win the match! ${playerScore} to ${computerScore}`;
  } else if (playerScore < computerScore) {
    title.innerText = `You lost the match... ${playerScore} to ${computerScore}`;
  } else {
    title.innerText = `You drew, tied at a score of ${playerScore}`;
  }
}
