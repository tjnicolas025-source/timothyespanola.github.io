var menuButton = document.getElementById("menuButton");
var navLinks = document.getElementById("navLinks");
var currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

var navItems = document.querySelectorAll(".nav-links a");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
}

var revealItems = document.querySelectorAll(".section");

for (var j = 0; j < revealItems.length; j++) {
  revealItems[j].classList.add("reveal");
}

function showOnScroll() {
  for (var k = 0; k < revealItems.length; k++) {
    var itemTop = revealItems[k].getBoundingClientRect().top;

    if (itemTop < window.innerHeight - 80) {
      revealItems[k].classList.add("show");
    }
  }
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();