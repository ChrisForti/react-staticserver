const express = require("express");
const path = require("path");
const app = express();

app.get("/api", (req, res) => {
  res.json("HTTP GET request recieved");
});

app.use("/", express.static(path.join(__dirname, "/react-app/build")));

app.use("/website", express.static(path.join(__dirname, "docs")));

app.use((req, res) => {
  res.status(404);
  res.send("<h1>Error 404: Resource not found</h1>");
});

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
