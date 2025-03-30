
import pool from "../../config/db/conection.db.js";

const createUser = async (email, hashedPassword, rol, lenguaje) => {
  const SQLquery = {
    text: "INSERT INTO users (email, password, rol, lenguaje) VALUES ($1, $2, $3, $4) RETURNING rol, lenguaje, email",
    values: [email, hashedPassword, rol, lenguaje],
  };

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const findUserByEmail = async (email) => {
  const SQLquery = {
    text: "SELECT * FROM users WHERE email = $1",
    values: [email],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};



export { createUser, findUserByEmail, getAllUsers };
