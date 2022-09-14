/**
 * process
 */

// Root
process.stdout.write("What's your name? ");
process.stdin.on("data", (name) => {
  process.stdout.write(`Hello world with Node.js and ${name}`);

  process.exit();
});

// Using readline (default and recommended by doc)
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question(`What's your name? `, (name) => {
//   console.log(`Hi ${name}. You're welcome!`);
//   readline.close();
// });
