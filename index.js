const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Peticion GET recibida");
});

app.post("/about", (req, res) => {
  res.send("Peticion POST recibida");
});

app.put("/contact", (req, res) => {
  res.send("Peticion PUT recibida");
});

app.delete("/test", (req, res) => {
  res.send("<h1>Peticion DELETE recibid</h1>");
});

app.listen(5000, () => {
  console.log("Servidor funcionando en puerto 5000");
});
