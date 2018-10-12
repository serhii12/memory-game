// Define first and second cards in global scope
let firstCard, secondCard = null;
// set flipped to false so we could perform checks
let hasFlipped = false;
// Select card board
const card = document.querySelector( '.memory-game' );
// Flip the card add class flip and store cards and compare
function flipCard() {
  this.classList.add( 'flip' );
  if ( !hasFlipped ) {
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
  if ( firstCard.dataset.framework === secondCard.dataset.framework ) {
    removeEventlistener();
  } else {
    removeClass();
  }
};

function removeEventlistener() {
  // remove the onClick event listener from that element so the user can't click it anymore
  firstCard.removeEventListener( 'click', flipCard );
  secondCard.removeEventListener( 'click', flipCard );
}

function removeClass() {
  // Remove class that turns the card around
  setTimeout( () => {
    firstCard.classList.remove( 'flip' );
    secondCard.classList.remove( 'flip' );
  }, 1000 );
}
const assets = [
	'angular',
	'aurelia',
	'backbone',
  'ember',
  'owl',
	'react',
	'vue',
	'bull',
	'angular',
	'aurelia',
  'backbone',
  'owl',
	'ember',
	'bull',
	'react',
	'vue',
];

function randomNumber( limit ) {
  return Math.floor( Math.random() * limit ) + 1;
}

function generateHTML( nameOfTheFile ) {
  return `
	<div class="card" data-framework="${nameOfTheFile}">
		<img class="front-face" src="assets/${nameOfTheFile}.svg" alt="${nameOfTheFile}" />
		<img class="back-face" src="assets/js-badge.svg" alt="JS Badge" />
	</div>`;
}
const html = assets.map( generateHTML ).join( '' );
card.innerHTML = html;
// Select all of the cards 
const cards = document.querySelectorAll( '.card' );
// add EventListeners to each card on the board
cards.forEach( card => card.addEventListener( 'click', flipCard ) );
// Put the cards into random position each time page load or reload button clicked
function shuffleCards() {
  cards.forEach( card => {
    card.style.order = randomNumber( 12 );
    // RandomNumber will be determined by user difficulty
    // Easy 12
    // Hard 
    // Impossible
  } );
};