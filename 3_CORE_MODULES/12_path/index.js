const path = require('path')

const customPath = '/relatorios/matheus/relatorio1.pdf'

console.log(path.dirname(customPath))// qual caminho para chegar no arquivo
console.log(path.basename(customPath))// qual arquivo do diretório
console.log(path.extname(customPath))// qual extensão do arquivo