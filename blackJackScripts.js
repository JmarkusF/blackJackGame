// 2. Create the player object. Give it two keys, name and chips, and set their values
let player = {name:"Fabio", chips: 150 }
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// 4. Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard() {
    // if 1     -> return 11
    let randomNumber = Math.floor(Math.random() * 13) + 1
    // if 11-13 -> return 10
    
    if (randomNumber === 1) {
       return 11
    } else if (randomNumber > 11) {
       return 10
    } else {
       return randomNumber
    }

}

// Create a new function called startGame() that calls renderGame()
function startGame() {
    isAlive = true
    // Generate two random numbes
    let num1 = getRandomCard()
    let num2 = getRandomCard()
    // Re-assign the cards and sum variables so that the game can start
    cards = [num1, num2]
    sum = num1 + num2
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
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
     // Push the card to the cards array
    cards.push(card)
    renderGame()
    }
}
