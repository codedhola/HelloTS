import { Router } from "express";
import { getAllArtist } from "./../controllers/artistController";

const router = Router();

router.get('/', getAllArtist)

export default router;