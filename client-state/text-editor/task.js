const editor = document.getElementById("editor");
const storeText = localStorage.getItem("text");

const button = document.getElementById("clear");
button.addEventListener("click", () => {
  localStorage.removeItem("text");
  editor.value = " ";
});

editor.value = localStorage.getItem("text");
editor.addEventListener("input", () => {
  localStorage.setItem("text", editor.value);
});
