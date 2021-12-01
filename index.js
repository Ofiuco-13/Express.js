const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/about", (req, res) => {
  res.send("About me");
});

app.get("/contact", (req, res) => {
    res.send("Contact");
  });

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
