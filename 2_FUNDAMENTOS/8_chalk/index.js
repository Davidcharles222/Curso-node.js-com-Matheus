const chalk = require("chalk")// precisou instalar uma versão mais antiga npm install i chalk@4.1.2

const nota = 5;

if (nota >= 7){
    console.log(chalk.green('Parabéns! Você está aprovado!'))
}else{
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação!'))
}