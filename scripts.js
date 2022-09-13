const move = ["rock", "paper", "scissors"];

function computerPlay() {
    return move[Math.floor(Math.random() * move.length)];
}

function roundResult(player, computer) {
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
    let aiPara = document.querySelector('.computer-choice')
    aiPara.textContent = `computer played: ${computer}`
    return roundResult(player, computer);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound))