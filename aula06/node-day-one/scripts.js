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

// const obj = {
//     t1: 'Pedido 1 ',
//     t2: 'Pedido 2 ',
//     t3: 'Pedido 3 ',
//     t4: 'Pedido 4 '
// }
// const fs = require('fs')


// console.log('Primeiro comando')


// fs.readFile('./text.txt',callback)
// function callback(error, content) {
//     if(error) return console.error('erro')
//     console.log(String(content))
// }
// console.log('Segundo comando')
// console.log('Terceiro comando')

setTimeout(myFunction, 3000)

function myFunction() {
    console.log('testando a função...')
}

// //forma resumida
// //funao anonima

// setTimeout(() => (console.log('testando o timeOut')), 3000)

// console.log('comando apos o set')

//ATIVIDADE 05 
function pegarData (){
    const date = new Date(Date.now())
    const day = date.getDay();
    const month = date.getMonth()
    const year = date.getFullYear()
    const hora = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(`O dia é ${day} do mes ${month} no ano de ${year}`)
    console.log(`a data atual é : ${date}`)
    console.log(`a hora atual é: ${hora}`)
    console.log(`os minutos atuais são: ${minutes}`)
    console.log(`Os segundos atuais sao: ${seconds}`)
}
setTimeout(pegarData, 5000)

setInterval(pegarData, 2000)
setTimeout(pegarData, 5000)

// const data = new Date('November 09, 2022 20:12:30');
// const hours = data.getHours();
// const minutes = data.getMinutes();
// const seconds = data.getSeconds();
