const read = require("readline-sync");

let valor = Number(read.question("Digite o valor: "));

if (valor > 0) {
    console.log(`O ${valor} é positivo.`);
} else if (valor < 0) {
    console.log(`O ${valor} é negativo.`);
} else if (valor == 0) {
    console.log(`O número é zero.`);
} else {
    console.log("Esse valor não existe.");
}