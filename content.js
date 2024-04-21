function hasKaufe2Text(element) {
  return element.textContent.includes("Kaufe 1");
}

function applyStyles(card) {
  card.style.backgroundColor = "#ffa50091";
  card.style.padding = "5px";
  card.style.borderRadius = "5px";
}

function highlightDeals() {
  const storeCards = document.querySelectorAll('[data-testid="store-card"]');
  storeCards.forEach((card) => {
    if (hasKaufe2Text(card) && !card.classList.contains("highlighted")) {
      applyStyles(card);
      card.classList.add("highlighted"); // Mark as styled to avoid re-styling
    }
  });
}

// Initial check
highlightDeals();

// Retry every 2 seconds for 10 seconds
let attempts = 0;
const intervalId = setInterval(() => {
  highlightDeals();
  attempts++;
  if (attempts >= 5) {
    clearInterval(intervalId); // Stop retrying after 5 attempts (10 seconds)
  }
}, 2000);
