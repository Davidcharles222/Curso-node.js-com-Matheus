const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.use(express.static('public'))

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')

app.get('/teste', (req, res) => {
    res.render('verTeste')
})

app.get('/', (req, res) => {

    const posts = [
        {
            name: 'detertente',
            category: 'sabao',
            valor: 10
        },
        {
            name: 'pasta de dente',
            category: 'utensilios',
            valor: 2
        },
        {
            name: 'bucha',
            category: 'pia',
            valor: 5
        },
    ]
    res.render('home', {posts})
})

app.listen(9000,() => {
    console.log('App rodando!')
})