let query = {
    createArtist: `INSERT INTO artist(name, dob, country) values($1, $2, $3)  RETURNING *;`,
    getAllArtist: `SELECT * FROM artist;`,
    getAnArtist: `SELECT * FROM artist WHERE artist_id = $1`
}

export = query