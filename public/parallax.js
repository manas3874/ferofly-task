const parallax = document.querySelectorAll("#parallax");
window.addEventListener("scroll", () => {
  parallax[0].style.transform = `translateY(${window.scrollY * -0.3}px)`;
});
