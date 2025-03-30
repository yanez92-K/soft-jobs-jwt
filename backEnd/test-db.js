import pool from "./config/db/conection.db.js"; // Ajusta la ruta si es necesario

(async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("✅ Conexión exitosa:", result.rows[0]);
    process.exit(0); // Cierra el proceso si todo está bien
  } catch (error) {
    console.error("❌ Error de conexión:", error.message);
    process.exit(1); // Cierra el proceso con error
  }
})();
