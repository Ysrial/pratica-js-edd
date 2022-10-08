const read = require("readline-sync");

let horatrab = Number(read.question("Quanto voce ganha por hora trabalhada? "));
let numhora = Number(read.question("Quantas horas voce trabalhou nesse mes? "));

let totalsal = numhora * horatrab;

console.log(`O seu salario sera R$ ${totalsal} nesse mes.`);