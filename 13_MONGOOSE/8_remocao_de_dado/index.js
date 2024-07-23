const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const conn = require('./db/conn')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

/* IMPORT CONTROLLER */
const ProductController = require('./controllers/ProductController')

/* IMPORT ROUTES */
const productsRoutes = require('./routes/productsRoutes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

app.use("/products", productsRoutes)

 
app.listen(3000, ()=> {
    console.log('App rodando!')
})
