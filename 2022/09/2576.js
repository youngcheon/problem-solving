const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const numbers = input.filter((e) => e % 2);
if (numbers.length > 0) {
    console.log(numbers.reduce((a, b) => a + b));
    console.log(Math.min(...numbers));
} else {
    console.log(-1);
}
