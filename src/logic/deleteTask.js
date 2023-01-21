// delete

export const deleteTask = async (divOfTask) => {
  const id = divOfTask.dataset.id;
  try {
    await fetch(`/deleteTask/${id}`, {
      method: "DELETE",
    });
    divOfTask.remove();
  } catch (err) {
    return console.log(err);
  }
};
