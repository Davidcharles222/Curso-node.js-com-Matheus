const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: "David",
        sobrenome: "Charles",
        idade: 26
    }

    const palavra = "Teste"
    res.render('home',{user: user, palavra})
})

app.listen(3000, () => {
    console.log('App funcionando!')
})