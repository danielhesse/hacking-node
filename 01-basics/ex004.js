/**
 * Challenge 004
 * Create a program that reads something through the keyboard and shows on the
 * screen its primitive type and all possible information about it.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Type something: ", (value) => {
  console.log("The primitive type of this value is ", typeof value.valueOf());

  console.log("Only have spaces? ", value.trim().length === 0);

  console.log("Is it a number? ", !Number(value) ? false : true);

  console.log("Is it alphabetical? ", !value.match(/[0-9]/g));

  console.log(
    "Is it alphanumerical? ",
    !!value.match(/[a-zA-Z]/g) && !!value.match(/[0-9]/g)
  );

  console.log("Is it capitalized? ", !value.match(/[a-z]/g));

  console.log(
    "Is it lowercase? ",
    !!value.match(/[a-z]/g) && !!!value.match(/[A-Z]/g)
  );

  console.log(
    "Is it camelcase?",
    !!value.match(/[a-z]/g) && !!value.match(/[A-Z]/g)
  );

  readline.close();
});
