// Game script

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const choices = ["Rock","Paper","Scissors"]
    const computerSelection = choices[Math.floor(Math.random() * choices.length)]

    return computerSelection
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        gameStatus.innerHTML = "It's a draw!"
    }
    else if ((playerSelection == "Rock" && computerSelection == "Paper") || 
            (playerSelection == "Paper" && computerSelection == "Scissors") || 
            (playerSelection == "Scissors" && computerSelection == "Rock")) {
            
            computerScore++

            if(computerScore == 5) {
                gameStatus.innerHTML = "Computer wins the game! Click the reset button to play again."
                disableButtons();
                showResetButton();
            } else {
                gameStatus.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`
            }
    }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Paper" && computerSelection == "Rock") || 
            (playerSelection == "Scissors" && computerSelection == "Paper")) {
            
            playerScore++

            if(playerScore == 5) {
                gameStatus.innerHTML = "You win the game! Click the reset button to play again."
                disableButtons();
                showResetButton();
            } else {
                gameStatus.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`
            }
    }

    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
    playerChoiceDisplay.innerHTML = displayPlayerChoice(playerSelection)

    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
    computerChoiceDisplay.innerHTML = displayPlayerChoice(computerSelection)
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

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener('click', () => resetGame())

function displayPlayerChoice(sign) {
    switch (sign) {
        case "Rock":
            return `<i class="fas fa-hand-rock"></i>`
        case "Paper":
            return `<i class="fas fa-hand-paper"></i>`
        case "Scissors":
            return `<i class="fas fa-hand-scissors"></i>`
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enableButtons() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

function resetScore() {
    computerScore = 0;
    playerScore = 0;
}

function showResetButton() {
    resetButton.style.display = "inline";
}

function hideResetButton() {
    resetButton.style.display = "none";
}

function resetDisplay() {
    playerScoreDisplay.innerHTML = `Player: ${playerScore}`;
    playerChoiceDisplay.innerHTML = ""

    computerScoreDisplay.innerHTML = `Computer: ${computerScore}`;
    computerChoiceDisplay.innerHTML = ""

    gameStatus.innerHTML = "Click a button to start the game"
}

function resetGame() {
    resetScore();
    resetDisplay();
    hideResetButton();
    enableButtons();
}