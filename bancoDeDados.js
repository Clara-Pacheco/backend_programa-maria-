const mongoose = require('mongoose')

async function conectaBancoDeDados(){
 try{
    console.log("A conexão com o banco de dados foi iniciada")

    await mongoose.connect("mongodb+srv://clarapachecodev:I0Jq6bT9nZn2Kepa@clustermulheres.cocqf0h.mongodb.net/?retryWrites=true&w=majority")

    console.log("Conexão com banco de dados feita com sucesso")

 }catch(error){
    console.log(error)
 }
} 

module.exports = conectaBancoDeDados