const fileSystem = require("fs");
const { clearScreenDown } = require("readline");

// *********** WRITE A FILE ************

//Sync... Blocking...
fileSystem.writeFileSync("./test.txt", "Hey Taufique");

// Non Blocking
//Async...  => It takes a call back insite it's method.
// fileSystem.writeFile("./test.txt", "hey Aziz", (err) => {});

//****************** READ A FILE *************************/

//Result will return in Sunc case
const file = fileSystem.readFileSync("./contact.txt", "utf8");
// console.log(file);

//It takes a call back and call back require two parameter (error, result) in it's call back
fileSystem.readFile("./contact.txt", "utf8", (err, result) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(result);
  }
});

fileSystem.appendFileSync("./test.txt", `${Date.now()}`);

// Create a file
fileSystem.cpSync("./test.txt", "./copy.txt");

//Delete a file
// fileSystem.unlinkSync("./copy.txt");

//Status of file
console.log(fileSystem.statSync("./test.txt"));
console.log(fileSystem.statSync("./test.txt").isFile()); // is it file or not?

//make a folder
// fileSystem.mkdirSync("my-folder");

// Make filders inside folder
fileSystem.mkdirSync("my-folders/a/b", { recursive: true });
