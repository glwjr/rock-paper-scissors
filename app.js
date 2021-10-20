// Game script

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const choices = ["Rock","Paper","Scissors"]
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]

    return computerSelection
}

function playRound(playerSelection, computerSelection) {

    if (computerScore == 5) {
        gameStatus.innerHTML = "Game over! Computer wins. Refresh to play again."
        return
    }

    if (playerScore == 5) {
        gameStatus.innerHTML = "You win the game! Refresh to play again."
        return
    }

    if (playerSelection == computerSelection) {
        gameStatus.innerHTML = "It's a draw!"
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") || 
            (playerSelection == "Paper" && computerSelection == "Scissors") || 
            (playerSelection == "Scissors" && computerSelection == "Rock")) {
            
            computerScore++
            gameStatus.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Paper" && computerSelection == "Rock") || 
            (playerSelection == "Scissors" && computerSelection == "Paper")) {
            
            playerScore++
            gameStatus.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`
    }

    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
    playerChoiceDisplay.innerHTML = playerSelection

    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
    computerChoiceDisplay.innerHTML = computerSelection
}

// UI

let playerScoreDisplay = document.getElementById("player-score");
let playerChoiceDisplay = document.getElementById("player-choice");
let computerScoreDisplay = document.getElementById("computer-score");
let computerChoiceDisplay = document.getElementById("computer-choice");

let rockButton = document.getElementById("rock-button");
rockButton.addEventListener('click', () => playRound("Rock", computerPlay()));

let paperButton = document.getElementById("paper-button");
paperButton.addEventListener('click', () => playRound("Paper", computerPlay()));

let scissorsButton = document.getElementById("scissors-button");
scissorsButton.addEventListener('click', () => playRound("Scissors", computerPlay()))

let gameStatus = document.getElementById("game-status");