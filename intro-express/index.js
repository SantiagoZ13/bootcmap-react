import express from "express"

const app = express()

app.get("/", (req, res) =>{
    res.json({message: "Hello Express"})
})

app.get("/greetings/:name", (req, res) =>{
    res.send(`Bienvenido ${req.params.name}`)
})
app.get("/sum/:num1/:num2", (req, res) =>{
    res.send(`Total: ${Number(req.params.num1) + Number(req.params.num2)}`)
})

app.use(express.json()) // Middleware
app.get("/fullname", (req, res) =>{
    const {name, lastname} = req.body
    res.send(`Bienvenido ${name} ${lastname}`)
})

app.get("/form", (req,res) =>{
    console.log(req.query)
    res.send("OK")
})

app.listen(3000, () => console.log("🌎 Servidor corriendo en el puerto 3000"))