const small = document.querySelector(".font-size_small");
const big = document.querySelector(".font-size_big");
const book = document.querySelector(".book");

console.log(small);
console.log(big);

small.addEventListener("click", (element) => {
  small.classList.toggle("font-size_active");
  book.classList.toggle("book_fs-small");
  element.preventDefault();
});

big.addEventListener("click", (element) => {
  big.classList.toggle("font-size_active");
  book.classList.toggle("book_fs-big");
  element.preventDefault();
});
