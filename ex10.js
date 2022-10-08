const read = require("readline-sync");

let num1 = Number(read.question("Digite um numero: "));
let num2 = Number(read.question("Digite outro numero: "));

if (num1 > num2) {
  let aux = num1;
  num1 = num2;
  num2 = aux;
}
for (let i = num1; i <= num2; i++) {
  console.log(i);
}

// if (num1 < num2) {
//     for (let i = num1; i <= num2; i++) {
//         console.log(i);
//     }
// } else {
//     for (let i = num1; i >= num2; i--) {
//         console.log(i);
//     }
// }