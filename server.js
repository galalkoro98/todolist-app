const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/"));
app.use(express.json());

app.get("/getTasks", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json"));
  console.log(data);
  res.json(data);
  res.json({ status: "get" });
});

app.post("/saveTask", (req, res) => {
  const data = req.body;
  const db = JSON.parse(fs.readFileSync("db.json"));
  db.task.push(data);
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.json({ status: "added" });
});

// update tasks
app.post("/updateTask", (req, res) => {
  // update inside the array {"task": []}
  const data = req.body;
  const db = JSON.parse(fs.readFileSync("db.json"));
  db.task = data;
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.json({ status: "updated" });
});

// delete tasks
app.post("/deleteTask", (req, res) => {
  // delete inside the array {"task": []}
  const data = req.body;
  const db = JSON.parse(fs.readFileSync("db.json"));
  db.task = data;
  fs.writeFileSync("db.json", JSON.stringify(db));
  res.json({ status: "deleted" });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
