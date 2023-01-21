// This function is used to save a task to the database

export const saveTask = async (saveOfTask) => {
  try {
    const res = await fetch("/saveTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveOfTask),
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    return console.log(err);
  }
};
