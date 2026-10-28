const readline = require("node:readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("entrez un nombre:", (answer) => {
   const number = Number(answer);
   console.log("le nombre est:", number);

   rl.close();
})