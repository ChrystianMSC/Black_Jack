let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let newCard = 0
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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
    newCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
    console.log(newCard)
}
