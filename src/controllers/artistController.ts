import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from './../config/db'
import DB from './../database/queries/artistQuery'

// @get All artist
export const getAllArtist = async (req: Request, res: Response) => {
    const response: QueryResult = await pool.query(DB.getAllArtist)
    console.log(response)
    res.status(200).json({
        status: "Success",
        results: response.rows.length,
        data: { 
            data: response.rows
        }
    })
}

// @get a single artist
export const getAnArtist = async (req: Request, res: Response) => {
    const id: string = req.params.id
    const response: QueryResult = await pool.query(DB.getAnArtist, [id])
    console.log(response)
    res.status(200).json({
        status: "Success",
        data: {
            data: response.rows[0]
        }
    })
}

// @create a artist
export const createArtist = async (req: Request, res: Response) => {
    const { name, dob, country} = req.body
    const response: QueryResult = await pool.query(DB.createArtist, [name, dob, country])
    console.log(response.rowCount)
    res.status(200).json({
        status: "Success",
        data: {
            data: response.rows[0]
        }
    })
}