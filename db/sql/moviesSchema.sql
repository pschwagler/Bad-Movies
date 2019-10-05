-- SET UP SCHEMA HERE

DROP DATABASE IF EXISTS badmovies;
CREATE DATABASE badmovies;
USE badmovies;

CREATE TABLE favorites (
    id INT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date VARCHAR(255),
    overview VARCHAR(2000),
    genre_ids VARCHAR(255),
    poster_path VARCHAR(255)
);