const fs = require('fs')

if(!fs.existsSync('./minhapasta')){// se não existe a pasta local minhapasta
    console.log('Não existe!')
    fs.mkdirSync('minhapasta')// criar pasta
}

if(fs.existsSync('./minhapasta')){
    console.log('Existe!')
}