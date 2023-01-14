let firstCard = randomCard();
let secondCard = randomCard();
let cards = [firstCard, secondCard]
let card = 0
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
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
        hasBlackJack = true
        isAlive = false
    } else {
        message = "Wohoo! You've got Black Jack!"
    }
    messageEl.textContent = message
}

function drawCard(){
    card = randomCard();
    cards.push(card)
    sum += card
    renderGame()
}


function randomCard(){
    return Math.floor(Math.random() * (11 - 2 + 1) + 2);
}