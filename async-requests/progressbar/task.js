const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(document.forms.form);
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
    } else {
      let timerID = setInterval(() => {
        if (progress.value === 1) {
          console.log("100%");
          clearInterval(timerID);
          return;
        }
        console.log(progress.value.toFixed(2) * 100 + "%");
      }, 1000);
    }
  });
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  xhr.send(formData);
});
