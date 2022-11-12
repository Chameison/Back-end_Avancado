// const EventEmitter = require('events')
const Evento = require('events')
const fs = require('fs')
const emitter = new Evento()
const path = require('path')
// emitter.on('log' , (message) => {
//     fs.appendFile( './log.txt', message, (erro)=> {
//         if(erro)
//             throw erro
//     })
//     console.log(message)
// })

emitter.on('log' , (message, obj) => {
    fs.appendFile( path.join(__dirname, 'log.txt'), obj, (erro)=> {
        if(erro)
            throw erro
    })
    console.log(message)
})

function log (message,obj) {
    emitter.emit('log', message, obj)
}

module.exports = log
log('primeiro teste')
log('segundo teste')