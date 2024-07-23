const fs = require('fs')

fs.rename('arquivo.txt','novoarquivo.txt', function(err) {// renomeando arquivo .txt c/ rename

    if(err){
        console.log(err)
        return
    }

    console.log('Arquivo renomeado!')
})