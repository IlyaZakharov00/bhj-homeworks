const buttonAdd = document.querySelector(".tasks__add");
const input = document.querySelector(".tasks__input");
const tasksList = document.querySelector(".tasks__list");

function addTask() {
  createDeleteTask(input.value);
  input.value = "";
  // console.log(tasksList);
}

function createDeleteTask(value) {
  if (value.trim() === "") {
    return;
  }
  let structure =
    '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times</a></div>';
  task = tasksList.insertAdjacentHTML("afterbegin", structure);
  text = value;
  let taskTitle = document.querySelector(".task__title");
  taskTitle.append(text.trim());

  let removeButtons = document.querySelector(".task__remove");
  removeButtons.addEventListener("click", () => {
    removeButtons.parentElement.remove();
  });

  // console.log(removeButtons);
}

buttonAdd.addEventListener("click", (event) => {
  addTask();
  event.preventDefault();
});
