const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");
const control = document.querySelectorAll(".control");
const welcome = document.getElementById("welcome");
const userID = document.getElementById("user_id");
const btnOut = document.getElementById("logout");
localStorage.removeItem("id");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(document.forms.signin__form);
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
      let id;
      const storID = localStorage.getItem("id");
      if (storID && xhr.response["success"] === true) {
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        userID.textContent = storID;
      } else if (xhr.response["success"] === true) {
        id = xhr.response["user_id"];
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        localStorage.setItem("id", id);
        userID.textContent = id;
      } else {
        alert("Неверный логин/пароль");
        for (const input of control) {
          input.value = "";
        }
      }
    }
  });

  btnOut.addEventListener("click", (e) => {
    e.preventDefault();
    welcome.classList.remove("welcome_active");
    signin.classList.add("signin_active");
    for (const input of control) {
      input.value = "";
    }
  });

  xhr.send(formData);
});
