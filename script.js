//Declarations
let computerSelection
let playerSelection
let playerScore = 0
let computerScore = 0

//Computer choice randomizer
function computerChoice () {
    let randNum = Math.floor(Math.random() * 3) + 1
    switch (randNum) {
        case 1:
            computerSelection = "rock"
            break;
        case 2:
            computerSelection = "paper"
            break;
        case 3:
            computerSelection = "scissors"        
    }
}

//Player choice input
function playerChoice () {
    playerSelection = window.prompt("Enter your choice for the rock, paper, scissors game" , "Enter rock, paper or scissors")
}

//game
function game () {
    if (playerSelection.toLowerCase() == computerSelection) {
        alert("Draw! Both you and the computer chose " + computerSelection + ".")
    } else if ((playerSelection.toLowerCase() == "rock" ) && (computerSelection == "paper")) {
        alert("You lost! Paper beats rock.")
        computerScore++
    } else if ((playerSelection.toLowerCase() == "rock" ) && (computerSelection == "scissors")) {
        alert("You won! Rock beats scissors.")
        playerScore++
    } else if ((playerSelection.toLowerCase() == "paper" ) && (computerSelection == "scissors")) {
        alert("You lost! Scissors beats paper.")
        computerScore++
    } else if ((playerSelection.toLowerCase() == "paper" ) && (computerSelection == "rock")) {
        alert("You won! Paper beats rock.")
        playerScore++
    } else if ((playerSelection.toLowerCase() == "scissors" ) && (computerSelection == "paper")) {
        alert("You won! Scissors beats paper.")
        playerScore++
    } else if ((playerSelection.toLowerCase() == "scissors" ) && (computerSelection == "rock")) {
        alert("You lost! Rock beats scissors.")
        computerScore++
    } else {
        alert("Something went horribly wrong...")
    }
}

//loop to run game
for(i = 0; i < 5; i++ ) {
    computerChoice()
    playerChoice()
    game()
}
if (playerScore > computerScore) {
    alert("You won! The final score is " + playerScore + "-" + computerScore + ".")
} else if (computerScore > playerScore) {
    alert("You lost! The final score is " + computerScore + "-" + playerScore + ".")
} else if (computerScore == playerScore) {
    alert("Draw! The final score is " + playerScore + "-" + computerScore + ".")
} else {
    alert("Something's not right...")
}

