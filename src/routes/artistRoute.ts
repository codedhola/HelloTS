import { Router } from "express";
import { getAllArtist, getAnArtist, createArtist, editArtist, deleteArtist } from "./../controllers/artistController";

const router = Router();

router.get('/', getAllArtist)

router.post('/', createArtist)

router.get('/:id', getAnArtist)

router.patch('/:id', editArtist)

router.delete('/:id', deleteArtist)
 
export default router; 