let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl =document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")


function startGame() {
// 3. Render the cars on the page using this format -> "Cards: 10 4"
cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
sumEl.textContent = "Sum: " + sum  
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

messageEl.textContent = message
}
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard () {
    console.log("Drawing a new card from the deck!")
 // 1. Create a card variable, and hard code its value to a number (2-11)
let card = 5
// 2. Add the new card to the sum variable
sum += card
// 3. Call startGame()
startGame()
}
