import bcrypt from "bcryptjs";
import {
  createUser,
  getAllUsers,
  findUserByEmail,
} from "../models/users.models.js";
import { findError } from "../util/utils.js";

const registerUser = async (req, res) => {
  try {
    const { email, password, rol, lenguaje } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = await createUser(email, hashedPassword, rol, lenguaje);

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message, type: errorFound[0].type });
  }
};

const getUsers = async (req, res) => {
  try {
    const userEmail = req.userEmail; // El middleware ya puso el email en req
    const user = await findUserByEmail(userEmail);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Devolver los datos del usuario sin la contraseña
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error en el servidor", error: error.message });
  }
};

export { registerUser, getUsers };
