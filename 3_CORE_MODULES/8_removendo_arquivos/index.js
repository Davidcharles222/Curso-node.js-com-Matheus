const fs = require('fs')

fs.unlink('arquivo.txt', function (err){// removendo arquivo .txt com unlink
    if(err){
        console.log(err)
        return
    }

    console.log('Arquivo removido!')
})