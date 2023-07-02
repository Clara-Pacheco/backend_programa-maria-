const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())
const porta = 3333

const mulheres = [
  {
    id:'1',
    nome: 'Simara Conceição', 
    imagem: 'https://bit.ly/3LJIyOF',
    minibio: 'Desenvolvedora e instrutora', 
    },
    
    {
    
    id: '2',
    nome: 'Iana Chan',
    imagem: 'https://bit.ly/3JCXBqP',
    minibio: 'CEO & Founder da PrograMaria',
    },
    
    {
    
    id: '3',
    nome: 'Luana Pimentel',
    imagem: 'https://bit.ly/3FKpFaz',
    minibio: 'Senior Staff Software Engineer',
    
    }
]

function criarMulher(request,response){
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }

  mulheres.push(novaMulher)
  response.json(mulheres)
}


function mostraMulheres(request,response){
  response.json(mulheres)
}

function mostrarPorta(){
  console.log("Servidor criado e rodando na porta", porta)
}


app.use(router.post("/mulheres", criarMulher))
app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostrarPorta)