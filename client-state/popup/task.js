const modal = document.getElementById("subscribe-modal");
const closeModale = modal.querySelector(".modal__close");

function showModal() {
  if (!getCookie("modal")) {
    modal.classList.add("modal_active");
  }
}
showModal();

closeModale.addEventListener("click", (e) => {
  e.preventDefault();
  setCookie("modal", "modal_active");
  modal.classList.remove("modal_active");
});

function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value);
}

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find((p) => p.startsWith(name + "="));
  return cookie;
}
