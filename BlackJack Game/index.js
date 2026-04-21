let firstCard = 10
let secondCard = 8
let newcardN = 3

let sum = firstCard + secondCard
let message = ""
let cards = [firstCard,secondCard]

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


function startGame(){
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards:"
    for (let count = 0; count<cards.length; count+=1){
        cardEl.textContent += " "+ cards[count]
    }
    
    sumEl.textContent = `Sum: ${sum}`

    if (sum < 21){
        message = "Do you ant to draw a new card?"

    } else if (sum == 21){
        message= "Wohoo! You've got Blackjack! "

    } else {
        message = "You're out of the game! "
    }
    messageEl.textContent  = message
    
}


function newCard(){
    
    cards.push(newcardN)
    sum += newcardN
    renderGame()
}