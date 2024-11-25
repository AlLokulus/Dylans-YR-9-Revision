// script.js

// Flashcards data
const flashcards = [
  { description: "Conductors crossing with no connection", symbol: "—\\  /—" },
  { description: "Junction of conductors", symbol: "—|—" },
  { description: "Open switch", symbol: "—o/ o—" },
  { description: "Closed switch", symbol: "—o—o—" },
  { description: "Open push switch", symbol: "—/ /—" },
  { description: "Closed push switch", symbol: "—|——" },
  { description: "Cell", symbol: "|— | |—" },
  { description: "Battery of cells", symbol: "|— | | ||—" },
  { description: "Power supply (d.c.)", symbol: "+ ---" },
  { description: "Ammeter", symbol: "| A |" },
  { description: "Voltmeter", symbol: "| V |" }
];

let currentIndex = 0;
let showingSymbol = false;

// DOM Elements
const cardContent = document.getElementById("card-content");
const flipButton = document.getElementById("flip-btn");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

// Functions
function updateCard() {
  const currentCard = flashcards[currentIndex];
  cardContent.textContent = showingSymbol ? currentCard.symbol : currentCard.description;
}

function flipCard() {
  showingSymbol = !showingSymbol;
  updateCard();
}

function nextCard() {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showingSymbol = false;
  updateCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  showingSymbol = false;
  updateCard();
}

// Event Listeners
flipButton.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);
prevButton.addEventListener("click", prevCard);

// Initialize
updateCard();
