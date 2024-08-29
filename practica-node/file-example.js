// import fs from 'fs' (ESM)

const fs = require('fs') // Common.js

function writeFileCallback(error){
    if(error){
        console.log("Error al escribir el archivo: " + error)
    }else{
        console.log("Archivo creado correctamente")
    }
}
function readFileCallback(error, data){
    if(error){
        console.log("Error al escribir el archivo: " + error)
    }else{
        console.log("Archivo creado correctamente " + data.toString(), data)
    }
}
fs.writeFile('prueba-node.txt', 'Hola Node.js', writeFileCallback)
fs.readFile('prueba-node.txt', "utf-8", readFileCallback)