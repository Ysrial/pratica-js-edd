function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) {
    return false
  }
    for (let i = 2; i <= (num / 2); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
};

const read = require("readline-sync");

let p = Number(read.question("Verificacao de numero primo: "));
let n = isPrime(p);

console.log(`O valor digitado ${p} e ${n}`);