console.log("index.js is linked to the index.html file");

class TabCard {
  constructor(card) {
    this.card = card;
    console.log(this);
    this.fullParagraph = card.querySelector("p");
    console.log(this.fullParagraph);
    // this.charLimitParagraph = fullParagraph.substring(0, 100);
    // console.log(this.charLimitParagraph);
  }
}

allTabs = document
  .querySelectorAll(".cta-card")
  .forEach(item => new TabCard(item));
