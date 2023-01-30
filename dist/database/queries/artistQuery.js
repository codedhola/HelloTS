"use strict";
let query = {
    createArtist: `INSERT INTO TABLE artist(name, dob, country) values($1, $2, $3);`,
    getAllArtist: `SELECT * FROM artist;`
};
module.exports = query;
