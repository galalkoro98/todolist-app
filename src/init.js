const Tasks = class {
  constructor() {
    // doms
    this.tasksForm = document.getElementById("tasksForm");
    this.input = document.getElementById("task");
    this.list = document.querySelector(".list");
    this.tasks = [];
    this.init();
  }

  // methods
  init() {
    fetch("/getTasks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.tasks = data.tasks;
      })
      .catch((err) => console.log(err));

    this.tasksForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTask();
    });
  }

  addTask(e) {
    const newTask = this.input.value;
    this.append(newTask);
  }

  append(newTask) {
    const li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `
        <span class="task-text">${newTask}</span>
        <span class="task-delete"><i class="fas fa-trash-alt"></i></span>
        `;
    this.list.appendChild(li);
    this.input.value = "";
    this.save(newTask);
    this.deleteTask(li);
  }

  save(task) {
    fetch("/saveTask", {
      method: "POST",
      body: JSON.stringify({ task }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  deleteTask(li) {
    const deleteBtn = li.querySelector(".task-delete");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
  }
};

const tasks = new Tasks();
