//nome

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1]

console.log(nome)

//idade

console.log(process.argv)

const args2 = process.argv.slice(2)

console.log(args2)

const idade = args[1].split('=')[1]

console.log(idade)

console.log(`O nome dele é ${nome} e ele tem ${idade} anos!`)