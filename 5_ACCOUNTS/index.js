// modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

// modulos internos
const fs = require('fs')
const { parse } = require('path')

operation()

function operation(){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'O que você deseja fazer?',
                choices:[
                    'Criar conta',
                    'Consultar Saldo',
                    'Depositar',
                    'Sacar',
                    'Sair'
                ]
            }
        ]).then(res => {
            const action = res['action']
            
            if(action === 'Criar conta'){
                createAccount()
            }else if(action === 'Consultar Saldo'){
                saldo()
            }else if(action === 'Depositar'){
                deposit()
            }else if(action === 'Sacar'){
                sacar()
            }else if(action === 'Sair'){
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounsts!'))
                process.exit()
            }
        }).catch(err => {
            console.log(err)
        })
}

// criar uma conta
function createAccount(){
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))

    buildAccount()
}

function buildAccount(){
    inquirer
        .prompt([
            {
                name: "accountName",
                message:"Digite um nome para a sua conta:"
            }
        ]).then(res => {
            const accountName = res['accountName']

            console.info(accountName)

            if(!fs.existsSync('accounts')){// se não existir a pasta acconts cria ela
                fs.mkdirSync('accounts')
            }

            if(fs.existsSync(`accounts/${accountName}.json`)){
                console.log(
                    chalk.bgRed.black('Esta conta já existe, escolha outro nome!')
                )
                buildAccount()
                return
            }

            fs.writeFileSync(// escrever o documento em json com nome da pasta mencionada
                `accounts/${accountName}.json`,
                '{"balance": 0}',
                function(err){
                    console.log(err)
                }
            )

            console.log(chalk.green('Parabéns, a sua conta foi criada!'))
            operation()
            
        }).catch(err => {
            console.log(err)
        })
}

// depositar na conta
function deposit(){
    inquirer
        .prompt([
            {
                name: "accountName",
                message: "Qual conta deseja depositar?"
            }
        ]).then(res => {
            const accountName = res['accountName']

            if(!checkAccount(accountName)){
                return deposit()
            }

            inquirer
                .prompt([
                    {
                        name: "amount",
                        message: "Qual valor deseja depositar?"
                    }
                ]).then(res => {
                    addAmount(accountName, res['amount'])
                }).catch(err => console.log(err))
        }).catch(err => console.log(err))
}

// verificar conta existe >> iremos replicar para várias condições
function checkAccount(accountName){
    if(!fs.existsSync(`Accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não exite, tente novamente'))
        return false
    }

    return true
}

// add valor
function addAmount(accountName, amount){
    const account = getAccount(accountName)
    if(!amount){
        console.log(chalk.bgRed.black("Ocorreu um erro, tente novamente mais tarde!"))
        return deposit()
    }
    
    account.balance = parseFloat(amount) + parseFloat(account.balance)
    
    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(account),
        function(err){ console.log(err)
    })

    console.log(chalk.bgGreen.black(`Foi depositadoo valor de R$${amount} na sua conta!`))
    return operation()
}

// get account
function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r' // somente ler
    })

    return JSON.parse(accountJSON)
}

// saldo
function saldo(){
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Digite o nome da conta:'
            }
        ]).then(res => {
            const accountName = res['accountName']
            const account = checkAccount(res['accountName'])

            if(!account){
                return saldo()
            }

            const amount = getAccount(accountName)
            console.log(chalk.bgBlue.black(`Você tem um saldo na conta de R$ ${amount.balance} da sua conta`))

            inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'saque',
                        message:'Deseja sacar?',
                        choices:[
                            'Sim',
                            'Não'
                        ]
                    }
                ]).then(res => {
                    if(res['saque'] === 'Sim'){
                        sacar(accountName)
                    }else{
                        operation()
                    }
                }).catch(err => console.log(err))
        })
}

// sacar
function sacar(accountName){
    if(accountName){
        inquirer
            .prompt([
                {
                    name: 'amount',
                    message: 'Qual valor deseja sacar?'
                }
            ]).then(res => {
                removeAmount(accountName,res['amount'])
            }).catch(err => console.log(err))
            return
    }

    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Qual conta deseja sacar?'
            }
        ]).then(res => {
            const account = res['accountName']

            if(!checkAccount(account)){
                return sacar()
            }

            inquirer
                .prompt([
                    {
                        name: 'amount',
                        message: 'Qual valor deseja sacar?'
                    }
                ]).then(res => {
                    removeAmount(account,res['amount'])
                }).catch(err => console.log(err))

        }).catch(err => console.log(err))
}

// removeAmount
function removeAmount(accountName, amount){
    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde'))
        return sacar()
    }
    const account = getAccount(accountName)

    if(parseFloat(account.balance) - parseFloat(amount) < 0){
        console.log(chalk.bgRed.black('Saldo insuficiente para sacar, tente novamente'))
        return sacar()
    }

    account.balance = parseFloat(account.balance) - parseFloat(amount)

    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(account),
        function(err){
            console.log(err)
        }
    )

    console.log(chalk.bgBlue.black(`Você sacou o valor de R$ ${amount} da sua conta!`))
    return operation()
}