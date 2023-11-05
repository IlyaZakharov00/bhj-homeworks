"use strict";
const value = document.getElementsByClassName("dropdown__value")[0];
const list = document.getElementsByClassName("dropdown__list")[0];
const list_items = document.getElementsByClassName("dropdown__link");

value.addEventListener("click", function () {
  list.classList.toggle("dropdown__list_active");
});

for (let i = 0; i < list_items.length; i++) {
  list_items[i].addEventListener("click", function (element) {
    value.textContent = this.textContent;
    element.preventDefault();
    list.classList.remove("dropdown__list_active");
  });
}
