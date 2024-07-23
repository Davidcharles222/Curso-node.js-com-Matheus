const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboards', (req, res) => {

    const items = ['item a', 'item b', 'item c']

    res.render('dashboards', {items})
})

app.get('/post', (req, res) => {

    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender Node.js....',
        comments: 4
    }


    res.render('blogpost', {post})
})

app.get('/', (req, res) => {

    const user = {
        name: "David",
        sobrenome: "Charles",
        idade: 26
    }

    const auth = true

    const approved = true

    const palavra = "Teste"
    res.render('home',{user: user, palavra, auth, approved})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})