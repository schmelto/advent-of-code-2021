var fs = require('fs');
const buffer = fs.readFileSync('./input/day03.txt');
const file = buffer.toString();
const input = file.split('\r\n');

// --- Part One ---

let gamma = '';
let epsilon = '';

function transposeArray(array, x){
    var newArray = [];
    for(var i = 0; i < x; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < x; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}

let transposed_input = transposeArray(input, input[0].length);

transposed_input.forEach(function(row){
    let one = 0;
    let zero = 0;
    row.forEach(element => {
        if (element == '1') one++;
        else zero++;
    });
    if (one > zero) {
        gamma += '1';
        epsilon += '0';
    } else {
    gamma += '0';
    epsilon += '1';
    };
});


gamma = parseInt(gamma, 2); // convert to decimal
epsilon = parseInt(epsilon, 2); // convert to decimal

console.log("Result: " + Math.abs(gamma) * Math.abs(epsilon));


// --- Part Two ---

const codeLenght = input[0].length;

const ones = new Array(codeLenght).fill(0);
const zeroes = new Array(codeLenght).fill(0);

input.forEach(code => {
    for (let i = 0; i < codeLenght; i++) {
        if (code[i] == '0') {
            zeroes[i]++;
        } else {
            ones[i]++;
        }
    }
});

const getOnesAndZeroesForPos = (pos, numbers) => {
    let zero = 0;
    let one = 0;

    numbers.forEach(num => {
        if (num[pos] == '0') {
            zero++;
        } else {
            one++;
        }
    })

    return [zero, one];
};

let oxygen = [...input];

for (let i = 0; i < codeLenght; i++) {
    const [zero, one] = getOnesAndZeroesForPos(i, oxygen);
    const whatToKeep = one >= zero ? '1' : '0';
    oxygen = oxygen.filter(value => {
        return value[i] == whatToKeep;
    });
    if (oxygen.length == 1) {
        break;
    }
}

let co2 = [...input];

for (let i = 0; i < codeLenght; i++) {
    const [zero, one] = getOnesAndZeroesForPos(i, co2);
    const whatToKeep = zero <= one ? '0' : '1';
    co2 = co2.filter(value => {
        return value[i] == whatToKeep;
    });
    if (co2.length == 1) {
        break;
    }
}

const oxygenValue = parseInt(oxygen[0], 2);
const co2Value = parseInt(co2[0], 2);

console.log("Result: " + oxygenValue * co2Value);