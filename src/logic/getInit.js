export const getInit = async () => {
  try {
    const res = await fetch("/getTasks");
    const data = await res.json();
    console.log(data.task);
    tasks = data.tasks;
  } catch (err) {
    return console.log(err);
  }
};
