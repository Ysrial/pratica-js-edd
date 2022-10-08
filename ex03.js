const read = require("readline-sync");

let dias = Number(read.question("Digite os dias: "));
let km = Number(read.question("Digite os kilometros: "));

let aluguel = dias * 60 + km * 0.15;

console.log(`A quantia a pagar será R$ ${aluguel.toFixed(2)}`);