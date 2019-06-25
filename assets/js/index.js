console.log("index.js is linked to the index.html file");

class TabCard {
  constructor(card) {
    this.card = card;
    this.fullParagraphArr = [];
    this.fullParagraph = card.querySelector("p");
    this.fullParagraphArr.push(this.fullParagraph);
    console.log(this.fullParagraphArr);
    this.charLimitParagraph = this.fullParagraph.textContent.substring(0, 100);
    this.displayedText = this.charLimitParagraph + "...";
    this.adjustedParagraph = card.querySelector("p");
    this.adjustedParagraph.textContent = this.displayedText;
    console.log(this.adjustedParagraph);
    this.card.addEventListener("click", event => {
      this.changeContent();
    });
  }
  changeContent() {}
}

allTabs = document
  .querySelectorAll(".cta-card")
  .forEach(item => new TabCard(item));
