const hiddenMenu = document.querySelector(".nav-menu");
const menuIcon = document.querySelector(".menu");
const closeBtn = document.querySelector(".close-button");
const navLinks = document.querySelectorAll(".nav-menu-link");

menuIcon.addEventListener("click", (event) => {
  hiddenMenu.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  hiddenMenu.style.transform = "translateX(100em)";
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    hiddenMenu.style.transform = "translateX(100em)";
  });
});
// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: "ease-in-out", // Easing function for animations
  offset: 250, // Offset (in px) from the original trigger point
  once: true, // Whether animation should happen only once - while scrolling down
});
// Initialize Swiper
const swiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "slide",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const outreachesSwiper = new Swiper(".outreachesSwiper", {
    loop: true,
    autoplay: { delay: 4000 },
    slidesPerView: 1,
    spaceBetween: 10,
  });
});
