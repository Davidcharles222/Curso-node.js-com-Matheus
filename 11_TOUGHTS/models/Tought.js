const DataTypes = require('sequelize')
const db = require('../db/conn')

const User = require('./User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNoll: false,
        require: true
    }
})

Tought.belongsTo(User) // 1 mensagem pertence a 1 usuario
User.hasMany(Tought) // 1 usuário tem muitas mensagens

module.exports = Tought