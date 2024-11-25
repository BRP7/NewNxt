const cards = document.querySelectorAll('.card');
const blackOverlay = document.querySelector('.black-overlay');
const centerText = document.querySelector('.center-text');

// Mouse movement handler
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Shuffle cards based on mouse position
  shuffleCards(mouseX, mouseY);
});

// Function to shuffle cards close to the mouse
let currentCardIndex = 0; // Keeps track of which card to show
function shuffleCards(mouseX, mouseY) {
  const card = cards[currentCardIndex];

  // Move the card very close to the mouse (within 10px)
  card.style.opacity = 1; // Make the card visible
  card.style.transform = `translate(${mouseX}px, ${mouseY}px)`; // 10px offset from the mouse

  // Once the card is visible for a short time, it goes behind
  setTimeout(() => {
    card.style.opacity = 0; // Hide the card again
    currentCardIndex = (currentCardIndex + 1) % cards.length; // Move to the next card in the sequence
  }, 300); // Cards stay visible for 300ms before disappearing
}

// Show "Next Site" when mouse hovers near the center
document.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));

  if (distance < 100) {
    centerText.style.opacity = 1; // Reveal "Next Site" when close to the center
  } else {
    centerText.style.opacity = 0; // Hide it when away from the center
  }
});
