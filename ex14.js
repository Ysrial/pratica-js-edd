function isPerfect(n) {
    let soma = 0;
    for (let i = 1; i <= (n / 2); i++) {
        if (n % i == 0){
            soma = soma + i;
        }
        return soma == n;
        }
    }

for (let i = 1; i <= 1000; i++) {
    if (isPerfect(i)){
        console.log(`${i} é perfeito`);
    }
}

const read = require("readline-sync");

let quest = Number(read.question("Digite seu numero: "))
let p = isPerfect(quest);

console.log(`O numero ${quest} e ${p}`)