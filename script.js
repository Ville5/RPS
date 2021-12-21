function playerPlay() {
    const playerPlay = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
    return playerPlay;
}

function computerPlay() {
    let computerPlay = Math.floor(Math.random() * 3);
        if (computerPlay == 0) {
            return "rock";
        } else if (computerPlay == 1) {
            return "paper";
        } else if (computerPlay == 2) {
            return "scissors";
        }
}


function playRound(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return "It's a tie";
    }   else if ((computerSelection == "paper" && playerSelection == "rock") ||
                (computerSelection == "rock" && playerSelection == "scissors") ||
                (computerSelection == "scissors" && playerSelection == "paper")) {
        return "You lose!";
    }   else {
        return "You win!";
    }
    
}    
const playerSelection = playerPlay();
const computerSelection = computerPlay();
const result = playRound(playerSelection, computerSelection);

console.log("player's choice", playerSelection);
console.log("computer's choice", computerSelection);
console.log("Result is", result);