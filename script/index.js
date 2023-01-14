let firstCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let secondCard = Math.floor(Math.random() * (11 - 2 + 1) + 2);
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum > 21) {
    console.log("You're out of the game!")
    hasBlackJack = true
} else {
    console.log("Wohoo! You've got Black Jack!")
    isAlive = false
}
