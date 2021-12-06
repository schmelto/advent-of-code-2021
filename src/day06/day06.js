var fs = require('fs');
const fish = fs.readFileSync('./input/day06.txt').toString().split(',').map(Number)
const calendar = Array(9).fill(0)

const countFish = (days) => {
  fish.forEach((f) => calendar[f]++)

  for (let i = 0; i < days; i++) {
    const newFish = calendar.shift()
    calendar.push(newFish)
    calendar[6] += newFish
  }

  console.log(calendar.reduce((acc, curr) => (acc += curr)))
}

console.log("Part 1 Result:");
countFish(80)

console.log("Part 2 Result:");
countFish(256)

