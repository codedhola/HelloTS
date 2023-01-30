let query = {
    createArtist: `INSERT INTO artist(name, dob, country) values($1, $2, $3)  RETURNING *;`,
    getAllArtist: `SELECT * FROM artist;`,
    getAnArtist: `SELECT * FROM artist WHERE artist_id = $1`,
    editArtist: `UPDATE artist SET name = COALESCE($1, name), dob = COALESCE($2, dob), country = COALESCE($3, country) WHERE artist_id = $4 RETURNING *;`,
    deleteArtist: `DELETE FROM artist WHERE artist_id = $1;`
}
  
export = query