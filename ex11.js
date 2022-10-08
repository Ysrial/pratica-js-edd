function Volume(raio) {
  return 4 / 3 * Math.PI * Math.pow(raio, 3);
}

const read = require("readline-sync");

let r = Number(read.question("Digite o raio: "));
let v = Volume(r);

console.log(`O volume da esfera de raio ${r} e ${v.toFixed(2)}`)