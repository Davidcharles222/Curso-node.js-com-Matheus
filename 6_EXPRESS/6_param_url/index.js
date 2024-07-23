const express = require('express')
const app = express()
const path = require('path')

const basePath = path.join(__dirname,'templates')

app.get('/users/:id',(req, res) => { // pegando informações da url com params
    const id = req.params.id
    console.log(`Estamos buscando pelo usuário ${id}`)


    res.sendFile(`${basePath}/users.html`) 
})

app.get('/',(req, res) => {
    res.send('Testando')
})

app.listen(3030, () => {
    console.log('App rodando!')
})