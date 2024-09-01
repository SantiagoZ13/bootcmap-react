import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT
const app = express()

app.get("/", (req, res) => {
    res.send("API is running")
})

const posts = [{
    "id": 1,
    "title": "His mother had always taught him",
    "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    "tags": [
        "history",
        "american",
        "crime"
    ],
},
{
    "id": 2,
    "title": "He was an expert but not in a discipline",
    "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
    "tags": [
        "french",
        "fiction",
        "english"
    ],
}]

app.get("/posts", (req, res) => {
    res.send({ posts })
})
app.post("/create-post", (req, res) => {
    const post = {
        "id": posts.length + 1,
        "title": "Lorem ipsu dolot amet",
        "body": "Lorem ipsu dolot amet Lorem ipsu dolot amet Lorem ipsu dolot amet",
        "tags": [
            "history",
            "american",
            "crime"
        ],
    }
    posts.push(post)
    res.json(post)
})

app.listen(PORT, () => console.log(` 🌎 Server is running on port http://localhost:${PORT}`))