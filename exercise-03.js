/**
 * Crie um script que leia dois números e tente mostrar a
 * soma entre eles.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Firt number: ", (firstNumber) => {
  readline.question("Second number: ", (secondNumber) => {
    const total = Number(firstNumber) + Number(secondNumber);

    console.log(
      `\nThe sum of ${firstNumber} + ${secondNumber} is equal to ${total}.`
    );

    readline.close();
  });
});
