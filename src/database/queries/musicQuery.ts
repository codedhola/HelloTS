const query = {
    uploadMusic: `INSERT INTO music(name, genre, artist_id) VALUES($1, $2, $3) RETURNING *;`,
    getAllMusic: `SELECT * FROM music;`,
    getAMusic: `SELECT music.name AS music, music.genre, artist.name AS artist, artist.dob, artist.country FROM music INNER JOIN artist ON artist.artist_id = music.artist_id WHERE music_id = $1`,
    updateMusic: `UPDATE music SET name = COALESCE($1, name), genre = COALESCE($2, genre), artist_id = COALESCE($3, artist_id) WHERE music_id = $4 RETURNING *;`,
    deleteMusic: `DELETE FROM music WHERE music_id = $1`
}

export = query;