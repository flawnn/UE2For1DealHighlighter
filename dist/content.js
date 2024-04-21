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

const intervalId = setInterval(() => {
  highlightDeals();
}, 2000);
