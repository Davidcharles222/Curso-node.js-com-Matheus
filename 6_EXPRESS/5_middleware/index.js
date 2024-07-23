const express = require('express')
const app = express()
const path = require('path')

const basePath = path.join(__dirname,'templates')

const checkAuth = function (req, res, next){ // configurando o middleware >> mais utilizado verificar login
    req.authStatus = true

    if(req.authStatus){
        console.log('Está logado, pode continuar')
        next() // sem o next() ele carrega toda vida mais não vai
    }else{
        console.log('Não está logado, faça o login para continual')
    }
}

app.use(checkAuth)

app.get('/',(req, res) => {
    res.sendFile(`${basePath}/index.html`) 
})

app.listen(3030, () => {
    console.log('App rodando!')
})