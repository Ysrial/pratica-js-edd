const read = require("readline-sync");

// let nota = Number(read.question("Digite um valor: "));

// while (nota < 0 || nota > 10) {
//     console.log("Nota inválida")
//     nota = Number(read.question("Digite um valor: "));
// }

// console.log(`A nota ${nota} é válida.`)

let nota;
do {
  nota = Number(read.question("Digite um valor: "));
  if (nota < 0 || nota > 10) {
    console.log("Nota inválida");
  }
} while (nota < 0 || nota > 10)
console.log(`A nota ${nota} é válida.`);

for (; ;) {
  let nota = Number(read.question("Digite um valor: "));
  if (nota < 0 || nota > 10)
    console.log("Nota inválida");
}