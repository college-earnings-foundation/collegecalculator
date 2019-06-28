var signin = document.querySelector(".signin");
var login = document.querySelector(".login");
var username = document.querySelector(".username");
var welcome = document.querySelector(".welcome");
var credentials = document.querySelector(".credentials");
signin.addEventListener("click", function() {
  check();
  credentials.classList.toggle("hidden");
  welcome.classList.remove("hidden");
  username.select();
  welcome.innerHTML = "Welcome, please Sign In!";
});
login.addEventListener("click", function() {
  welcome.innerHTML = "Welcome to College Calculator " + username.value + "!";
  welcome.classList.remove("hidden");
  credentials.classList.add("hidden");
  check();
});

check = function() {
  if (signin.innerHTML === "Sign In") {
    signin.innerHTML = "Cancel";
    console.log(signin);
  } else {
    signin.innerHTML = "Sign In";
  }
};
