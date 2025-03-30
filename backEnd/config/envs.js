import "dotenv/config";

export const envs = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  USER_DB: process.env.USER_DB,
  PASSWORD_DB: process.env.PASSWORD_DB,
  NAME_DATABASE: process.env.NAME_DATABASE,
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  FRONT_URL: process.env.FRONT_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
