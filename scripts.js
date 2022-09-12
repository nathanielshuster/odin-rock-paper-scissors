const move = ["rock", "paper", "scissors"];
let playerSelection = "paper";

function computerPlay() {
    return move[Math.floor(Math.random() * move.length)];
}

function determineWinner(player, computer) {
    let resultPara = document.querySelector('.round-result');

    if (player === computer) {
        resultPara.textContent = 'result: draw.';
    } else if (player === "rock" && computer === "paper") {
        resultPara.textContent = 'result: loss.'
    } else if (player === "paper" && computer === "scissors") {
        resultPara.textContent = 'result: loss.'
    } else if (player === "scissors" && computer === "rock") {
        resultPara.textContent = 'result: loss.'
    } else {
        resultPara.textContent = 'result: win.'
    }
}

function playRound(e) {
    let player = e.target.id;
    let computer = computerPlay();
    let playerPara = document.querySelector('.player-choice')
    playerPara.textContent = `you played: ${player}`
    let aiPara = document.querySelector('.ai-choice')
    aiPara.textContent = `computer played: ${computer}`
    return determineWinner(player, computer);
}

function playGame(e) {
    let winPara = document.querySelector('.player-wins')
    let lossPara = document.querySelector('.player-losses')
    let finalResult = document.querySelector('.match-result')
    let playerWins = 0;
    let playerLosses = 0;

    while (playerWins + playerLosses < 5) {
        let result = playRound(e);
        if (result === "you win.") {
            playerWinCount++;
            winPara.textContent = `wins: ${playerWinCount}`
        } else if (result === "you lose.") {
            playerLossCount++;
            lossPara.textContent = `losses: ${playerLossCount}`
        } else {
            continue;
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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playGame))