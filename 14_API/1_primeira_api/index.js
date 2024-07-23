const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// rotas - endpoint -> trabalhando com postman
app.get("/", (req, res) => {
    res.json({message:"Primeira rota criada com sucesso!"})
})

app.listen(3000, ()=> console.log("App rodando!"))