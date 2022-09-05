const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const students = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
console.log(students[K - 1]);
