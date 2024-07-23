const exp = require('constants')
const express = require('express')
const app = express()
const path = require('path')

const users = require('./users') 

app.use(express.urlencoded({extended: true})) 
app.use(express.json()) 

// arquivos estáticos
app.use(express.static('public'))

app.use('/users', users) 

const basePath = path.join(__dirname,'./templates')

app.get('/',(req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

/* ************************************** */
app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})
/* ************************************** */

app.listen(3030, () => {
    console.log('App rodando!')
})