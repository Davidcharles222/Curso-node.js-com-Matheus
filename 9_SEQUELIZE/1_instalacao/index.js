const express = require('express')
const app = express()
const exphds = require('express-handlebars')
const conn = require('./db/conn')

app.engine('handlebars',exphds.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('App rodando')
})