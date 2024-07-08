let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackjack =false
let isAlive = true
let message = " "
let messageEl= document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



function getRandomCard(){
    return Math.floor(Math.random()*13)+1
}



function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent =  " Cards: "  
    for(let i=0; i<cards.length;i++){
       cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <=20){
        message = "Do you want to draw a new card?"
     } else if(sum === 21){
         message= " You've got Blackjack!"
         hasBlackjack = true
     }else  {
         message = " You're out  the game!"
         isAlive = false
     }
     
     
      messageEl.textContent = message
         
 }

 function newCard(){
    let card = getRandomCard()
    sum += card
//push the card to the cards array 
 cards.push(card)
 console.log(cards)

    renderGame()
 }


