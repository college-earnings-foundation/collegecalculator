console.log("index.js is linked to the index.html file");

class TabCard {
  constructor(card) {
    this.card = card;
    this.displayedParagraph = card.querySelector("p");
    //Initialize DOM "p" elements for future use
    this.fullParagraph = document.createElement("p");
    this.fullParagraph.textContent = this.displayedParagraph.textContent;
    //Create new Full Paragraph element to be toggled
    this.charLimitParagraph = document.createElement("p");
    this.charLimitParagraph.textContent =
      this.displayedParagraph.textContent.substring(0, 100) + "...";
    //Create new char limited Paragraph element with added dots to be toggled
    this.displayedParagraph.textContent = this.charLimitParagraph.textContent;
    //Set displayed paragraph element to be limited char len
    this.cardButton = card.querySelector("button");
    this.cardButton.addEventListener("click", event => {
      this.changeContent();
    });
  }
  changeContent() {
    //On click, if formula will check which (limited or not) var is currently displayed and will toggle
    if (
      this.displayedParagraph.textContent ===
      this.charLimitParagraph.textContent
    ) {
      this.displayedParagraph.textContent = this.fullParagraph.textContent;
    } else {
      this.displayedParagraph.textContent = this.charLimitParagraph.textContent;
    }
  }
}

allTabs = document
  .querySelectorAll(".cta-card")
  .forEach(item => new TabCard(item));
