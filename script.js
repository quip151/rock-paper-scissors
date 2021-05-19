//Declarations
let computerSelection
let playerSelection

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
    } else if ((playerSelection.toLowerCase() == "rock" ) && (computerSelection == "scissors")) {
        alert("You won! Rock beats scissors.")
    } else if ((playerSelection.toLowerCase() == "paper" ) && (computerSelection == "scissors")) {
        alert("You lost! Scissors beats paper.")
    } else if ((playerSelection.toLowerCase() == "paper" ) && (computerSelection == "rock")) {
        alert("You won! Paper beats rock.")
    } else if ((playerSelection.toLowerCase() == "scissors" ) && (computerSelection == "paper")) {
        alert("You won! Scissors beats paper.")
    } else if ((playerSelection.toLowerCase() == "scissors" ) && (computerSelection == "rock")) {
        alert("You lost! Rock beats scissors.")
    } else {
        alert("Something went horribly wrong")
    }
}

//loop to run game
for(i = 0; i < 5; i++ ) {
    computerChoice()
    playerChoice()
    game()
}

