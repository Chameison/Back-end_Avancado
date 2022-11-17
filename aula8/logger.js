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

emitter.on('log' , (message, object) => {
    fs.appendFile( path.join(__dirname, 'log.txt'), object, (erro)=> {
        if(erro)
            throw erro
    })
    console.log(message)
})

function log (message,object) {
    emitter.emit('log', message, object)
}

module.exports = log
