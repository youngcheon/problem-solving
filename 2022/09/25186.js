const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = BigInt(input[0]);
const D = input[1].split(" ").map(BigInt);
const sum = D.reduce((a, b) => BigInt(a) + BigInt(b));

function solution() {
    if (N === 1 && D[0] === 1) return "Happy";
    for (let i = 0; i < N; i++) {
        if (sum - D[i] < D[i]) return "Unhappy";
    }
    return "Happy";
}
console.log(solution());
