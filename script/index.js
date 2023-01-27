let cards = []
let card = 0
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "You",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    console.log(isAlive)
    let firstCard = randomCard();
    let secondCard = randomCard();  
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false
    } else {
        hasBlackJack = true
        message = "Wohoo! You've got Black Jack!"
    }
    messageEl.textContent = message
}

function drawCard(){
    if (isAlive === true && hasBlackJack === false) {
        card = randomCard();
        cards.push(card)
        sum += card
        renderGame()
    }
}


function randomCard(){
    return Math.floor(Math.random() * (11 - 2 + 1) + 2);
}