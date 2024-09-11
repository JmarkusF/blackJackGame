// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard()
let secondCard = getRandomCard()
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl =document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

// 1. Create a function, getRandomCard(), that always returns the number 5
// Make this function return a random number between 1 and 13
function getRandomCard() {
     // if 1     -> return 11
    return Math.floor(Math.random() * 13) + 1)
     // if 11-13 -> return 10
     
}



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
   // 3. Use the getRandomCard() to set the value of card
function newCard () {
    let card = getRandomCard()
    sum += card
     // Push the card to the cards array
    cards.push(card)
    renderGame()
}
