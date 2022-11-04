
//Aula 01
console.log('texto')
console.error('Essa é uma mensagem de erro')
console.warn('Isso é um alerta!')

//Aula 02 
//variaveis
var primeiro
let segundo
const terceiro = 1

let x = 10
if(true) {
    let x = 20
}

console.log(x);

//string
const name = 'Chameison'
console.log(name)
console.log(typeof name)
//number
const num = 10;
console.log(num)
console.log(typeof num)

//bool 
const isOpen = true //geralmente quando começa com is é bool

console.log(isOpen)
console.log(typeof isOpen)

obj = {
    nome : 'chameison',
    idade : '19',
    altura : 1.69
};
//object
console.log(obj)
console.log(typeof obj)
console.log(obj.idade)

//null
const a = null;
console.log(a)
console.log(typeof a)

//undefined

let nada
console.log(nada)
console.log(typeof nada)

//array 

const linguagem = ['C++', 'Java', 'Python', 'JS']
console.log(typeof linguagem)
console.log(linguagem)
console.log(linguagem[3])
console.log(typeof linguagem[1])

// object literals
const user = {
    username: 'Chameison',
    password: '*****',
    age: 20,
    name: 'Chameison'
}

console.log(user)


//metodos de string
const word = 'qualquer um'
console.log(word.length)

//quebrar texto em um conjunto de caracteres
const textToArray = word.split('quer')
console.log(textToArray[1])
console.log(word.toLocaleUpperCase)

//procurar algo dentro de uma string
console.log(word.indexOf('abc'))
console.log(word.charAt(0))
console.log(word.slice(1,4))

//mais sobre arrays

const chars = ['AAA', 'B', 'C', 'D']
console.log(chars.length)
console.log(chars[chars.length-1])
chars[5] = 'F'
console.log(chars)
chars.pop() //sempre remove no final
chars.unshift('NEW')
