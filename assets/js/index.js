console.log("index.js is linked to the index.html file");

class TabCard {
  constructor(element) {}
}

allTabs = document
  .querySelectorAll(".cta-text")
  .forEach(item => new TabCard(item));
