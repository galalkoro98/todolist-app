import { id, input, inputAdd, inputUpdate } from "../myVars.js";
import { data } from "../data.js";

export const updateTask = async () => {
  const newTaskOfUpdate = input.value;
  const updateId = id.value;
  const taskOfUpdate = {
    id: updateId,
    newTask: newTaskOfUpdate,
  };

  try {
    const res = await fetch("/updateTask", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskOfUpdate),
    });
    const data = await res.json();
    console.log(data);
    if (data.error) {
      return console.log(data.error);
    }
    window.location.href = "/";
  } catch (err) {
    return console.log(err);
  }

  data.forEach((task) => {
    if (task.id === updateId) {
      task.newTask = newTaskOfUpdate;
    } else {
      return console.log("No task found");
    }
  });

  input.value = "";
  inputAdd.style.display = "block";
  inputUpdate.style.display = "none";
};
