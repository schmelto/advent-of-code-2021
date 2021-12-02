// --- Part One ---

var fs = require('fs');
var text = fs.readFileSync("../../input/day01.txt", 'utf-8');
var textByLine = text.split('\n').map((el) => +el);

let counter = 0;
for (var i = 0; i < textByLine.length; i++) {
    if (textByLine[i + 1] >= textByLine[i]) counter++;
}

console.log(counter);

// --- Part Two ---

const buffer = fs.readFileSync('../../input/day01.txt');
const fileContent = buffer.toString();

const numbers = fileContent.split('\n').map((el) => +el);

const output =
  numbers.reduce((accu, _, i, array) => (array[i + 3] && array[i] < array[i + 3] ? ++accu : accu), 0);
//   .reduce((accu, _, i, array) => (array[i + 2] ? [...accu, array[i] + array[i + 1] + array[i + 2]] : accu), [])
//   .reduce((accu, _, i, array) => (i > 0 && array[i] > array[i - 1] ? ++accu : accu), 0);


console.log(output); // 1344






// other solution for this problem:

// var fs = require('fs');
// const buffer = fs.readFileSync('../../input/day01.txt');
// const fileContent = buffer.toString();

// const numbers = fileContent.split('\n').map((el) => +el);

// const output =
//   numbers
//     .reduce((accu, _, i, array) => (i > 0 && array[i] > array[i - 1] ? ++accu : accu), 0);

// console.log(output);