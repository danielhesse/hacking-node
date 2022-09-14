/**
 * Challenge 002
 * Create a program that read a person's name and display a welcome message.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What's your name? ", (name) => {
  console.log(`It's a pleasure to meet you, ${name}!`);
  readline.close();
});
