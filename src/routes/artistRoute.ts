import { Router } from "express";
import { getAllArtist, getAnArtist, createArtist } from "./../controllers/artistController";

const router = Router();

router.get('/', getAllArtist)

router.post('/', createArtist)

router.get('/:id', getAnArtist)


export default router;