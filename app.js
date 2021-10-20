let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const choices = ["rock","paper","scissors"]
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]
    
    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        console.log("It's a draw!")
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") || 
            (playerSelection == "scissors" && computerSelection == "rock")) {
            
            console.log(`"You lose! ${computerSelection} beats ${playerSelection}"`)

            computerScore++
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "scissors" && computerSelection == "paper")) {
            
            console.log(`"You win! ${playerSelection} beats ${computerSelection}`)

            playerScore++
    }
}

function game() {
    for (let i = 0; i < 50; i++) {
        if (computerScore == 5) {
            console.log("Game over! Computer wins. Refresh to play again.")
            return
        }
        if (playerScore == 5) {
            console.log("Game over! Player wins. Refresh to play again.")
            return
        }
        
        playRound();
    }
}