// Mobile hamburger menu
const hamburgerMenu = document.querySelector(".hamburger");
const hamburgerMenuDropdown = document.querySelector(".dropdown");
const submenu = document.querySelector(".dropdown-sub");
const btnSubmenu = document.querySelector(".btn-submenu");

hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("is-active");
  hamburgerMenuDropdown.classList.toggle("is-active");
});

btnSubmenu.addEventListener("click", function(){
  hamburgerMenu.classList.toggle("is-active");
  submenu.classList.toggle("is-active");
})