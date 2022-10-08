function isPositivo(n) {
  if (n > 0) {
    return true
  } else {
    return false
  }
}

const read = require("readline-sync");

let n = Number(read.question("Digite um numero: "));

if (isPositivo(n) == true) {
  console.log(`${n} é positivo`)
} else {
  console.log(`${n} nao é positivo`)
}

if (isPositivo(n)) {
  console.log(`${n} é positivo`)
} else {
  console.log(`${n} nao é positivo`)
}