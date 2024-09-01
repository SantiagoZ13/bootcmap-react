import express from 'express'
import dotenv from 'dotenv'
import mongo from './mongodb.js'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.get("/", (req, res) => {
    res.send("API is running")
})

app.get("/posts", async (req, res) => {
    const posts = await mongo("posts")
    res.json({ posts })
})
app.post("/create-post", (req, res) => {
    const post = {}
    res.json({post})
})

app.listen(PORT, () => console.log(` 🌎 Server is running on port http://localhost:${PORT}`))