const cards = document.querySelectorAll('.card');
const blackOverlay = document.querySelector('.black-overlay');
const centerText = document.querySelector('.center-text');

// Set an interval to shuffle the cards based on mouse position
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Shuffle cards based on mouse position
  shuffleCards(mouseX, mouseY);
});

// Function to shuffle cards based on mouse position
function shuffleCards(mouseX, mouseY) {
  cards.forEach((card, index) => {
    // Randomly vary the position of the cards based on the mouse
    const offsetX = mouseX + (Math.random() * 200 - 100); // Random horizontal position around mouse
    const offsetY = mouseY + (Math.random() * 200 - 100); // Random vertical position around mouse
    const scale = 0.8 + Math.random() * 0.4; // Random scale for each card

    // Adjust opacity to reveal cards
    card.style.opacity = 1;
    card.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;

    // Reset the position of cards after a short time (hide them again)
    setTimeout(() => {
      card.style.opacity = 0;
    }, 500); // Cards disappear after 500ms
  });
}

// Show the central text when the mouse hovers over it
blackOverlay.addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));

  if (distance < 100) {
    centerText.style.opacity = 1; // Reveal the central text when close to the middle
  } else {
    centerText.style.opacity = 0; // Hide the text when away from the middle
  }
});
