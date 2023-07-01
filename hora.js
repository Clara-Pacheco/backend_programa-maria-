const express =require("express")
const router = express.Router()
const app = express()
const porta = 3333

function mostrarPorta(){
  console.log("Servidor criado e rodando na porta 3333")
}

function mostraHoraLocal(request,response){
  const data = new Date()
  const hora = data.toLocaleDateString('pt-BR')
  response.send(hora)
}

app.listen(porta,mostrarPorta)
app.use(router.get("/hora",mostraHoraLocal))