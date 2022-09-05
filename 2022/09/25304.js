const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let X = parseInt(input.shift());
input.shift();
for (const [a, b] of input.map((e) => e.split(" ").map(Number))) {
    X -= a * b;
}
console.log(!X ? "Yes" : "No");
