const exp = require('constants')
const express = require('express')
const app = express()
const path = require('path')

const basePath = path.join(__dirname,'templates')


/* ********************************* */
// Ler o body
app.use(express.urlencoded({extended: true})) // desta forma consigo utilizar sem o body-parser
app.use(express.json()) // Nada me impede de baixar o body-parser >> meu critério

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`) // escrevendo html >> preenchendo formulário
})

app.post('/users/save', (req, res) => { // recebendo informações do formulário
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome dele é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`) // como se estivesse redirecionando
})
/* ********************************* */

app.get('/users/:id',(req, res) => {
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