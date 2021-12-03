const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Peticion GET recibida");
});

app.get("/user", (req, res) => {
  res.json({
    username: "Emma",
    lastname: "Martinez",
  });
});

app.post("/user/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params);
  res.send("Peticion POST recibida");
});

app.put("/contact", (req, res) => {
  res.send("Peticion PUT recibida");
});

app.delete("/user/:id", (req, res) => {
  res.send(`Usuario ${req.params.id} eliminado satisfactoriamente`);
});

app.listen(5000, () => {
  console.log("Servidor funcionando en puerto 5000");
});
