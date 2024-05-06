CREATE TABLE Todo (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL
);

 hr@proshore.eu 