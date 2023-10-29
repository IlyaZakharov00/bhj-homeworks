const minusSecond = () => {
  const initialValue = document.getElementById("timer");
  timer.textContent -= 1;
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(firstTimer);
    const link = document.getElementById("linkNetology");
    link.click();
  }
};
let firstTimer = setInterval(minusSecond, 1000);