/*

string
number
boolean
array
object
undefined
null

*/


// string

let nome = 'Matheus'

console.log(nome)

// string - concatenada

let sobrenome = 'Rodrigues'
// console.log(nome + '' + sobrenome)


// string literal

console.log(`${nome} ${sobrenome}`)

// number

let idade = 20

console.log(idade)

console.log(idade + 10)

// number - float

let porcentagem = 10.2

console.log(porcentagem + '%')

// boolean (true ou false)

let maiorDeIdade = true

console.log(maiorDeIdade)

let menorDeIdade = false

console.log(menorDeIdade)

// array

let habilidades = ['JavaScript', 'Python']

console.log(habilidades)

console.log(habilidades.length)

console.log(habilidades[0])

// object

let pessoa = {
    nome: 'Fulano',
    sobrenome: 'de Tal',
    idade: 25,
    habilidades: ['C++', 'C#', 'Python']
}

console.log(pessoa)

console.log(pessoa.nome)

console.log(pessoa.habilidades[1])

// JSON (JAVASCRIPT OBJECT NOTATION)

// undefined

let endereco

console.log(endereco)


// null

let cidade = null
console.log(null)
