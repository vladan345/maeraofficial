const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  burger.classList.toggle("toggle");
});
