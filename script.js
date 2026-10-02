// const hamburger = document.querySelector(".ham");
// const navMenu = document.querySelector(".nav-links");

// hamburger.addEventListener("click", function () {
//     navMenu.classList.toggle("show");
// });

 const hamburger = document.querySelector(".ham");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });