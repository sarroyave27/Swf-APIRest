import { Router } from "express";
import { getusers } from "../controllers/users.controller.js";
import { createusers } from "../controllers/users.controller.js";
import { updateusers } from "../controllers/users.controller.js";
import { deleteusers } from "../controllers/users.controller.js";


const router = Router();

  router.get("/users", getusers) 
  
  router.post("/users", createusers) 
  
  router.put("/users", updateusers)
  
  router.delete("/users", deleteusers)
  
export default router;

