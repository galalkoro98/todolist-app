const Tasks = class {
  constructor() {
    // doms
    this.tasksForm = document.getElementById("tasksForm");
    this.task = document.getElementById("task");
    this.id = document.getElementById("id");
    this.list = document.querySelector(".list");
    this.inputAdd = document.querySelector(".input-add");
    this.inputUpdate = document.querySelector(".input-update");
    this.tasks = [];
    this.editing = false;
    this.editingId = null;
    this.init();

    // events
    this.tasksForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.editing) {
        this.updateTask();
      } else {
        this.addTask();
      }
    });
  }

  // methods
  init() {
    fetch("/getTasks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.task);
        this.tasks = data.tasks;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addTask(e) {
    const id = Math.floor(Math.random() * 1000);
    const newTask = this.task.value;
    const task = {
      id,
      newTask,
    };
    this.save(task);
    this.append(newTask);
    this.task.value = "";
  }

  append(newTask) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `
          <p class="task-text">${newTask}</p>
          <div class="task-buttons">
              <button class="task-edit"><i class="fas fa-edit"></i></button>
              <button class="task-delete"><i class="fas fa-trash"></i></button>
          </div>
      `;
    this.list.appendChild(div);
    this.deleteTask(div);
  }

  save(task) {
    fetch("/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateTask() {
    const newTask = this.task.value;
    const id = this.id.value;
    const task = {
      id,
      newTask,
    };

    fetch("/updateTask", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    this.editing = false;
    this.editingId = null;
    this.inputAdd.classList.remove("hide");
    this.inputUpdate.classList.add("hide");
    this.task.value = "";
  }

  deleteTask(div) {
    const deleteBtn = div.querySelector(".task-delete");
    deleteBtn.addEventListener("click", (e) => {
      const id = e.target.parentElement.parentElement.parentElement.dataset.id;
      div.remove();
    });
  }
};

const tasks = new Tasks();
