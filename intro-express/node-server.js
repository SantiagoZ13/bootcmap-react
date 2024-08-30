const http = require('http') // CommonJS

function serverCallback(req, res){
    res.writeHead(200, {"Content-type": "application/json"})
    res.end(JSON.stringify({message: "Hola backend"}))
}

const server = http.createServer(serverCallback)

server.listen(3000, () => console.log("🌎 Servidor corriendo en el puerto 3000"))
