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

// Function to shuffle cards around the mouse
function shuffleCards(mouseX, mouseY) {
  cards.forEach((card, index) => {
    // Each card gets a random offset around the mouse position
    const offsetX = (Math.random() * 200 - 100); // Random horizontal offset
    const offsetY = (Math.random() * 200 - 100); // Random vertical offset
    const scale = 0.8 + Math.random() * 0.4; // Random scale for some depth effect

    // Set position and visibility of the cards
    card.style.opacity = 1;
    card.style.transform = `translate(${mouseX + offsetX}px, ${mouseY + offsetY}px) scale(${scale})`;

    // Set a timeout to make cards disappear after a short duration
    setTimeout(() => {
      card.style.opacity = 0; // Fade out the cards after the shuffle
    }, 200); // Cards fade out after 200ms (adjust as needed)
  });
}

// Show the central text when the mouse hovers near the center
document.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));

  if (distance < 100) {
    centerText.style.opacity = 1; // Reveal the central text when close to the center
  } else {
    centerText.style.opacity = 0; // Hide the text when away from the center
  }
});
