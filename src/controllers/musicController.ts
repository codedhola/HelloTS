import { Request, Response } from 'express'
import { QueryResult } from 'pg'
import { pool } from './../config/db'
import DB from './../database/queries/musicQuery'

export const getAllMusic = async(req: Request, res: Response): Promise<Response> => {
    try{
        const response: QueryResult = await pool.query(DB.getAllMusic)
    
        return res.status(200).json({
            status: "Success",
            results: response.rowCount,
            data: {
                data: response.rows
            }
        })
    }catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err
        })
    }
}

export const getMusic = async(req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id
    try{
        const response: QueryResult = await pool.query(DB.getAMusic, [id])
    
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
        })
    }
}

export const uploadMusic = async(req: Request, res: Response): Promise<Response> => {
    const { name, genre, artist_id } = req.body
    try{
        const response: QueryResult = await pool.query(DB.uploadMusic, [name, genre, artist_id])
    
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
        })
    }
}

export const updateMusic = async(req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id
    const { name, genre, artist_id } = req.body;
    try{
        const response: QueryResult = await pool.query(DB.updateMusic, [name, genre, artist_id, id])
    
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
        })
    }
}

export const deleteMusic = async(req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id
    try{
        const response: QueryResult = await pool.query(DB.deleteMusic, [id])
    
        return res.status(204).json({
            status: "Success"
        })   

    }catch(err){
        return res.status(500).json({
            status: "Failed",
            message: err
        })
    }
}