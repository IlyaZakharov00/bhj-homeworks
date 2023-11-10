const rotatorCase = document.getElementsByClassName("rotator__case");
const rotatorArray = Array.from(rotatorCase);
const rotator_container = document.querySelector(".rotator");
const first = rotator_container.firstChild;
let index = 0;

function change() {
  if (rotatorCase[index].nextElementSibling === null) {
    rotatorArray[0].classList.add("rotator__case_active");
    rotatorArray[index].classList.remove("rotator__case_active");
    index = 0;
  } else {
    rotatorCase[index].classList.remove("rotator__case_active");
    rotatorCase[index].nextElementSibling.classList.add("rotator__case_active");
    index++;
  }
}

setInterval(change, 1000);
