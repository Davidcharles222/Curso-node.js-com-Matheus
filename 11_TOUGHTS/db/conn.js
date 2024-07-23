const Sequelize = require('sequelize')

const sequelize = new Sequelize('toughts','root','123456', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conectado ao Banco com sucesso!')
}catch(err){
    console.log('Não foi possível conectar ao banco ', err)
}

module.exports = sequelize