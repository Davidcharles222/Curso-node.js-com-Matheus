//Obs. precisa atentar nas posições, pois dependendo da posição o app não roda.
const express = require('express')
const app = express()
const expdbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)//precisa criar a pasta sessions
const flash = require('express-flash')

const conn = require('./db/conn')

// models
const Tought = require('./models/Tought')
const User = require('./models/User')

// import routes
const toughtsRoutes = require('./routers/toughtsRoutes')
const authRoutes = require('./routers/authRoutes')

// import controller
const ToughtController = require('./controllers/ToughtController')

// templete engine
app.engine('handlebars',expdbs.engine())
app.set('view engine','handlebars')

// receber resposta do body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// session middleware
app.use(session({
    name: 'session',
    secret: 'nosso_secret',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
        logFn: function(){},
        path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
        secure: false,
        maxAge: 360000,
        expires: new Date(Date.now() + 360000),
        httpOnly: true
    }
}))

// flash messages
app.use(flash())

// public path
app.use(express.static('public'))

// set session to res
app.use((req,res,next) => {

    if(req.session.userid){
        res.locals.session = req.session
    }

    next()

})

// routes
app.use('/toughts', toughtsRoutes) // iniciando minha rota com /toughts
app.use('/', authRoutes)
app.get('/', ToughtController.showToughts) // para acessar só com o barra

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))