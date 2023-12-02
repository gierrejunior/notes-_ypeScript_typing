
//inferencia de tipos x annotation
let y = 12 // inferencia de tipos
// y = "teste" // erro

let w: number = 12 // annotation

const mynumbers: number[] = [1, 2, 3, 4, 5] // array de numeros
const mynumbers2: Array<number> = [1, 2, 3, 4, 5] // array de numeros

const mystrings: string[] = ["1", "2", "3", "4", "5"] // array de strings

const myTuple: [number, string, boolean] = [1, "2", true] // tupla

const user: { name: string, age: number } = { // object tipo
    name: "teste",
    age: 12
}

 // arrow function tipando parametros e retorno
const myFunc = (a: number, b: number): number => a + b

// arrow function tipando parametros, mas nao o retorno	
const myFunc2 = (a: number, b: number) => a + b 

//  any aceita qualquer tipo de dados
let a: any = 12
a = "teste"


let id: number | string | boolean = 12 // union types
id = 10
id = "aaa"
id = true

type myType = number | string | boolean // type alias
let id2: myType = 12
let productId3: myType = "aaa"
let id4: myType = true

// enum 
// ex: tamanho de roupa
// P, M, G
// evita que o programador coloque um tamanho que nao existe e repetir o mesmo valor
namespace Size {
  export const P = 'pequeno';
  export const M = 'médio';
  export const G = 'grande';
}

const camisas: { name: string, price: number, size: string } = {
  name: 'Camisa Polo',
  price: 12,
  size: Size.P,
}
console.log(camisas)

// literal types
let x: "teste" | "teste2" | null // x pode ser apenas "teste", "teste2" ou "teste3"
x = "teste"
// x = "outro valor" // erro

// function types