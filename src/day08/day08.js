// 1 :         cc         ff 
// 2 : aaaa    cc dddd ee    gggg
// 3 : aaaa    cc dddd ee    gggg
// 4 :      bb cc dddd    ff
// 5 : aaaa bb    dddd       gggg
// 6 : aaaa bb    dddd ee ff gggg
// 7 : aaaa    cc         ff
// 8 : aaaa bb cc dddd ee ff gggg
// 9 : aaaa bb cc dddd    ff gggg


const fs = require('fs');
const read = fs.readFileSync("./input/day08.txt");
const data = read.toString().split("\r\n").map(row=>row.split(' | ').map(el=>el.split(' ')))
let uniqueLength = [2,4,3,7]
let partOne = 0

data.forEach(out => {
    let output = out[1]
    output.forEach(el=>{
        uniqueLength.indexOf(el.length)>-1 ? partOne++ : undefined
    })
})

console.log(`Part 1 Result: ${partOne}`)

let partTwo = 0

data.forEach(out => {
    let letters = out[0]
    let output = out[1]
    let numbersLetters = {}
    letters.forEach(el=>{
        el.length==2 ? numbersLetters[1] = el.split('') : el.length==4 ? numbersLetters[4] = el.split('') :
        el.length==3 ? numbersLetters[7] = el.split('') : el.length==7 ? numbersLetters[8] = el.split('') : undefined
    })

    let dict = populateNumbers(numbersLetters, letters)
    let value =''
    output.forEach(letters=>{
        for(let i=0;i<10;i++){
            if(dict[i].length==letters.length && dict[i].split('').filter(el=>!letters.split('').includes(el)).length==0 ){
                value+=i
            }
        }
    })
    partTwo+=parseInt(value)
})

function populateNumbers(obj, letters){
    let posLetter = {'T':null,'M':null,'B':null,'TL':null,'TR':obj[1],'BL':null,'BR':obj[1]} // Top - Middle - Bottom - TopLeft - TopRight - BottomLeft - BottomRight
    posLetter['T'] = obj[7].filter(x => !obj[1].includes(x))[0];
    posLetter['B'] = posLetter['BL'] =  obj[8].filter(x => !obj[1].includes(x) && !obj[4].includes(x) && !obj[7].includes(x));
    posLetter['M'] = posLetter['TL'] =  obj[4].filter(x => !obj[1].includes(x));

    let sixNineZero = letters.filter(el=>el.length==6).map(el=>el.split(''))
    let k =[obj[8].filter(x=> !sixNineZero[0].includes(x))[0],obj[8].filter(x=> !sixNineZero[1].includes(x))[0],obj[8].filter(x=> !sixNineZero[2].includes(x))[0]]
    posLetter['TR'] = k.filter(x=>posLetter['TR'].includes(x))[0]
    posLetter['BR'] = posLetter['BR'].find(x=>x!==posLetter['TR'])
    posLetter['M'] = k.filter(x=>posLetter['M'].includes(x))[0]
    posLetter['TL'] = posLetter['TL'].find(x=>x!==posLetter['M'])
    posLetter['BL'] = k.filter(x=>posLetter['BL'].includes(x))[0]
    posLetter['B'] = posLetter['B'].find(x=>x!==posLetter['BL'])
  
    obj[0] = letters.filter(el=>el.length==6 && !el.includes(posLetter['M']))[0]
    obj[1] = obj[1].join('')
    obj[2] = letters.filter(el=>el.length==5 && !el.includes(posLetter['TL']) && !el.includes(posLetter['BR']))[0]
    obj[3] = letters.filter(el=>el.length==5 && !el.includes(posLetter['TL']) && !el.includes(posLetter['BL']))[0]
    obj[4] = obj[4].join('')
    obj[5] = letters.filter(el=>el.length==5 && !el.includes(posLetter['TR']) && !el.includes(posLetter['BL']))[0]
    obj[6] = letters.filter(el=>el.length==6 && !el.includes(posLetter['TR']))[0]
    obj[7] = obj[7].join('')
    obj[8] = obj[8].join('')
    obj[9] = letters.filter(el=>el.length==6 && !el.includes(posLetter['BL']))[0]

    return obj
}

console.log(`Part 2 Result: ${partTwo}`)