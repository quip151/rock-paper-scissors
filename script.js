let computerSelection
function computerChoice () {
    let randNum = Math.floor(Math.random() * 3) + 1
    switch (randNum) {
        case 1:
            computerSelection = "Rock"
            break;
        case 2:
            computerSelection = "Paper"
            break;
        case 3:
            computerSelection = "Scissors"        
    }
}
//To test the function
//computerChoice()
//console.log(computerSelection)