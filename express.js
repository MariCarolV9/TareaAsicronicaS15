const express = require('express')

const app = express()
const port = 3000

app.get('/', (reg, res) =>{
    let numero1 = 30;
    let numero2 = 20;
    let resta = numero1 - numero2;
    res.send(`Operación resta : ${numero1} - ${numero2} = ${resta}`)
})

app.listen(port, () =>{
    console.log(`El servidorse està ejecutando http://localhost:${port}`)
})

