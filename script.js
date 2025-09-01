// craeting variables
let navBar = document.querySelector("nav");
let hamburgerMenu = document.querySelector(".hamburger-menu");

// craete a functipon
function toggleMenu() {
  navBar.classList.toggle("active");
}
// craete an eventlistener
hamburgerMenu.addEventListener("click", toggleMenu);
