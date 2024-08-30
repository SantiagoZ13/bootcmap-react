import express from "express"

const app = express()

app.get("/", (req, res) =>{
    res.json({message: "Hello Express"})
})

app.listen(3000, () => console.log("🌎 Servidor corriendo en el puerto 3000"))