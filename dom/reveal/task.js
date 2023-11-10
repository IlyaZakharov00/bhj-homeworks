function isVisible(element) {
  const reveal = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveal.length; i++) {
    const { top, bottom } = reveal[i].getBoundingClientRect();
    if (bottom > 0 || top < window.innerHeight) {
      reveal[i].classList.add("reveal_active");
    }
    if (bottom < 0 || top > window.innerHeight) {
      reveal[i].classList.remove("reveal_active");
    }
  }
}
window.addEventListener("scroll", isVisible);
