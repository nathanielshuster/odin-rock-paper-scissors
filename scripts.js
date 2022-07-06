const move = ["rock", "paper", "scissors"];
let playerSelection = "paper";

function computerPlay() {
    return move[Math.floor(Math.random() * move.length)];
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

function playRound() {
    let player = prompt().toLowerCase()
    let computer = computerPlay()
    console.log(determineWinner(player, computer))
    return determineWinner(player, computer)
}

function playGame() {
    playerWins = 0;
    compWins = 0;
    draws = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === "you win.") {
            playerWins++;
        } else if (result === "you lose.") {
            compWins++;
        } else {
            draws++;
        }
    }

    if (playerWins > compWins) {
        return "you win the game."
    } else if (compWins > playerWins) {
        return "you lose the game"
    } else {
        return "game draw."
    }
}