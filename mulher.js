const express = require("express")
const router = express.Router()
const app = express()
const porta = 3333

function mostraOla(request,response) {
  response.send("Olá, Mundo!")
}

function mostraMulher(request,response){
  response.json({
    nome: 'Clara Pacheco',
    avatar: 'https://github.com/Clara-Pacheco.png',
    miniBio: 'Desenvolvedora e UX Designer'
  })
}

function mostrarPorta(){
  console.log("Servidor criado e rodando na porta", porta)
}

// Rotas da aplicação:
app.use(router.get("/ola", mostraOla))
app.use(router.get("/mulher" ,mostraMulher))
app.listen(porta, mostrarPorta)