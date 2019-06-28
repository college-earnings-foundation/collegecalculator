var submit = document.querySelector("#submit_button");
var after = document.querySelector("#after");
var during = document.querySelector("#during");

submit.addEventListener("click", function () {
  after.classList.remove("hidden");
  during.classList.add("hidden");
});