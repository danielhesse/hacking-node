/**
 * Challenge 003
 * Create a program that reads two numbers and prints the sum between them.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a value: ", (firstValue) => {
  readline.question("Enter another value: ", (secondValue) => {
    const result = Number(firstValue) + Number(secondValue);

    console.log(
      `The result of adding between ${firstValue} and ${secondValue} is equal to ${result}!`
    );

    readline.close();
  });
});
