import express from "express";
import usersRoutes from "./routes/users.routes.js"
import indexRoutes from "./routes/index.routes.js"

const app = express();

app.use(indexRoutes);
app.use(usersRoutes);
app.use(express.json());

app.listen(3000); 

console.log("Connect")