import { Request, Response } from 'express';

export const getAllArtist = (req: Request, res: Response) => {
    res.status(200).json({
        status: "Success",
        data: {
            data: "welcome to music api"
        }
    })
}