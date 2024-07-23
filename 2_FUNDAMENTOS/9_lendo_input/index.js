const readline = require('readline').createInterface({// não precisa inportar
    input: process.stdin,// entrada terminal
    output: process.stdout,// saida terminal
})

readline.question('Qual a sua linguagem preferida! ', (language) => {// pergunta no terminal e responde no terminal

    if(language === 'Python'){
        console.log('Isso nem é linguagem!')
    }else{
        console.log(`A minha linguagem preferida é: ${language}`)
    }

    readline.close()
})