import jwt from "jsonwebtoken";
import { envs } from "../config/envs.js";

const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token || !token.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "El token debe estar presente y ser vàlido" });
    }

    const extractToken = token.split(" ")[1]; // Extrae el token después de "Bearer"
    const decoded = jwt.verify(extractToken, envs.JWT_SECRET);

    req.userEmail = decoded.email; // Guarda el email en la request
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido o ha expirado" });
  }
};

export { verifyToken };
