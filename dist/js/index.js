"use strict";
//inferencia de tipos x annotation
let y = 12; // inferencia de tipos
// y = "teste" // erro
let w = 12; // annotation
const mynumbers = [1, 2, 3, 4, 5]; // array de numeros
const mynumbers2 = [1, 2, 3, 4, 5]; // array de numeros
const mystrings = ["1", "2", "3", "4", "5"]; // array de strings
const myTuple = [1, "2", true]; // tupla
const user = {
    name: "teste",
    age: 12
};
// arrow function tipando parametros e retorno
const myFunc = (a, b) => a + b;
// arrow function tipando parametros, mas nao o retorno	
const myFunc2 = (a, b) => a + b;
//  any aceita qualquer tipo de dados
let a = 12;
a = "teste";
let id = 12; // union types
id = 10;
id = "aaa";
id = true;
let id2 = 12;
let productId3 = "aaa";
let id4 = true;
// enum 
// ex: tamanho de roupa
// P, M, G
// evita que o programador coloque um tamanho que nao existe e repetir o mesmo valor
var Size;
(function (Size) {
    Size.P = 'pequeno';
    Size.M = 'médio';
    Size.G = 'grande';
})(Size || (Size = {}));
const camisas = {
    name: 'Camisa Polo',
    price: 12,
    size: Size.P,
};
console.log(camisas);
// literal types
let x; // x pode ser apenas "teste", "teste2" ou "teste3"
x = "teste";
// x = "outro valor" // erro
// function types
