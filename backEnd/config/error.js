const ERRORS = [
  {
    code: "23502",
    type: "db",
    status: 400,
    message: "El campo no puede estar vacio",
  },
  {
    code: "500",
    type: "server",
    status: 500,
    message: "internal server error",
  },
  { code: "404", type: "travel", status: 404, message: "post no encontrado" },
];

export default ERRORS;
