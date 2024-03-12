const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// console.log(1);

//Blocking
const result = fs.readFileSync("contact.txt", "utf8");
// console.log(result);

// console.log(2);

///////////

// console.log(1);

// Non-Blocking
fs.readFile("contact.txt", "utf8", (err, result) => {
  //   console.log(result);
});

// console.log(2);

// Default Thread pool size = 4
//Maximum? - 8core cpu - 8
