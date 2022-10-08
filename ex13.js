function quantDias(anos, meses, dias) {
    return anos * 365 + meses * 30 + dias;
}

const read = require("readline-sync");

let anos = Number(read.question("Digite os anos: "));
let meses = Number(read.question("Digite os meses: "));
let dias = Number(read.question("Digite os dias: "));

let quant = quantDias(anos, meses, dias);

console.log(`Voce viveu ${quant} dias`);