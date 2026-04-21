let isAlive = false
let newGame = false
let alreadyPlaying = true


let sum = 0
let message = ""
let cards = []

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")


function getRandomCard(){
    let num1 = Math.floor((Math.random()*13)) + 1
    if (num1 == 1){
        return 11
    }
    else if(num1>10){
        return 10
    }
    else{
        return num1
    }
}

function startGame(){
    

    if(alreadyPlaying){
        isAlive = true
        let card1 = getRandomCard()
        let card2 = getRandomCard()
        let initialCards = [card1,card2]

        for (let i = 0; i<initialCards.length;i+=1){
            cards.push(initialCards[i])
        }
        sum = card1 + card2
    }
    alreadyPlaying = false

    renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: "

    for (let count = 0; count<cards.length; count+=1) {
        if (cards[count] == 11){
            cardEl.textContent +=  "ACE" + " "
        }
        else{
            cardEl.textContent +=  cards[count] + " "
        }
        
    }
    
    sumEl.textContent = `Sum: ${sum}`

    if (sum < 21){
        message = "Do you ant to draw a new card?"

    } else if (sum == 21){
        message= "Wohoo! You've got Blackjack! "

    } else {
        message = "You're out of the game! "
        isAlive =  false
        alreadyPlaying = true
        if(!isAlive && !newGame){
            sum = 0
            cards = []
        }
        
    }

    messageEl.textContent  = message
    
}


function newCard(){
    if (isAlive){
        let newcardN = getRandomCard()
        cards.push(newcardN)
        sum += newcardN
        
    }
    
    renderGame()
    
}

