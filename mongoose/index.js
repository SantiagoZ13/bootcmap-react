import express from "express"
import dotenv from "dotenv"
import mongoose, { mongo } from "mongoose"

dotenv.config()

const app = express()
const {PORT, MONGO_USERNAME, MONGO_HOSTNAME, MONGO_PASSWORD} = process.env
const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority&appName=Cluster`; 


app.use(express.json())

app.get("/", (req, res)=>{
    res.send("API is running")
})

app.listen(PORT, () => { 
    console.log(` 🌎 Server is running in port: ${PORT}`)
    mongoose.connect(MONGO_URI)
})