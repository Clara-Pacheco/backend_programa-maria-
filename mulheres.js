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

// GET
function mostraMulheres(request,response){
  response.json(mulheres)
}

// POST
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

// PATCH 

function corrigirMulher(request,response){
  const mulherEncontrada = mulheres.find((mulher)=>{
    if(mulher.id === request.params.id){
      return mulher 
    }
  }) 

  if(request.body.nome) {
    mulherEncontrada.nome = request.body.nome
  }

  if(request.body.imagem) {
    mulherEncontrada.imagem = request.body.imagem
  }

  if(request.body.minibio) {
    mulherEncontrada.minibio = request.body.minibio
  }

  response.json(mulheres)
}

// DELETE

function deletarMulher(request,response){
 const mulheresQueFicam = mulheres.filter( (mulher) => {
   return mulher.id !== request.params.id
  })
  response.json(mulheresQueFicam)
}

function mostrarPorta(){
  console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.delete("/mulheres/:id",deletarMulher))
app.use(router.patch("/mulheres/:id",corrigirMulher))
app.use(router.post("/mulheres", criarMulher))
app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostrarPorta)