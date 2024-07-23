const express = require('express')
const app = express()
const path = require('path')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

const users = require('./users')
const exp = require('constants')

const basePath = path.join(__dirname,'./templates')

app.use(users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/users.html`)
})

app.listen(3000, ()=> {
    console.log('App rodando ok!')
})