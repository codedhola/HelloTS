import express from "express"
import artistRoute from "./routes/artistRoute"

const app = express()
app.use(express.json())

app.use('/api/v1/artist', artistRoute)

const port: number = 5050
app.listen(port, () => {
    console.log("app running on port " + port)
})

