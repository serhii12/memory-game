// Define first and second cards in global scope
let firstCard, secondCard = null;
// set flipped to false so we could perform checks
let hasFlipped = false;
let isComparing = false;
let totalCards = 0;
// Select card board
const card = document.querySelector('.memory-game');
// Flip the card add class flip and store cards and compare
function flipCard() {
  if (isComparing) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  totalCards++;
  if (totalCards === 2) {
    setTimeout(() => {
      alert('You won!');
    }, 200);
  }
  console.log(totalCards);
  if (!hasFlipped) {
    hasFlipped = true;
    // Set the first card to clicked card
    firstCard = this;
    // exit
    return;
  }
  // Set the second card to clicked card
  secondCard = this;
  compareValues();
}
const compareValues = () => {
  // Check dataset value of the cards
  if (firstCard.dataset.main === secondCard.dataset.main) {
    removeEventlistener();
  } else {
    removeClass();
  }
}
const removeEventlistener = () => {
  // remove the onClick event listener from that element so the user can't click it 
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}
const removeClass = () => {
  // Remove class that turns the card around
  isComparing = true;
  totalCards -= 2;
  console.log(totalCards);
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000);
}
const resetBoard = () => {
  [hasFlipped, isComparing] = [false, false];
  [firstCard, secondCard] = [null, null];
}
const assetsNames = ['angular', 'aurelia', 'backbone', 'ember', 'owl', 'react', 'vue', 'bull', 'angular', 'aurelia', 'backbone', 'owl', 'ember', 'bull', 'react', 'vue', ];
const randomNumber = limit => {
  return Math.floor(Math.random() * limit) + 1;
}
const generateHTML = nameOfTheFile => {
  return `
  <div class="card" data-main="${nameOfTheFile}">
		<img class="front-face" src="assets/${nameOfTheFile}.svg" alt="${nameOfTheFile}" />
		<img class="back-face" src="assets/js-badge.svg" alt="JS Badge" />
	</div>`;
}
const shuffleCards = () => {
  // Put the cards into random position each time page load or reload button clicked
  cards.forEach(card => {
    card.style.order = randomNumber(assetsNames.length);
    // RandomNumber will be determined by user difficulty
    // Easy 12
    // Hard 
    // Impossible
  });
};
const html = assetsNames.map(generateHTML).join('');
card.innerHTML = html;
// Select all of the cards 
const cards = document.querySelectorAll('.card');
// add EventListeners to each card on the board
cards.forEach(card => card.addEventListener('click', flipCard));
const load = () => {
  shuffleCards();
}
window.onload = load;

console.log(totalCards);
