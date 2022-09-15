const numbers = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);
const sortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);
const hashTable = new Map();
sortedNumbers.forEach((e, i) => hashTable.set(e, i));
const answer = numbers.map((e) => hashTable.get(e));
console.log(answer.join(" "));
