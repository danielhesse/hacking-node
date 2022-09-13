/**
 * Crie um script que leia o nome de uma pessoa e mostre uma mensagem
 * de boas-vindas de acordo com o valor digitado.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's your name? `, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});
