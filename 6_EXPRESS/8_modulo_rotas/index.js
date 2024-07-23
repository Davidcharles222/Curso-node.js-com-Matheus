const exp = require('constants')
const express = require('express')
const app = express()

const users = require('./users') // importando minhas routers

app.use(express.urlencoded({extended: true})) 
app.use(express.json()) 

app.use('/users', users) // configuração 


app.get('/',(req, res) => {
    res.send('Testando')
})


app.listen(3030, () => {
    console.log('App rodando!')
})