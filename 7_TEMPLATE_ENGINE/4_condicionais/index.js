const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboards', (req, res) => {
    res.render('dashboards')
})

app.get('/', (req, res) => {

    const user = {
        name: "David",
        sobrenome: "Charles",
        idade: 26
    }

    const auth = true

    const palavra = "Teste"
    res.render('home',{user: user, palavra, auth})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})