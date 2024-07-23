const express = require('express')
const router = express.Router()
const path = require('path')


const basePath = path.join(__dirname, '../templates')


router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userCreate.html`)
})

router.post('/users/save', (req, res) => {
    const name = req.body.name
    const idade = req.body.idade

    console.log(`Seu nome é ${name} e você tem ${idade} anos`)
    res.sendFile(`${basePath}/userCreate.html`)
})

module.exports = router