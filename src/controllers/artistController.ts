import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from './../config/db'
import DB from './../database/queries/artistQuery'

// @get All artist => '/api/v1/artist'
export const getAllArtist = async (req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query(DB.getAllArtist)
        
        return res.status(200).json({
            status: "Success",
            results: response.rows.length,
            data: { 
                data: response.rows
            }
        })
    }catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err
        }
        )
    }
}

// @get a single artist => '/api/v1/artist/;id'
export const getAnArtist = async (req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id
    try{
        const response: QueryResult = await pool.query(DB.getAnArtist, [id])
        
        return res.status(200).json({
            status: "Success",
            data: {
                data: response.rows[0]
            }
        })
    }catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err
        }
        )
    }
}

// @create an artist  => '/api/v1/artist'
export const createArtist = async (req: Request, res: Response): Promise<Response>  => {
    const { name, dob, country} = req.body
    try{
        const response: QueryResult = await pool.query(DB.createArtist, [name, dob, country])
        
        return res.status(200).json({
            status: "Success",
            data: {
                data: response.rows[0]
            }
        })
    }catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err
        }
        )
    }
}

// @Edit an artist  => '/api/v1/artist/:id'
export const editArtist = async (req: Request, res: Response): Promise<Response> => {
    const { name, dob, country} = req.body
    const id: string = req.params.id
    try{
        const response: QueryResult = await pool.query(DB.editArtist, [name, dob, country, id])
        console.log(response)

        return res.status(200).json({
            status: "Success",
            data: {
                data: response.rows[0]
            }
        })
    }catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err
        }
        )
    }
}

// @Edit an artist  => '/api/v1/artist/:id'
export const deleteArtist = async (req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id
    try{
        const response: QueryResult = await pool.query(DB.deleteArtist, [id])
        
        return res.status(204).json()
    }catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err
        }
        )
    }
}