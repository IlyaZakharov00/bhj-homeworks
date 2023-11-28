const signin = document.getElementById("signin");
const form = document.getElementById("signin__form");
const control = document.querySelectorAll(".control");
const welcome = document.getElementById("welcome");
const userID = document.getElementById("user_id");
const btnOut = document.getElementById("logout");
const storID = localStorage.getItem("id");

function welcomeID() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userID.textContent = storID;
}

function logOUT() {
  welcome.classList.remove("welcome_active");
  signin.classList.add("signin_active");
  form.reset();
}

if (location.reload && storID) {
  welcomeID();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(document.forms.signin__form);
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  xhr.responseType = "json";

  xhr.addEventListener("load", () => {
    let id;
    if (storID && xhr.response["success"] === true) {
      welcomeID();
      userID.textContent = storID;
    } else if (xhr.response["success"] === true) {
      id = xhr.response["user_id"];
      welcomeID();
      localStorage.setItem("id", id);
      userID.textContent = id;
    } else {
      alert("Неверный логин/пароль");
      form.reset();
    }
  });

  xhr.send(formData);
});

btnOut.addEventListener("click", (e) => {
  e.preventDefault();
  logOUT();
});
