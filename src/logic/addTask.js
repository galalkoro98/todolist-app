// import

import { input } from "../myVars.js";
import { saveTask } from "./saveTask.js";
import { append } from "../component/append.js";

export const addTask = async (e) => {
  const addNewId = Math.floor(Math.random() * 1000);
  const newTaskOfAdd = input.value;

  const taskOfAdd = {
    id: addNewId,
    newTask: newTaskOfAdd,
  };

  saveTask(taskOfAdd);
  append(newTaskOfAdd);
  input.value = "";
};
