let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    if (Math.abs(currentHumanGuess - target) < Math.abs(computerGuess - target)) {
        return true;
    } else if (Math.abs(computerGuess - target) < Math.abs(currentHumanGuess - target)) {
        return false;
    } else {
        return true;
    }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
