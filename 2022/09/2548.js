const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
numbers.sort((a, b) => a - b);
console.log(numbers[parseInt(N / 2) + (N % 2) - 1]);
