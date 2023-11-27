const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("readystatechange", (e) => {
  e.preventDefault();
  if (xhr.readyState === xhr.DONE) {
    let question = xhr.response;
    let questionTitle = question.data.title;
    let questionAnswers = question.data.answers;
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");

    for (let i in questionAnswers) {
      pollTitle.textContent = questionTitle;
      const button = document.createElement("button");
      button.classList.add("poll__answer");
      button.textContent = questionAnswers[i];
      pollAnswers.append(button);
      button.addEventListener("click", () => {
        alert("Спасибо, Ваш голос засчитан!");
        location.reload();
      });
    }
  }
});
