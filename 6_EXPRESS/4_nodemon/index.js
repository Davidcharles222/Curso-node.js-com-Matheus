// npm install --save-dev nodemon  >> deixar como dependência de desenvolvimento >> salvo no start também
const express = require('express')
const app = express()
const path = require('path')

const basePath = path.join(__dirname,'templates')

app.get('/',(req, res) => {
    res.sendFile(`${basePath}/index.html`) //parecido com o ejs >> exibe html
})

app.listen(3030, () => {
    console.log('App rodando!')
})