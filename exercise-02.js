/**
 * Crie um script que leia o dia, o mês e o ano de nascimento de uma
 * pessoa e mostre uma mengaem com a data formatada.
 */

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Day = ", (day) => {
  readline.question("Month = ", (month) => {
    readline.question("Year = ", (year) => {
      console.log(`\nYou were born in ${day}/${month}/${year}. Right?`);

      readline.close();
    });
  });
});
