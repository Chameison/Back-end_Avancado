
// //Aula 01
// console.log('texto')
// console.error('Essa é uma mensagem de erro')
// console.warn('Isso é um alerta!')

// //Aula 02 
// //variaveis
// var primeiro
// let segundo
// const terceiro = 1

// let x = 10
// if(true) {
//     let x = 20
// }

// console.log(x);

// //string
// const name = 'Chameison'
// console.log(name)
// console.log(typeof name)
// //number
// const num = 10;
// console.log(num)
// console.log(typeof num)

// //bool 
// const isOpen = true //geralmente quando começa com is é bool

// console.log(isOpen)
// console.log(typeof isOpen)

// obj = {
//     nome : 'chameison',
//     idade : '19',
//     altura : 1.69
// };
// //object
// console.log(obj)
// console.log(typeof obj)
// console.log(obj.idade)

// //null
// const a = null;
// console.log(a)
// console.log(typeof a)

// //undefined

// let nada
// console.log(nada)
// console.log(typeof nada)

// //array 

// const linguagem = ['C++', 'Java', 'Python', 'JS']
// console.log(typeof linguagem)
// console.log(linguagem)
// console.log(linguagem[3])
// console.log(typeof linguagem[1])

// // object literals
// const user = {
//     username: 'Chameison',
//     password: '*****',
//     age: 20,
//     name: 'Chameison'
// }

// console.log(user)


// //metodos de string
// const word = 'qualquer um'
// console.log(word.length)

// //quebrar texto em um conjunto de caracteres
// const textToArray = word.split('quer')
// console.log(textToArray[1])
// console.log(word.toLocaleUpperCase)

// //procurar algo dentro de uma string
// console.log(word.indexOf('abc'))
// console.log(word.charAt(0))
// console.log(word.slice(1,4))

// //mais sobre arrays

// const chars = ['AAA', 'B', 'C', 'D']
// console.log(chars.length)
// console.log(chars[chars.length-1])
// chars[5] = 'F'
// console.log(chars)
// chars.pop() //sempre remove no final
// chars.unshift('NEW')
// //FIM AULA 
// //DESAFIO DA CALCULADORA = CONCLUIDO

// //AULA 03

// const product = {
//     name: 'Bermuda',
//     price: 50.00,
//     inStock: true,
//     size: ['p', 'm', 'g', 'gg'],
//     'main color': 'red'
// }
// console.log(product.size[product.size.length-1])
// console.log(product.name)
// console.log(product['main color'])
// //destructirin - desestruturação

// let { name, price } = product
// console.log(price)
// price = 29.99
// console.log(price)
// console.log(product.price)

// const vector = [1,2,3,4,5,6,7,8,9]
// let [ v1, v2, ...othervector] = vector
// console.log(v1, v2)
// console.log(othervector)


// //JSON - JavaScript Object Notation
// //XML é concorrente do JSON

// //criando o objeto cachorro
// const dog = {
//     name: 'Odin',
//     age: 3,
//     type: 'pincher'
// }
// console.log(dog)

// const dogJson = JSON.stringify(dog)

// console.log(dogJson)
// const dogObject = JSON.parse(dogJson)

// console.log(dogObject)

// const jsonErrado = '{"primeiro":"dado1","segundo":222,"terceiro":"dado3"}' //aspas " depois de dado3

// const jsonErradoObject = JSON.parse(jsonErrado)
// console.log(jsonErradoObject)

// //DESAFIO 2 - AULA 03
// let i

// const vetor1 = [1,2,3,4,5]
// const obj = {n1 : vetor1[0], n2: vetor1[1], n3: vetor1[2], n4: vetor1[3], n5: vetor1[4]}


// let num1 = obj.n1
// let num2 = obj.n2
// let num3 = obj.n3
// let num4 = obj.n4
// let num5 = obj.n5

// //forma alternativa, fiz a de cima
// const {nn1, nn2, nn3, nn4, nn5} = obj

// console.log(nn2)

// console.log(num1)
// console.log(num2)
// console.log(num3)
// console.log(num4)
// console.log(num5)

// console.log('{"n1":'+num1+', "n2":'+num2+', "n3": '+num3+', "n4": '+num4+', "n5": '+num5+'}')

//fim primeiro

//desafio 2 resoluçãp
// let numero1 = 10
// let numero2 = 20
// const calc = {
//     soma: numero1 + numero2,
//     sub: numero1 - numero2,
//     mult: numero1 * numero2,
//     div: numero1 / numero2
// }
// console.log(JSON.stringify(calc))
// //estruturas, metodos de listas, funcoes

// const n = 100
// if(n > 100){
    
// }

//AULA 04

// const a = 5
// const b = 10
// const out = ('Quinze é ' + (a+b) + '\ne não ' + (2*a+b) + '.')

// console.log(out)
// const out2 = (`Quinzé é ${a+b} \nNão é  ${2*(a+b)} .` )
// console.log(out2)

// //metodos de arrays 

// const names = ['Victor', 'Paulo', 'Chameison', 'John']

// names.forEach(function(name){ //forEach
//     console.log(name) 
// })

// const modifiedNames = names.map(function(name) {//map = pegar informaç~pes
//     if(name == 'Chameison')
//         return ('Chameison Araújo')
//     else 
//         return name
// })

// console.log(modifiedNames)

// modifiedNames.forEach(function(name) {
//     console.log(name)
// })

// //filter 
// const vetorEx = [1,5,7,9,5,24,79,343,757,893,3475,764].filter(function(num){

//     if(num < 10)     //pode ser somente return name < 10 p
//         return num  
// })
// vetorEx.forEach(function(num) {
//     console.log(num)
// })

// const somaVetor = vetorEx.reduce(function(num, num2){
//     return num+num2
// })

// console.log(somaVetor)

// //funções 
// //pesquisar mais sobre funções anonimas


// function firstFunction(name, surname, idade, altura) {
//     return `O nome completo é ${name} ${surname} e estou com ${idade} anos e ${altura} m de altura`
// }
const pessoa = {
    nome: "Chameison",
    sobrenome: "Araujo",
    idade: 20,
    altura: 1.7,
    data: '03/04/2002'
}
console.log(firstFunction(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.altura)) 

//arrow function === função anônima
//=>
// function(data)
//pesquisar sobre fetch]

const myArrowFunction = function(a,b, opera){
    if(opera == 'sum') {
        return a + b
    }
    if(opera == 'sub') {
        return a - b
    }
    if(opera == 'div') {
        return a / b
    }
    if(opera == 'multi') {
        return a * b
    }
}

console.log(myArrowFunction(20, 10, 'sub'))

//desafio 01 da aula 04

const ArrowSoma = (x) => () => (x + 5)

console.log(ArrowSoma())



// () = ( (x=7) => (x+5) )