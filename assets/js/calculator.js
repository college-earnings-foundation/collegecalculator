console.log("calculator.js is linked to the index.html file");

class TabCard {
  constructor(card) {
    this.card = card;
    this.titleImage = card.querySelector(".titleImage");
    this.input = card.querySelector(".input-note");
    this.inputBox = card.querySelector("input");
    this.titleImage.addEventListener("click", event => {
      this.toggle();
    });

    this.inputBox.addEventListener("keyup", event => {
      if (event.keycode === 13 || event.which === 13) {
        this.enterText();
      }
    });
  }

  toggle() {
    this.titleImage.classList.remove("titleImage");
    this.titleImage.classList.add("toggle-title");
    this.input.classList.remove("input-note");
    this.input.classList.add("toggle-input");
  }
  enterText() {
    this.titleImage.classList.add("titleImage");
    this.titleImage.classList.remove("toggle-title");
    this.input.classList.add("input-note");
    this.input.classList.remove("toggle-input");
  }
}

document.querySelectorAll(".cta-card").forEach(item => new TabCard(item));
