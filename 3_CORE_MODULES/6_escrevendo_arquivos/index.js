const http = require('http')
const fs = require('fs')
const { url } = require('inspector')

const port = 3000

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function (err, data) {// ler documento index.html
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        fs.writeFile('arquivo.txt', name, function (err, data) {// escrever em um doc .txt com writeFile
            res.writeHead(302, {
                location: '/',
            })
            return res.end()
        })
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})