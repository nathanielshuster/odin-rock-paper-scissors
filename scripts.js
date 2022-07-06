function computerPlay() {
    let move = ["rock", "paper", "scissors"]
    return move[Math.floor(Math.random() * move.length)]
}