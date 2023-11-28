const editor = document.getElementById("editor");
const storeText = localStorage.getItem("text");

const button = document.getElementById("clear");
button.addEventListener("click", () => {
  localStorage.removeItem("text");
  editor.value = " ";
});

editor.value = localStorage.getItem("text");
editor.addEventListener("input", () => {
  if (!storeText) {
    const text = editor.value;
    localStorage.setItem("text", text);
  }
});
