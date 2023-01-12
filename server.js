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
});

app.post("/saveTask", (req, res) => {
  const data = req.body;
  fs.writeFileSync("db.json", JSON.stringify(data));
  res.json({ status: "saved" });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
