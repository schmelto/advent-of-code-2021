var fs = require('fs');
const crab = fs.readFileSync('./input/day07.txt').toString().split(',').map(Number);

// get distance between two points
function getDistance(x1, x2) {
    return Math.abs(x1 - x2);
}

function getdistanceArrays(array){
    let result = [];
    array.forEach(function (value, index) {
        // get distance between current value and all other values
        let distancearray = [];
        array.forEach(function (value2, index2) {
            
            if (index !== index2) {
                distancearray.push(getDistance(value, value2));
            }
        });
        result.push(distancearray);
    });
    return result;
}

let distancearray = getdistanceArrays(crab);
let result = [];
// get sum of evey array
distancearray.forEach(function (value, index) {
    let sum = 0;

    value.forEach(function (value2, index2) {
        sum += value2;
    });
    result.push(sum);
});

// find smalest value in array
let smallest = Math.min(...result);

console.log("Part 1 Result: ", smallest);

// Part 2

// As it turns out, crab submarine engines don't burn fuel at a constant rate.
// Instead, each change of 1 step in horizontal position costs 1 more unit of fuel than the last: 
// the first step costs 1, the second step costs 2, the third step costs 3, and so on.

// let summe = 0;
// for (let i = 1; i <= getDistance(16, 5); i++) {
//     summe = summe + i;
// }
// console.log(summe);

// let distancearray2 = [];
// distancearray.forEach(function (value, index) {
    
//     let array = [];
//     value.forEach(function (value2, index2) {
//         let sum = 0;
//         for (let i = 1; i <= value2; i++) {
//             sum = sum + i;
//         }
//         array.push(sum);
//     });
//     distancearray2.push(array);
// });


// let result2 = [];
// distancearray2.forEach(function (value, index) {
//     let sum = 0;
//     value.forEach(function (value2, index2) {
//         sum += value2;
//     });
//     result2.push(sum);
// });

// console.log(Math.min(...result2));