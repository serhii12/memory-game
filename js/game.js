	//function generateHTML([h, v]) {
	// 	return `
	// 	<div class="memory-card" data-framework="aurelia">
	// 		<img class="front-face" src="assets/${}" alt="Aurelia" />
	// 		<img class="back-face" src="assets/${}" alt="JS Badge" />
	// 	</div>
	// 	`;
	// }

// Define first and second card in global scope
let firstCard, secondCard;
// Check if card has been flipped
let hasFlipped = false;
// Select all of the cards 
const cards = document.querySelectorAll('.memory-card');
// Load all event listeners
loadEventListeners();
// Events
function loadEventListeners() {
  //  add EventListeners to each card on the board
  cards.forEach(card => card.addEventListener('click', flipCard));
}
// Flip the card add class flip and store cards and compare
function flipCard() {
  this.classList.add('flip');
  if (!hasFlipped) {
		hasFlipped = true;
		// Set the first card to clicked card
		firstCard = this;
		// exit
    return;
	}
	// Set the second card to clicked card
	secondCard = this;
  hasFlipped = false;
  compareValues();
}
function compareValues() {
	// Check dataset value of the cards
  if (firstCard.dataset.framework !== secondCard.dataset.framework) {
		setTimeout(() => {
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
		}, 500);
	}
};

// Put the cards into random position each time page load or reload button clicked
(function shuffleCards() {
  cards.forEach(card => {
		let randonSpot = Math.floor(Math.random() * 12);
		card.style.order = randonSpot;
	});
})();