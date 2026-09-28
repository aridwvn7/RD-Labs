const hamburger = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});