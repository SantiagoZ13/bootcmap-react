import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose, { mongo } from "mongoose"
import { postRouter } from "./posts/router.js"



const app = express()
const {PORT, MONGO_USERNAME, MONGO_HOSTNAME, MONGO_PASSWORD} = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority&appName=Cluster`; 

// Globals Middlewares
app.use(express.json())

// Routes
app.get("/", (req, res) => res.send("API is running"))
app.use("/posts", postRouter)

app.listen(PORT, () => { 
    console.log(` 🌎 Server is running in port: ${PORT}`)
    mongoose.connect(MONGO_URI, {
        dbName: "sample_training"
    })
})