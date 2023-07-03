const express = require('express')
const router = express.Router()

const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()
const Mulher = require('./mulherModel')

const app = express()
app.use(express.json())
const porta = 3333


// GET
async function mostraMulheres(request,response){
  try{
    const mulheresVindasDoBancoDeDados = await Mulher.find()
    response.json(mulheresVindasDoBancoDeDados)
  } catch(error){
    console.log(error)
  }
}

// POST
async function criarMulher(request,response){
  const novaMulher =  new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao
  })

  try {
    const mulherCriada = await novaMulher.save()
    response.status(201).json(mulherCriada)
  } catch(error){
    console.log(error)
  }
}

// PATCH 

async function corrigirMulher(request,response){
  try{
    const mulherEncontrada = await Mulher.findById(request.params)

    if(request.body.nome) {
      mulherEncontrada.nome = request.body.nome
    }
  
    if(request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem
    }
  
    if(request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio
    }
    if(request.body.citacao) {
      mulherEncontrada.citacao = request.body.citacao
    }
    
    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
    response.json(mulherAtualizadaNoBancoDeDados)

  } catch(error) {
    console.log(error)
  }  
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