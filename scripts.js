const move = ["rock", "paper", "scissors"];
let playerSelection = "paper";
let computerSelection = "";

function computerPlay() {
    computerSelection = move[Math.floor(Math.random() * move.length)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let comp = computerSelection
    return determineWinner(player, comp)
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "draw.";
    } else if (player === "rock" && computer === "paper") {
        return "you lose.";
    } else if (player === "paper" && computer === "scissors") {
        return "you lose.";
    } else if (player === "scissors" && computer === "rock") {
        return "you lose.";
    } else {
        return "you win."
    }
}