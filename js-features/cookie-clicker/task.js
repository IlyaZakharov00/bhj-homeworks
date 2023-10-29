const img = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
let counter = 0;
function change() {
  counter += 1;
  clickerCounter.textContent = counter;
  img.width === 200 ? (img.width = 250) : (img.width = 200);
}
img.onclick = change;
