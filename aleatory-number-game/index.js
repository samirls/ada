const prompt = require("prompt-sync")();

const aleatoryNumber = Math.floor(Math.random() * 100) + 1;
let numberOfTries = 0;

console.log(aleatoryNumber)

console.log("Tente adivinhar o número entre 1 e 100.");

let guess = parseInt(prompt("Digite um número: "));

while (true) {

  numberOfTries++;

  if (guess === aleatoryNumber) {
    console.log(`Você acertou o número ${aleatoryNumber} em ${numberOfTries} tentativas.`);
    break;
  } else if (guess < aleatoryNumber) {
    console.log('O número é maior que o informado.');
    guess = parseInt(prompt("Tente novamente: "));
  } else {
    console.log('O número é menor que o informado.');
    guess = parseInt(prompt("Tente novamente: "));
  }
}