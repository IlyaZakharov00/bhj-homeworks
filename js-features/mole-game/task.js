const dead = document.getElementById("dead");
let moles_dead = 0;

const lost = document.getElementById("lost");
let moles_lost = 0;

function checkHole(element) {
  if (element.className.includes("hole_has-mole")) {
    moles_dead += 1;
    dead.textContent = moles_dead;
  } else {
    moles_lost += 1;
    lost.textContent = moles_lost;
  }
  if (moles_lost === 5) {
    alert("Вы проиграли!");
    lost.textContent = 0;
    dead.textContent = 0;
    location.reload();
  } else if (moles_dead === 10) {
    alert("Вы выиграли");
    dead.textContent = 0;
    lost.textContent = 0;
    location.reload();
  }
}

for (let i = 1; i < 10; i += 1) {
  document.getElementById("hole" + [i]).onclick = () =>
    checkHole(document.getElementById("hole" + [i]));
}
