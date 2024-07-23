const path = require('path')

// path absoluto
console.log(path.resolve('teste.txt'))// pega todo diretório ate aquele arquivo

// formar path
const midFolder = 'relatorios'
const fileName = 'matheus.txt'

const finalPath = path.join('/','arquivos',midFolder, fileName)// juntar diretórios

console.log(finalPath)