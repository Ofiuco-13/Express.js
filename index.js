const express = require("express");
const morgan = require("morgan");
const app = express();

//Settings
app.set("appName", "Pharmaceutical MERN");
app.set("port", 3000);

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Rutas

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

app.put("/contact/:id", (req, res) => {
  console.log(req.body);
  res.send(`Usuario ${req.params.id} actualizado`);
});

app.delete("/user/:id", (req, res) => {
  res.send(`Usuario ${req.params.id} eliminado satisfactoriamente`);
});

app.use(express.static("public"));

app.listen(app.get("port"), () => {
  console.log(app.get("appName"));
  console.log("Servidor funcionando en puerto", app.get("port"));
});
