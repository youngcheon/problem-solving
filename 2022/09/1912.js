const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);
const DP = new Array();
DP[0] = numbers[0];
let answer = DP[0];
for (let i = 1; i < numbers.length; i++) {
    DP[i] = Math.max(numbers[i], DP[i - 1] + numbers[i]);
    answer = Math.max(answer, DP[i]);
}
console.log(answer);
