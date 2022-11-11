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


// setTimeout(myFunction, 3000)

// function myFunction() {
//     console.log('testando a função...')
// }

// //forma resumida
// //funao anonima

// setTimeout(() => (console.log('testando o timeOut')), 3000)

// console.log('comando apos o set')

//ATIVIDADE 05 
// function pegarData (){
//     const date = new Date(Date.now())
//     const day = date.getDay();
//     const month = date.getMonth()
//     const year = date.getFullYear()
//     const hora = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     console.log(`O dia é ${day} do mes ${month} no ano de ${year}`)
//     console.log(`a data atual é : ${date}`)
//     console.log(`a hora atual é: ${hora}`)
//     console.log(`os minutos atuais são: ${minutes}`)
//     console.log(`Os segundos atuais sao: ${seconds}`)
// }
// setTimeout(pegarData, 5000)

// setTimeout(pegarData, 2000)
// setTimeout(pegarData, 5000)

// const data = new Date('November 09, 2022 20:12:30');
// const hours = data.getHours();
// const minutes = data.getMinutes();
// const seconds = data.getSeconds();

//AULA 07 - 10/11/2022
//Utilizando programação assincrona

function sum(){
    
    const result = 1 + 1
    if(result === 2){
        sucess()
    }else{
        erro()
    }
}

function sucess() {
    console.log(`O resultado da soma é 2`)
}
function erro(){
    console.log(`A soma não é o resultado esperado`)
}
sum()
//o fato por exemplo de que o consol

//O CODIGO ACIMA NÃO TEM PROGRAMAÇÃO ASSINCRONA

//vamos transforma para callback

function sum2(callback, callbackErro, vetor) {
    const result2 = 1 + 1
    if(result2 === 2) {
        const vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        callback()
    }else{
        callbackErro()
    }

}

sum2(
    () => (console.log('Sucesso, é 2') ),
    () => (console.log('Erro!')),
    () => (console.log(vetor))
)
console.log('Testando o tempo')


const promisse = new Promise((resolve, reject) => {
    const result3 = 1 + 1
    if(result3 === 2) {
        resolve()
    }else{
        reject()
    }

})

promisse.then((resultado)=>(console.log(resultado)))
promisse.catch((resultado)=>(console.log(resultado)))