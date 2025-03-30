CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    rol VARCHAR(25),
    lenguaje VARCHAR(20)
);

SELECT * FROM users;
