const porta = 3333

function mostrarPorta(){
  console.log("Servidor criado e rodando na porta", porta)
}

const express = require('express')

const app = express()

app.listen(porta, mostrarPorta)





