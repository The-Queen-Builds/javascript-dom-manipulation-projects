// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
const cancelText = document.getElementById("cancelText");

// to watch for the "Enter" key after user types input;
inputTask.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask.click();
    cancelText.style.display = "none";
  }
});

// then the callback function runs
addTask.addEventListener("click", addNewTask);

// Event listener for the add button;
function addNewTask() {
  if (inputTask.value === "") {
    alert("Please enter a task!");
    return;
  }

  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.classList.add("checkTask");
  checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteTask");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  task.appendChild(deleteButton);

  taskContainer.appendChild(task);
  inputTask.value = "";
  inputTask.style.height = "auto"; // Returns to original height of textarea.

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
    // li.style.textDecoration = "line-through"
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target.closest(".task"); // for one specific task that is deleted
    target.remove();
  });
}

inputTask.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
  // but then the goal is to only show the cancelText button when there is text in the inputTask area.
  // if (document.activeElement !== inputTask) {
  cancelText.style.display = this.value !== "" ? "block" : "none";
  // }
});

cancelText.addEventListener("click", function () {
  inputTask.value = "";
  inputTask.style.height = "auto";
  this.style.display = "none";
  inputTask.focus();
});
