import { append } from "../component/append.js";
import { list } from "../myVars.js";
import { addTask } from "../logic/addTask.js";
import { deleteTask } from "../logic/deleteTask.js";
import { updateTask } from "../logic/updateTask.js";
import { getInit } from "../logic/getInit.js";
import { input } from "../myVars.js";
import { inputAdd } from "../myVars.js";
import { inputDelete } from "../myVars.js";
import { inputUpdate } from "../myVars.js";

export const handler = async (e) => {
  const item = e.target;
  const task = item.parentElement.parentElement;
  const id = task.dataset.id;
  const newTask = input.value;

  if (item.classList.contains("delete")) {
    deleteTask(id);
    task.remove();
  } else if (item.classList.contains("edit")) {
    input.value = newTask;
    inputAdd.style.display = "none";
    inputUpdate.style.display = "block";
    inputDelete.style.display = "block";
  }

  if (item.classList.contains("input-update")) {
    updateTask(id, newTask);
  }

  if (item.classList.contains("input-add")) {
    addTask(newTask);
    append(newTask);
  }

  if (item.classList.contains("input-delete")) {
    input.value = "";
    inputAdd.style.display = "block";
    inputUpdate.style.display = "none";
    inputDelete.style.display = "none";
  }

  if (item.classList.contains("input-get")) {
    getInit();
  }

  if (item.classList.contains("input-clear")) {
    list.innerHTML = "";
  }

  if (item.classList.contains("input-reset")) {
    window.location.href = "/";
  }

  if (item.classList.contains("input-close")) {
    window.close();
  }
};
