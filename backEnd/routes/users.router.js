import express from "express";
import { registerUser, getUsers } from "../src/controllers/users.controllers.js";
import { createUserMiddleware } from "../middlewares/users.middlewares.js";
import { verifyToken } from "../middlewares/verify.tokens.middleware.js";



const router = express.Router();

router.post("/register", createUserMiddleware, registerUser);

router.get("/usuarios", verifyToken, getUsers);

export default router;
