const mongoose = require('mongoose')

async function conectaBancoDeDados(){
 try{
    console.log("A conexão com o banco de dados foi iniciada")

    await mongoose.connect("mongodb+srv://clarapacheco27:w9DcQ5DpHNwukPN4@clustermulheres.p9myone.mongodb.net/?retryWrites=true&w=majority")

    console.log("Conexão com banco de dados feita com sucesso")

 }catch(error){
    console.log(error)
 }
} 

module.exports = conectaBancoDeDados