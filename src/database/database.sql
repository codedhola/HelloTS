CREATE DATABASE music_player;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE music(
    music_id UUID PRIMARY KEY DEFAULT UUID_GENERATE_V4(),
    name VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    artist_id UUID NOT NULL, 
    FOREIGN KEY(artist_id) REFERENCES artist(artist_id)  
);

CREATE TABLE artist(
    artist_id UUID PRIMARY KEY DEFAULT UUID_GENERATE_V4(),
    name VARCHAR(75) NOT NULL,
    dob TIMESTAMP NOT NULL,
    country VARCHAR(75) NOT NULL 
);