const http = require('http')// não precisa importar

const port = 3000

const server = http.createServer((req, res) => {
    res.write('Oi HTTP')
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})