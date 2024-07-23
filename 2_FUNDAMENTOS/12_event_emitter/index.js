const EventEmitter = require('events')// não precisa importar
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('start')

console.log('Depois')