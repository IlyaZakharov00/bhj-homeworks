const book = document.getElementById("book");
const font_size = document.querySelectorAll(".font-size");
const arr_font_size = Array.from(font_size);

for (const button of arr_font_size) {
  button.addEventListener("click", (event) => {
    for (const button of arr_font_size) {
      button.classList.remove("font-size_active");
    }

    book.classList.remove("font-size_small");
    book.classList.remove("font-size_big");
    event.target.classList.add("font-size_active");

    if (event.target.classList.contains("font-size_small")) {
      book.classList.add("font-size_small");
    } else if (event.target.classList.contains("font-size_big")) {
      book.classList.add("font-size_big");
    }

    event.preventDefault();
  });
}
