import express from "express"
import artistRoute from "./routes/artistRoute"
import musicRoute from "./routes/musicRoute"

const app = express()
app.use(express.json())

app.use('/api/v1/artist', artistRoute)
app.use('/api/v1/music', musicRoute)

const PORT: number = 5050
app.listen(PORT, () => {
    console.log("app running on port " + PORT)
})

