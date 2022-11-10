// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => { // res solicitação
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
//CAll BACKA K=========================


// function myDisplayer(some) {
    
// }

const obj = {
    t1: 'Pedido 1 ',
    t2: 'Pedido 2 ',
    t3: 'Pedido 3 ',
    t4: 'Pedido 4 '
}
const fs = require('fs')


console.log('Primeiro comando')


fs.readFile('./text.txt',callback)
function callback(error, content) {
    if(error) return console.error('erro')
    console.log(String(content))
}
console.log('Segundo comando')
console.log('Terceiro comando')

// setTimeout(myFunction, 3000)

// function myFunction() {
//     console.log('testando a função...')
// }

//forma resumida

setTimeout(() => (console.log('testando o timeOut')), 3000)

console.log('comando apos o set')