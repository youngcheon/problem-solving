const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, C] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
const map = new Map();

numbers.forEach((e) => {
    map.set(e, map.get(e) + 1 || 1);
});

const answer = [...map]
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => Array(v).fill(k))
    .flat();

console.log(answer.join(" "));
