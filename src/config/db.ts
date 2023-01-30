import { Pool } from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'music_player',
    password: 'developer',
    port: 5432
})