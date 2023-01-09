const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.get("./src/getPeople", (req, res) => {
  //   res.sendFile(__dirname + "/public/index.html");
  const data = JSON.parse(fs.readFileSync("db.json"));
  console.log(data);
  res.json(data);
});

app.post("./src/savePeople", (req, res) => {
  const data = JSON.stringify(req.body);
  fs.writeFileSync("db.json", data);
  res.json({ status: "success" });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
