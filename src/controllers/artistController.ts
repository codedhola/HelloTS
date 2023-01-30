import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from './../config/db'
import DB from './../database/queries/artistQuery'

export const getAllArtist = async (req: Request, res: Response) => {
    const response: QueryResult = await pool.query(DB.getAllArtist)
    console.log(response)
    res.status(200).json({
        status: "Success",
        data: { 
            data: response.rows
        }
    })
}