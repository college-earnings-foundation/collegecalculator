console.log("index.js is linked to the index.html file");

class TabCard {
  constructor(card) {
    this.card = card;
  }
}

allTabs = document
  .querySelectorAll(".cta-card")
  .forEach(item => new TabCard(item));
