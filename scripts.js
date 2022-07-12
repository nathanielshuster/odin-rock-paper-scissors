const move = ["rock", "paper", "scissors"];
let playerSelection = "paper";

function computerPlay() {
    return move[Math.floor(Math.random() * move.length)];
}

function determineWinner(player, computer) {
    let resultPara = document.querySelector('.game-result');

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
    let resultsDiv = document.querySelector('.match-result');
    let gameResult = document.createElement('p');
    playerWins = 0;
    compWins = 0;
    draws = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(e);
        if (result === "you win.") {
            playerWins++;
            gameResult.textContent = "W"
            resultsDiv.appendChild(gameResult)
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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playGame))