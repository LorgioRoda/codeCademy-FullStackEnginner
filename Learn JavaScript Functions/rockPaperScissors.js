const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Error')
  }
}

const getComputerChoice = () => {
  let randoomNumber = Math.floor(Math.random()*3)
  switch(randoomNumber) {
    case 0:
      return 'rock'
    break;
    case 1:
      return 'paper'
    break;
    case 2:
      return 'scissors'
    break
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice===computerChoice) {
    return 'Tied';
  }else if(userChoice == 'rock' && computerChoice == "paper" ){
    return 'Computer win'
  }else if(userChoice == 'paper' && computerChoice == "scissors" ){
    return 'Computer win'
  }else if (userChoice == 'scissors' && computerChoice == "rock" ){
    return 'Computer win'
  }else if (userChoice === 'bomb'){
    return 'You win bro'
  }else {
    return 'You win'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log(`Your threw: ${userChoice}`)
  console.log(`The computer threw: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()