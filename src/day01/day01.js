// --- Part One ---

var fs = require('fs');
var text = fs.readFileSync("./input/day01.txt", 'utf-8');
var textByLine = text.split('\n').map((el) => +el);

let counter = 0;
for (var i = 0; i < textByLine.length; i++) {
    if (textByLine[i + 1] >= textByLine[i]) counter++;
}

console.log("Part 1 Result: " + counter);

// --- Part Two ---

const buffer = fs.readFileSync('./input/day01.txt');
const fileContent = buffer.toString();

const numbers = fileContent.split('\n').map((el) => +el);

const output =
  numbers.reduce((accu, _, i, array) => (array[i + 3] && array[i] < array[i + 3] ? ++accu : accu), 0);

console.log("Part 2 Result: " + output);

// --- --- --- --- --- --- --- --- --- --- --- ---
// other solution for this problem:

// var fs = require('fs');
// const buffer = fs.readFileSync('../../input/day01.txt');
// const fileContent = buffer.toString();

// const numbers = fileContent.split('\n').map((el) => +el);

// const output =
//   numbers
//     .reduce((accu, _, i, array) => (i > 0 && array[i] > array[i - 1] ? ++accu : accu), 0);

// console.log(output);
