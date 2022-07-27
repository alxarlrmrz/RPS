function computerPlay() {
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)]
  }
  
  function playerChoice() {
    let playerChoice = prompt("rock, paper, or scissors?");
    switch(playerChoice) {
        case 'rock' :
            playerChoice = 'rock'
            break
        case 'paper' :
            playerChoice = 'paper'
            break
        case 'scissors' :
            playerChoice = 'scissors'
            break
    }
  
    return playerChoice
  }
  
  function playRound (playerSelection, computerSelection) {
  
    if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore ++;
        console.log(`You loose! Paper beats Rock! Your score : ${playerScore} Computer Score : ${computerScore}`);
    } else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore ++;
        console.log(`You win! Rock beats scissors! Your score : ${playerScore} Computer Score : ${computerScore}`);
    } else if(playerSelection === 'rock' && computerSelection === 'rock'){
        console.log(`Draw! Try again! Your score : ${playerScore} Computer Score : ${computerScore}`);
    } else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore ++;
        console.log(`You win! Paper beats Rock! Your score : ${playerScore} Computer Score : ${computerScore}`);
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore ++;
        console.log(`You loose! Scissors beats paper! Computer Score : ${computerScore}`);
    } else if(playerSelection === 'paper' && computerSelection === 'paper'){
        console.log(`Draw! Try again! Your score : ${playerScore} Computer Score : ${computerScore}`);
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore ++;
        console.log(`You loose! Rock beats scissors! Your score : ${playerScore} Computer Score : ${computerScore}`);
    } else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScore ++;
        console.log(`You win! Scissors beats paper! Your score : ${playerScore} Computer Score : ${computerScore}`);
    } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        console.log(`Draw! Try again! Your score : ${playerScore} Computer Score : ${computerScore}`);
    } else{
        console.log(`Invalid answer`);
    }
  
  }
  
  let computerScore = 0
  let playerScore = 0
  
  for(let i = 0; i < 5; i++){
    let playerSelection = prompt("rock, paper, or scissors?");
    computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
    if(playerScore > computerScore){
        console.log(`You won the game!`);
    } else{
        console.log(`You lost the game!`);
    }
  }