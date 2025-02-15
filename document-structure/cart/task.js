const productAdd = document.querySelectorAll(".product__add");
const minusValue = document.querySelectorAll(".product__quantity-control_dec");
const plusValue = document.querySelectorAll(".product__quantity-control_inc");
const btnValueChange = document.querySelectorAll(".product__quantity-control");
let arrayDataID = [];

for (const btn of btnValueChange) {
  btn.addEventListener("click", () => {
    let parent = btn.closest(".product");
    let value = parent.querySelector(".product__quantity-value");
    if (btn.classList.contains("product__quantity-control_dec")) {
      if (value.textContent == 1) {
        return;
      } else value.textContent--;
    } else if (btn.classList.contains("product__quantity-control_inc")) {
      value.textContent++;
    }
  });
}

for (const button of productAdd) {
  let cartProducts = document.querySelector(".cart__products");
  let structure =
    "<div class='cart__product'><img class='cart__product-image'><div class='cart__product-count'></div></div>";
  let cartProduct;
  let imgSrcCartProduct;
  let countCartProduct;
  let cartValue;
  let productValue;
  let product = button.closest(".product");
  let cartProductImage = product.querySelector(".product__image");
  let srcImg = cartProductImage.getAttribute("src");
  let value = product.querySelector(".product__quantity-value");
  let dataID = product.dataset;

  button.addEventListener("click", () => {
    if (arrayDataID.includes(dataID.id)) {
      cartValue = Number(countCartProduct.textContent);
      productValue = Number(value.textContent);
      let sumValue = cartValue + productValue;
      countCartProduct.textContent = +sumValue;
      return;
    } else {
      cartProducts.insertAdjacentHTML("beforeend", structure);
      cartProduct = cartProducts.querySelector(".cart__product");
      nowCartProduct = cartProducts.lastElementChild;
      imgSrcCartProduct = nowCartProduct.querySelector(".cart__product-image");
      countCartProduct = nowCartProduct.querySelector(".cart__product-count");
      nowCartProduct.dataset.id = dataID.id;
      imgSrcCartProduct.setAttribute("src", srcImg);
      countCartProduct.textContent = value.textContent;
      arrayDataID.push(nowCartProduct.dataset.id);
    }
  });
}

// const product = document.querySelectorAll(".product");
// const product__add = document.querySelectorAll(".product__add");
// const cart__products = document.querySelector(".cart__products");
// const minusValue = document.querySelectorAll(".product__quantity-control_dec");
// const plusValue = document.querySelectorAll(".product__quantity-control_inc");
// const btnValueChange = document.querySelectorAll(".product__quantity-control");
// let arrayDataID = [];
// // const productCount = document.querySelectorAll(".product__quantity-value");

// for (const btn of btnValueChange) {
//   btn.addEventListener("click", () => {
//     let parent = btn.closest(".product");
//     let value = parent.querySelector(".product__quantity-value");
//     if (btn.classList.contains("product__quantity-control_dec")) {
//       if (value.textContent == 1) {
//         return;
//       } else value.textContent--;
//     } else if (btn.classList.contains("product__quantity-control_inc")) {
//       value.textContent++;
//     }
//   });
// }

// for (const button of product__add) {
//   let cart__products = document.querySelector(".cart__products");
//   let product = button.closest(".product");
//   let cart__product__image = product.querySelector(".product__image");
//   let productClone = product.cloneNode();
//   let cart__product__image__clone = cart__product__image.cloneNode();
//   let cart__product__count = document.createElement("div");
//   let value = product.querySelector(".product__quantity-value");
//   let dataID = product.dataset;
//   let cart__value;
//   let product__value;
//   button.addEventListener("click", () => {
//     if (arrayDataID.includes(dataID)) {
//       // cart__product__count.textContent += value;
//       cart__value = Number(cart__product__count.textContent);
//       product__value = Number(value.textContent);
//       let sum = cart__value + product__value;
//       // console.log(cart__value);
//       // console.log(product__value);
//       // console.log(sum);
//       cart__product__count.textContent = +sum;
//       return;
//     } else {
//       productClone.classList.remove("product");
//       productClone.classList.add("cart__product");

//       cart__product__image__clone.classList.remove("product__image");
//       cart__product__image__clone.classList.add("cart__product-image");

//       cart__product__count.classList.remove("product__quantity-value");
//       cart__product__count.classList.add("cart__product-count");
//       cart__product__count.textContent = value.textContent;

//       cart__products.append(productClone);
//       productClone.append(cart__product__count);
//       productClone.append(cart__product__image__clone);

//       arrayDataID.push(dataID);
//     }
//   });
// }
