const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin"));

function solution(n) {
    if (n <= 1) return n;
    return 1 + solution(n - parseInt(Math.sqrt(n)) ** 2);
}
console.log(solution(N));