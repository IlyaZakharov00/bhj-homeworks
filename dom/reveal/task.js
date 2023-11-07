const reveal = document.querySelectorAll("div.reveal");

console.log(reveal);

for (let i = 0; i < reveal.length; i++) {
  console.log(reveal[i].getBoundingClientRect());
}

function isVisible(element) {
  for (let i = 0; i < reveal.length; i++) {
    const { top, bottom } = element[i].getBoundingClientRect();
    if (bottom > 0 || top < window.innerHeight) {
      element[i].classList.add("reveal_active");
      console.log({ top, bottom });
    }
    if (bottom < 0 || top > window.innerHeight) {
      element[i].classList.remove("reveal_active");
    }
  }
}

setInterval(() => {
  console.log(isVisible(reveal));
}, 1000);
