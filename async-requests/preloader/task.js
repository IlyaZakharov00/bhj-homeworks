const xhr = new XMLHttpRequest();
const loader = document.querySelector(".loader");
let structure =
  "<div class='item__code'></div><div class='item__value'></div><div class='item__currency'></div>";
const items = document.getElementById("items");

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.responseType = "json";
xhr.send();

xhr.addEventListener("readystatechange", (e) => {
  e.preventDefault();
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");
    const xhrAnswer = xhr.response;
    const valutes = xhrAnswer.response["Valute"];

    for (let i in valutes) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.insertAdjacentHTML("afterbegin", structure);
      const itemCode = item.querySelector(".item__code");
      const itemValue = item.querySelector(".item__value");
      const itemCurrency = item.querySelector(".item__currency");

      itemCode.textContent = valutes[i].CharCode;
      itemValue.textContent = valutes[i].Value;
      itemCurrency.textContent = "руб.";

      items.append(item);
    }
  }
});
