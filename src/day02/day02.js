var fs = require('fs');
const buffer = fs.readFileSync('../../input/day02.txt');
const file = buffer.toString();
const input = file.split('\r\n');

// --- Part One ---

let horizontal = 0;
let depth = 0;

input.forEach(function(line) {
    const myArray = line.split(" ");
    if(myArray[0] === 'up') {
        depth += parseInt(myArray[1]);
    } else if(myArray[0] === 'down') {
        depth -= parseInt(myArray[1]);
    } else if(myArray[0] === 'forward') {
        horizontal += parseInt(myArray[1]);
    }
});

console.log("Result: " + Math.abs(horizontal) * Math.abs(depth));

// --- Part Two ---

let aim = 0;
horizontal = 0;
depth = 0;
input.forEach(function(line) {
    const myArray = line.split(" ");
    if(myArray[0] === 'up') {
        aim -= parseInt(myArray[1]);
    } else if(myArray[0] === 'down') {
        aim += parseInt(myArray[1]);
    } else if(myArray[0] === 'forward') {
        horizontal += parseInt(myArray[1]);
        depth += aim * parseInt(myArray[1]);
    }
});

console.log("Result: " + Math.abs(horizontal) * Math.abs(depth));