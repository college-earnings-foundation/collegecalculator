console.log("calculator.js is linked to the calculator.html file");

finalOutput = document.querySelector(".output");

finalOutput.addEventListener("click", event => {
  addInputs();
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
  // console.log(finalTotal);
  // console.log(numList);
  return finalTotal;
}

class TabCard {
  constructor(card) {
    this.card = card;
    this.titleImage = card.querySelector(".titleImage");
    this.input = card.querySelector(".input-note");
    this.inputBox = card.querySelector("input");
    this.checkCard = card.querySelector("h4");
    // console.log(this.checkCard.textContent);
    this.card.addEventListener("click", event => {
      this.toggle();
    });

    // this.inputBox.addEventListener("keyup", event => {
    //   if (event.keycode === 13 || event.which === 13) {
    //     this.enterText();
    //   }
    // });
  }

  toggle() {
    if (this.checkCard.textContent === "Total Cost:") {
      let displayTotal = this.card.querySelector("p");
      displayTotal.textContent = addInputs();
      console.log(displayTotal);

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

document.querySelectorAll(".cta-card").forEach(item => new TabCard(item));
