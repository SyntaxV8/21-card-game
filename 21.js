let deck = [
        2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
        2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

let player;
let computer;
let randomCard;
let totalPlayer; //make array instead of var

card = () => {
    randomCard = deck[Math.floor(Math.random() * deck.length)] // work with return
}

startGame = () => {

    document.getElementById('run').addEventListener('click', function () {

        player = deck[Math.floor(Math.random() * deck.length)]
        computer = deck[Math.floor(Math.random() * deck.length)]
        document.getElementById('player').innerHTML = randomCard;
        document.getElementById('computer').innerHTML = computer;
    })
}

startGame()

draw = () => {

    card()

    document.getElementById("draw").addEventListener("click", function () {

        document.getElementById('player').innerHTML = randomCard;
        totalPlayer = player + randomCard
        document.getElementById('totalPlayer').innerHTML = totalPlayer


        if (totalPlayer > 21) {
            document.getElementById('score').innerHTML = 'You lose! You busted!'
        } else if (totalPlayer == 21) {
            document.getElementById('score').innerHTML = 'Congratulations, Blackjack! You win!'
        } else {
            player = totalPlayer
            draw()
        }
    })
}

draw()