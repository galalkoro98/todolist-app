import { handler } from "../handler/handler.js";
import { inputAdd, inputUpdate, tasksForm } from "../myVars.js";
import { updateTask } from "../logic/updateTask.js";
import { addTask } from "../logic/addTask.js";
import { deleteTask } from "../logic/deleteTask.js";

export const listener = () => {
  handler();
  inputAdd.addEventListener("click", addTask);
  inputUpdate.addEventListener("click", updateTask);
  tasksForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("input-add")) {
      addTask();
    }

    if (e.target.classList.contains("input-update")) {
      updateTask();
    }

    if (e.target.classList.contains("input-delete")) {
      deleteTask();
    }
  });
};
