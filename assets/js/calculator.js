console.log("calculator.js is linked to the index.html file");

class TabCard {
  constructor(card) {
    this.card = card;
    this.titleImage = card.querySelector(".titleImage");
    this.input = card.querySelector(".input-note");
    this.card.addEventListener("click", event => {
      card.toggle();
    });
  }
  toggle() {}
}

document.querySelectorAll(".cta-card").forEach(item => new TabCard(item));
