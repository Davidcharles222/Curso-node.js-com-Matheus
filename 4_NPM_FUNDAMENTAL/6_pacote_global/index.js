//npm install -g lodash >> global os arquivos não fica na pasta e sim no computador
//npm link lodash >> somente para o lodash , requer arquivos para rodar o projeto

const _ = require('lodash')

const arr = [1,2,2,3,3,4,4,5]

console.log(_.sortedUniq(arr))// mostrar somentes únicos