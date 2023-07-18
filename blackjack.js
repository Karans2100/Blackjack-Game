let cards = [];
let sum = 0;
let message = "";
let hasBlackJack = false;
let isAlive = false;
let cardEl = document.querySelector("#card-el").textContent;

let player = {
    name: "Karan",
    credits: 100
};
document.querySelector("#player-el").textContent = player.name + ": $" + player.credits;

function randomCard() {
    const random = Math.floor(Math.random() * 13) + 1;
    if(random === 1) {
        return 11;
    }
    else if(random > 10) {
        return 10;
    }
    else {
        return random;
    }
}

function startGame() {
    //Here you are starting the game so all the essential variables for the game 
    //will only be declared when start game button is clicked
    isAlive = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    player.credits -= 2;
    document.querySelector("#player-el").textContent = player.name + ": $" + player.credits;

    renderGame();
}

function renderGame() {
    cardEl = "Cards: ";
    let sumEl = "Sum: " + sum;
    for(let i = 0; i < cards.length; i ++) {
        cardEl += cards[i] + " ";
    }

    if(sum <= 20) {
        message = "Do you want to draw a new card?";
        document.querySelector("#new-card-el").style.display = "inline-block";
        document.querySelector("#new-game-el").style.display = "none";
        document.querySelector("#start-game-el").style.display = "none";
    }
    else if(sum === 21) {
        message = "Wohoo! You've got a BlackJack";
        hasBlackJack = true;
        document.querySelector("#new-card-el").style.display = "none";
        document.querySelector("#new-game-el").style.display = "inline-block";
        player.credits += 10;
        document.querySelector("#player-el").textContent = player.name + ": $" + player.credits;
    }
    else {
        message = "You're out of the game!";
        isAlive = false;
        document.querySelector("#new-card-el").style.display = "none";
        document.querySelector("#new-game-el").style.display = "inline-block";
    }
    document.querySelector("#message").textContent = message;
    document.querySelector("#sum-el").textContent = sumEl;
    document.querySelector("#card-el").textContent = cardEl;
}

function newCard() {
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();
}

function newGame() {
    message = "";
    hasBlackJack = false; 
    cardEl = document.querySelector("#card-el").textContent;
    startGame();
}