import express from "express"
import artistRoute from "./routes/artistRoute"

const app = express()

app.use('/api/v1', artistRoute)

app.listen(5050, () => {
    console.log("app running on port")
})