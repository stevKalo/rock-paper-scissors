function getComputerChoice() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  let value = getRandomIntInclusive(1, 3);
  let answer;
  value == 1
    ? (answer = "Rock")
    : value == 2
    ? (answer = "Paper")
    : (answer = "Scissors");
  return answer;
}
let computerSelection = getComputerChoice();

function capitalize(word) {
  let first = word.slice(0, 1);
  let rest = word.slice(1);
  return first.toUpperCase() + rest.toLowerCase();
}

let playerInput = "RoCK";
let playerSelection = capitalize(playerInput);

function playRound(computer, player) {
  let outcome;
  if (computer == player) {
    outcome = "It's a Tie! No Points!";
  } else if (
    (computer == "Rock" && player == "Scissors") ||
    (computer == "Paper" && player == "Rock") ||
    (computer == "Scissors" && player == "Paper")
  ) {
    outcome = `You Lose! ${computer} beats ${player}`;
  } else if (
    (computer == "Rock" && player == "Paper") ||
    (computer == "Paper" && player == "Scissors") ||
    (computer == "Scissors" && player == "Rock")
  ) {
    outcome = `You Win! ${player} beats ${computer}`;
  }
  return outcome;
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  let round1 = playRound(getComputerChoice(), playerSelection);
  if (round1.includes("Win")) {
    playerScore = ++playerScore;
    console.log(`Player Score is ${playerScore}`);
  } else if (round1.includes("Lose")) {
    computerScore = ++computerScore;
    console.log(`Computer Score is ${computerScore}`);
  } else {
    console.log("No points awarded");
  }

  let round2 = playRound(getComputerChoice(), playerSelection);
  if (round2.includes("Win")) {
    playerScore = ++playerScore;
    console.log(`Player Score is ${playerScore}`);
  } else if (round2.includes("Lose")) {
    computerScore = ++computerScore;
    console.log(`Computer Score is ${computerScore}`);
  } else {
    console.log("No points awarded");
  }

  let round3 = playRound(getComputerChoice(), playerSelection);
  if (round2.includes("Win")) {
    playerScore = ++playerScore;
    console.log(`Player Score is ${playerScore}`);
  } else if (round2.includes("Lose")) {
    computerScore = ++computerScore;
    console.log(`Computer Score is ${computerScore}`);
  } else {
    console.log("No points awarded");
  }

  let round4 = playRound(getComputerChoice(), playerSelection);
  if (round4.includes("Win")) {
    playerScore = ++playerScore;
    console.log(`Player Score is ${playerScore}`);
  } else if (round4.includes("Lose")) {
    computerScore = ++computerScore;
    console.log(`Computer Score is ${computerScore}`);
  } else {
    console.log("No points awarded");
  }

  let round5 = playRound(getComputerChoice(), playerSelection);
  if (round5.includes("Win")) {
    playerScore = ++playerScore;
    console.log(`Player Score is ${playerScore}`);
  } else if (round5.includes("Lose")) {
    computerScore = ++computerScore;
    console.log(`Computer Score is ${computerScore}`);
  } else {
    console.log("No points awarded");
  }

  if (computerScore > playerScore) {
    return "You Lose!";
  } else if (playerScore > computerScore) {
    return "You Win!";
  } else {
    return "It's a Tie!";
  }
}

console.log(game());
