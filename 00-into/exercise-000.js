/**
 * process
 */

process.stdout.write("What's your name? ");
process.stdin.on("data", (name) => {
  process.stdout.write(`Hello world with Node.js and ${name}`);

  process.exit();
});
