import express from "express";
import { pool } from "./db.js";

const app = express();

app.get("/users", (req, res) => {
  res.send("Mostrando usuarios");
});

app.post("/users", (req, res) => {
    res.send("creando usuarios");
  });

app.put("/users", (req, res) => {
    res.send("actualizando usuarios");
  });

app.delete("/users", (req, res) => {
    res.send("Eliminando usuarios");
  });

app.listen(3000); 