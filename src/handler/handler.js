import { append } from "../component/append.js";
import { inputUpdate, inputAdd, input } from "../myVars.js";
import { addTask } from "../logic/addTask.js";
import { deleteTask } from "../logic/deleteTask.js";
import { updateTask } from "../logic/updateTask.js";
import { getInit } from "../logic/getInit.js";

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
};
