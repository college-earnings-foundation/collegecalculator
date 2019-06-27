console.log("calculator.js is linked to the index.html file");

class TabCard {
  constructor(card) {
    this.card = card;
    this.titleImage = card.querySelector(".titleImage");
    this.input = card.querySelector(".input-note");
    this.titleImage.addEventListener("click", event => {
      this.toggle();
    });
  }
  toggle() {
    console.log("titleImage was clicked!");
    this.titleImage.classList.remove("titleImage");
    this.titleImage.classList.add("toggle-title");
    this.input.classList.remove("input-note");
    this.input.classList.add("toggle-input");
  }
}

document.querySelectorAll(".cta-card").forEach(item => new TabCard(item));
