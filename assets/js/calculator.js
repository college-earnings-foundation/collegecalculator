console.log("calculator.js is linked to the calculator.html file");

this.allTitleImages = document.querySelectorAll(".titleImage");
this.allInput = document.querySelectorAll(".input-note");

container = document.querySelector(".container");

container.addEventListener("click", event => {
  allTitleImages.forEach(item => {
    item.classList.add("titleImage");
    item.classList.remove("toggle-title");
  });

  allInput.forEach(item => {
    item.classList.add("input-note");
    item.classList.remove("toggle-input");
  });
});

finalOutput = document.querySelector(".output");

finalOutput.addEventListener("click", event => {
  addInputs();
  event.stopPropagation();
});

function addInputs() {
  let numList = [];
  boxvalue = document.querySelectorAll(".input").forEach(item => {
    if (isNaN(parseInt(item.value, 10))) {
      return null;
    } else {
      numList.push(parseInt(item.value, 10));
    }
  });
  finalTotal = numList.reduce((total, item) => {
    return (total += item);
  }, 0);
  return "$"+finalTotal;
}

class TabCard {
  constructor(card) {
    this.card = card;
    this.titleImage = card.querySelector(".titleImage");
    this.input = card.querySelector(".input-note");
    this.allTitleImages = document.querySelectorAll(".titleImage");
    this.allInput = document.querySelectorAll(".input-note");
    this.checkCard = card.querySelector("h4");
    this.card.addEventListener("click", event => {
      this.toggle();
      event.stopPropagation();
    });
  }

  toggle() {
    this.allTitleImages.forEach(item => {
      item.classList.add("titleImage");
      item.classList.remove("toggle-title");
    });

    this.allInput.forEach(item => {
      item.classList.add("input-note");
      item.classList.remove("toggle-input");
    });

    if (this.checkCard.textContent === "Total Cost:") {
      let displayTotal = this.card.querySelector("p");
      displayTotal.textContent = addInputs();

      this.input.classList.remove("input-note");
      this.input.classList.add("toggle-input");
    } else {
      this.titleImage.classList.remove("titleImage");
      this.titleImage.classList.add("toggle-title");
      this.input.classList.remove("input-note");
      this.input.classList.add("toggle-input");
    }
  }
  enterText() {
    this.titleImage.classList.add("titleImage");
    this.titleImage.classList.remove("toggle-title");
    this.input.classList.add("input-note");
    this.input.classList.remove("toggle-input");
  }
}

allCards = document
  .querySelectorAll(".cta-card")
  .forEach(item => new TabCard(item));
