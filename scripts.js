const move = ["rock", "paper", "scissors"];
let record = {
    wins: 0,
    losses: 0
}

function computerPlay() {
    return move[Math.floor(Math.random() * move.length)];
}

function displayWinner(player, computer) {
    let resultPara = document.querySelector('.round-result');

    if (player === computer) {
        resultPara.textContent = 'result: draw.';
        return "draw";
    } else if (player === move[0] && computer === move[1]) {
        resultPara.textContent = 'result: loss.'
        return "losses";
    } else if (player === move[1] && computer === move[2]) {
        resultPara.textContent = 'result: loss.'
        return "losses";
    } else if (player === move[2] && computer === move[0]) {
        resultPara.textContent = 'result: loss.'
        return "losses";
    } else {
        resultPara.textContent = 'result: win.'
        return "wins";
    }
}

function displayChoices(player, computer) {
    let playerPara = document.querySelector('.player-choice');
    playerPara.textContent = `you played: ${player}`;
    let compPara = document.querySelector('.computer-choice');
    compPara.textContent = `computer played: ${computer}`;
}

function updateRecord(outcome, record) {
    let recordPara = document.querySelector('.player-record');

    if (outcome === "wins") {
        record[outcome]++
        recordPara.textContent = `record: ${record["wins"]}-${record["losses"]}`;
    } else if (outcome === "losses") {
        record[outcome]++
        recordPara.textContent = `record: ${record["wins"]}-${record["losses"]}`;
    } else {
        return;
    }
}

function updateMatchResult(record) {
    let resultPara = document.querySelector('.match-result');

    if (record["wins"] + record["losses"] < 5) {
        return;
    } else if (record["wins"] > record["losses"]) {
        resultPara.textContent = "you win the match."
    } else if (record["wins"] < record["losses"]) {
        resultPara.textContent = "you lose the match."
    }
}

function resetRecord(record) {
    if (record["wins"] + record["losses"] < 5) {
        return;
    } else {
        return record = {
            wins: 0,
            losses: 0
        };
    }
}

function playRound(e) {
    resetRecord(record);
    let player = e.target.id;
    let computer = computerPlay();
    displayChoices(player, computer);
    let winner = displayWinner(player, computer);

    updateRecord(winner, record);
    updateMatchResult(record);
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound))