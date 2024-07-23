const express = require('express')
const router = express.Router() // importando router >> utilizando em tods tags que eram "app"
const path = require('path')

const basePath = path.join(__dirname,'../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`) 
})

router.post('/save', (req, res) => { 
    const name = req.body.name
    const age = req.body.age

    console.log(`O nome dele é ${name} e ele tem ${age} anos`)

    res.sendFile(`${basePath}/userform.html`) 
})

router.get('/:id',(req, res) => {
    const id = req.params.id
    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`) 
})

module.exports = router