let firstCard = randomCard();
let secondCard = randomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let message = "";
let hasBlackJack = false;
let isAlive = true;
let cardEl = document.querySelector("#card-el").textContent;

function randomCard() {
    return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
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
    firstCard = randomCard();
    secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    message = "";
    hasBlackJack = false;
    isAlive = true;
    cardEl = document.querySelector("#card-el").textContent;
    startGame();
}