let firstCard = 10
let secondCard = 4
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl =document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    // 2. Refer to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: "
     // Create a for loop that renders out all the cards instead of just two
     for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
     }
    

    sumEl.textContent = "Sum: " + sum  
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message
}

function newCard () {
    let card = 5
    sum += card
     // Push the card to the cards array
    cards.push(card)
    renderGame()
}
