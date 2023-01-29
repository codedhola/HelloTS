let query: object = {
    createArtist: `INSERT INTO TABLE artist(name, dob, country) values($1, $2, $3);`,
    
}

exports = query