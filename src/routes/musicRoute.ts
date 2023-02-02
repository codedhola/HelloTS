import { Router } from "express"
import { getAllMusic, getMusic, uploadMusic, updateMusic } from "./../controllers/musicController"

const router = Router()

router.get("/", getAllMusic)

router.get("/:id", getMusic)

router.post("/", uploadMusic)

router.patch("/:id", updateMusic)





export default router